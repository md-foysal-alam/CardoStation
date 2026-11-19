import { supabase } from "../suapabase.js";

const TABLE = "CardoStation-Clients";

/* ─────────────────────────────────────────────────────────
 * POST /client/insertClient
 * Body: { name, email, interest, budget, message }
 *
 * budget column is TEXT — we store the human-readable label
 * sent from the frontend, e.g. "$25k - $50k".
 * ───────────────────────────────────────────────────────── */
export const insertClient = async (req, res) => {
  try {
    const { name, email, interest, message } = req.body || {};

    // Validation
    const missing = [];
    if (!name?.trim())     missing.push("name");
    if (!email?.trim())    missing.push("email");
    if (!interest?.trim()) missing.push("interest");
    if (!message?.trim())  missing.push("message");

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required field(s): ${missing.join(", ")}`,
      });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address",
      });
    }

    const row = {
      name:     name.trim(),
      email:    email.trim().toLowerCase(),
      interest: interest.trim(),
      message:  message.trim(),
    };

    const { data, error } = await supabase
      .from(TABLE)
      .insert([row])
      .select();

    if (error) throw error;

    return res.status(201).json({
      success: true,
      message: "Data inserted into Supabase successfully!",
      data: data[0],
    });
  } catch (error) {
    console.error("insertClient error:", error.message);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to insert client",
    });
  }
};