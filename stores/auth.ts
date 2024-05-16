import type { User } from "@supabase/supabase-js";

export const useAuthStore = defineStore("auth", () => {
  const supabase = useSupabaseClient();
  const toast = useToast();

  const user = ref<User | null>(null);

  const registration = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        toast.add({
          severity: "error",
          detail: "Произошла ошибка регистрации: " + error.message,
          summary: "Ошибка",
        });
      } else {
        user.value = data.user;
        toast.add({
          severity: "success",
          detail: "Вы авторизовались",
          summary: "Успешная регистрация",
        });
      }
    } catch (error) {
      toast.add({
        severity: "error",
        detail: "Произошла ошибка регистрации",
        summary: "Ошибка",
      });
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

  const authStateChange = async () => {
    supabase.auth.onAuthStateChange((_, session) => {
      user.value = session?.user || null;
    });
  };

  return {
    authStateChange,
    registration,
    login,
    user,
  };
});
