import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const supabase = createClient(
    runtimeConfig.SUPABASE_URL,
    runtimeConfig.SUPABASE_API_KEY
  );

  return {
    provide: {
      supabase,
    },
  };
});
