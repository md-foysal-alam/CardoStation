import { supabase } from "../suapabase.js";

export const allClients = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("CardoStation-Clients")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error("Supabase fetch error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
