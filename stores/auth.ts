export const useAuthStore = defineStore("auth", () => {
  const supabase = useSupabaseClient();

  const registration = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      console.log(data);
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
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
