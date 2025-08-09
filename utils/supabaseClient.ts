// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// if (!supabaseUrl) {
//   throw new Error("NEXT_PUBLIC_SUPABASE_URL environment variable is not set");
// }

// if (!supabaseKey) {
//   throw new Error(
//     "NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is not set"
//   );
// }

// export const supabase = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: true,
//     flowType: "pkce",
//   },
// });
