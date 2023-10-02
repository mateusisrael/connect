import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log(supabaseUrl)
console.log(supabaseKey)

export const client = createClient(supabaseUrl, supabaseKey);