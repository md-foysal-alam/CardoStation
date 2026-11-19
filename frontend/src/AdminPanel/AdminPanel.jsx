import { useEffect, useMemo, useState } from "react";

const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");
const GET_CLIENTS_URL = `${API_BASE}/client/allClients`; 
const SEND_REPLY_URL = `${API_BASE}/client/sendReply`; 

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || "?";

export default function AdminPanel() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [query, setQuery] = useState("");
  const [interest, setInterest] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState(null); // { type: "ok" | "err", text }
  const [repliedIds, setRepliedIds] = useState(() => new Set());

  /* ── load clients ── */
  const loadClients = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const res = await fetch(GET_CLIENTS_URL);
      const raw = await res.text();
      let json;
      try {
        json = JSON.parse(raw);
      } catch {
        throw new Error(
          `Server answered ${res.status} but not with JSON. Check that ${GET_CLIENTS_URL} is a real route.`
        );
      }
      if (!res.ok || !json.success) {
        throw new Error(json.error || `Could not load clients (${res.status})`);
      }
      // Give every row a stable key even if the table has no "id" column
      setClients(
        (json.data || []).map((c, i) => ({
          ...c,
          _key: c.id ?? `${c.email}-${c.created_at}-${i}`,
        }))
      );
    } catch (err) {
      setLoadError(
        err instanceof TypeError
          ? `Cannot reach ${API_BASE}. Is the server running, and is CORS enabled?`
          : err.message || "Could not reach the server"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  /* ── derived data ── */
  const interests = useMemo(
    () => [...new Set(clients.map((c) => c.interest).filter(Boolean))],
    [clients]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clients.filter((c) => {
      const matchesInterest = interest === "all" || c.interest === interest;
      const matchesQuery =
        !q ||
        [c.name, c.email, c.message, c.interest]
          .filter(Boolean)
          .some((v) => v.toLowerCase().includes(q));
      return matchesInterest && matchesQuery;
    });
  }, [clients, query, interest]);

  const selected = clients.find((c) => c._key === selectedId) || null;

  /* ── select a client ── */
  const selectClient = (client) => {
    setSelectedId(client._key);
    setSubject(`Re: your enquiry about ${client.interest}`);
    setBody(`Hi ${client.name},\n\nThanks for reaching out to CardoStation.\n\n`);
    setNotice(null);
  };

  /* ── send reply ── */
  const sendReply = async (e) => {
    e.preventDefault();
    if (!selected) return;
    if (!subject.trim() || !body.trim()) {
      setNotice({ type: "err", text: "Add a subject and a message before sending." });
      return;
    }

    setSending(true);
    setNotice(null);
    try {
      const res = await fetch(SEND_REPLY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: selected.email,
          name: selected.name,
          subject: subject.trim(),
          message: body.trim(),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Message could not be sent");
      }
      setRepliedIds((prev) => new Set(prev).add(selected._key));
      setNotice({ type: "ok", text: `Message sent to ${selected.email}.` });
      setBody("");
    } catch (err) {
      setNotice({ type: "err", text: err.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="cs">
      <style>{css}</style>

      <header className="cs-top">
        <div>
          <h1>CardoStation clients</h1>
          <p>
            {loading
              ? "Loading…"
              : `${clients.length} enquir${clients.length === 1 ? "y" : "ies"}`}
          </p>
        </div>
        <button className="cs-btn cs-btn-ghost" onClick={loadClients} disabled={loading}>
          Refresh
        </button>
      </header>

      <div className="cs-body">
        {/* ── list column ── */}
        <aside className={`cs-list ${selected ? "has-selection" : ""}`}>
          <div className="cs-filters">
            <input
              type="search"
              placeholder="Search name, email or message"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search clients"
            />
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              aria-label="Filter by interest"
            >
              <option value="all">All interests</option>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {loadError && (
            <div className="cs-state cs-state-err">
              <p>{loadError}</p>
              <button className="cs-btn" onClick={loadClients}>
                Try again
              </button>
            </div>
          )}

          {!loadError && !loading && filtered.length === 0 && (
            <div className="cs-state">
              <p>
                {clients.length
                  ? "No clients match your search."
                  : "The server returned 0 clients. If your table has rows, Supabase Row Level Security is hiding them — see getAllData.js."}
              </p>
            </div>
          )}

          <ul>
            {filtered.map((c) => (
              <li key={c._key}>
                <button
                  className={`cs-row ${c._key === selectedId ? "active" : ""}`}
                  onClick={() => selectClient(c)}
                >
                  <span className="cs-avatar">{initials(c.name)}</span>
                  <span className="cs-row-main">
                    <span className="cs-row-top">
                      <strong>{c.name}</strong>
                      <time>{formatDate(c.created_at).split(",")[0]}</time>
                    </span>
                    <span className="cs-row-tag">
                      {c.interest}
                      {repliedIds.has(c._key) && <em>Replied</em>}
                    </span>
                    <span className="cs-row-msg">{c.message}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* ── detail column ── */}
        <main className="cs-detail">
          {!selected ? (
            <div className="cs-empty">
              <p>Select a client to read their message and reply.</p>
            </div>
          ) : (
            <>
              <button className="cs-back" onClick={() => setSelectedId(null)}>
                ← All clients
              </button>

              <section className="cs-card">
                <div className="cs-who">
                  <span className="cs-avatar lg">{initials(selected.name)}</span>
                  <div>
                    <h2>{selected.name}</h2>
                    <a href={`mailto:${selected.email}`}>{selected.email}</a>
                  </div>
                </div>

                <dl className="cs-meta">
                  <div>
                    <dt>Interested in</dt>
                    <dd>{selected.interest}</dd>
                  </div>
                  <div>
                    <dt>Received</dt>
                    <dd>{formatDate(selected.created_at)}</dd>
                  </div>
                </dl>

                <blockquote>{selected.message}</blockquote>
              </section>

              <form className="cs-card" onSubmit={sendReply}>
                <h3>Reply to {selected.name.split(" ")[0]}</h3>

                <label>
                  To
                  <input value={selected.email} readOnly />
                </label>

                <label>
                  Subject
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>

                <label>
                  Message
                  <textarea
                    rows={8}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </label>

                {notice && (
                  <p className={`cs-notice ${notice.type}`} role="status">
                    {notice.text}
                  </p>
                )}

                <div className="cs-actions">
                  <button className="cs-btn cs-btn-primary" disabled={sending}>
                    {sending ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 * Styles (self-contained so the file drops into any project)
 * ───────────────────────────────────────────────────────── */
const css = `
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap");

.cs {
  --ink: #14202b;
  --muted: #5d6b78;
  --line: #d9e0e6;
  --surface: #ffffff;
  --bg: #eef2f5;
  --accent: #0b6e6e;
  --accent-ink: #ffffff;
  --accent-soft: #dff1f0;
  --ok: #19754a;
  --err: #b3261e;
  font-family: "Public Sans", system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.cs *, .cs *::before, .cs *::after { box-sizing: border-box; }
.cs button, .cs input, .cs select, .cs textarea { font: inherit; color: inherit; }
.cs :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

.cs-top {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 24px; background: var(--surface); border-bottom: 1px solid var(--line);
}
.cs-top h1 { margin: 0; font-size: 20px; font-weight: 700; }
.cs-top p { margin: 2px 0 0; font-size: 13px; color: var(--muted); }

.cs-body {
  flex: 1; display: grid; grid-template-columns: 380px 1fr; min-height: 0;
}

/* list */
.cs-list {
  background: var(--surface); border-right: 1px solid var(--line);
  overflow-y: auto; max-height: calc(100vh - 69px);
}
.cs-filters { display: grid; gap: 8px; padding: 12px; border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--surface); z-index: 1; }
.cs-filters input, .cs-filters select, .cs-card input, .cs-card textarea {
  width: 100%; padding: 9px 11px; border: 1px solid var(--line); border-radius: 6px; background: #fff;
}
.cs-list ul { list-style: none; margin: 0; padding: 0; }
.cs-row {
  display: flex; gap: 12px; width: 100%; text-align: left; cursor: pointer;
  padding: 14px 12px; background: none; border: 0; border-bottom: 1px solid var(--line);
  border-left: 3px solid transparent;
}
.cs-row:hover { background: #f6f9fb; }
.cs-row.active { background: var(--accent-soft); border-left-color: var(--accent); }
.cs-row-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
.cs-row-top { display: flex; justify-content: space-between; gap: 8px; }
.cs-row-top time { font-size: 12px; color: var(--muted); white-space: nowrap; }
.cs-row-tag { font-size: 12px; color: var(--accent); font-weight: 600; }
.cs-row-tag em { font-style: normal; margin-left: 8px; color: var(--ok); font-weight: 500; }
.cs-row-msg { font-size: 13px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.cs-avatar {
  flex: none; width: 36px; height: 36px; border-radius: 50%;
  display: grid; place-items: center; font-size: 13px; font-weight: 600;
  background: var(--accent); color: var(--accent-ink);
}
.cs-avatar.lg { width: 48px; height: 48px; font-size: 16px; }

.cs-state { padding: 24px 16px; text-align: center; color: var(--muted); font-size: 14px; }
.cs-state-err p { color: var(--err); }

/* detail */
.cs-detail { padding: 24px; overflow-y: auto; max-height: calc(100vh - 69px); display: flex; flex-direction: column; gap: 16px; }
.cs-empty { margin: auto; color: var(--muted); }
.cs-back { display: none; align-self: flex-start; background: none; border: 0; color: var(--accent); cursor: pointer; padding: 0; font-weight: 600; }
.cs-card {
  background: var(--surface); border: 1px solid var(--line); border-radius: 10px;
  padding: 20px; display: flex; flex-direction: column; gap: 14px; max-width: 760px; width: 100%;
}
.cs-card h2, .cs-card h3 { margin: 0; }
.cs-card h2 { font-size: 18px; }
.cs-card h3 { font-size: 16px; }
.cs-who { display: flex; align-items: center; gap: 14px; }
.cs-who a { color: var(--accent); font-size: 14px; text-decoration: none; }
.cs-who a:hover { text-decoration: underline; }
.cs-meta { display: flex; flex-wrap: wrap; gap: 24px; margin: 0; }
.cs-meta dt { font-size: 12px; color: var(--muted); }
.cs-meta dd { margin: 2px 0 0; font-weight: 600; font-size: 14px; }
.cs-card blockquote {
  margin: 0; padding: 14px 16px; background: #f6f9fb; border-left: 3px solid var(--accent);
  border-radius: 0 6px 6px 0; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere;
}
.cs-card label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; }
.cs-card input[readonly] { background: #f6f9fb; color: var(--muted); }
.cs-card textarea { resize: vertical; line-height: 1.5; font-weight: 400; }

.cs-notice { margin: 0; font-size: 14px; padding: 10px 12px; border-radius: 6px; }
.cs-notice.ok { background: #e3f4ea; color: var(--ok); }
.cs-notice.err { background: #fbe8e6; color: var(--err); }

.cs-actions { display: flex; justify-content: flex-end; }
.cs-btn {
  padding: 9px 16px; border-radius: 6px; border: 1px solid var(--line);
  background: var(--surface); cursor: pointer; font-weight: 600;
}
.cs-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.cs-btn-primary { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
.cs-btn-primary:hover:not(:disabled) { background: #095b5b; }
.cs-btn-ghost:hover:not(:disabled) { background: #f6f9fb; }

/* mobile: show list OR detail */
@media (max-width: 820px) {
  .cs-body { grid-template-columns: 1fr; }
  .cs-list { max-height: none; border-right: 0; }
  .cs-list.has-selection { display: none; }
  .cs-body:has(.cs-list:not(.has-selection)) .cs-detail { display: none; }
  .cs-back { display: block; }
  .cs-detail { max-height: none; padding: 16px; }
}
`;