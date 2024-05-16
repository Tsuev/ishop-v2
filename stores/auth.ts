export const useAuthStore = defineStore("auth", () => {
  const supabase = useSupabaseClient();

  const user = ref(null);

  const registration = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    registration,
    login,
  };
});
