import type { User } from "@supabase/supabase-js";

export const useAuthStore = defineStore("auth", () => {
  const supabase = useSupabaseClient();
  const toast = useToast();

  const user = ref<User | null>(null);

  const registration = async (
    email: string,
    password: string,
    phone: string
  ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            phone: phone,
          },
        },
      });

      if (error) throw error;

      user.value = data.user;
      toast.add({
        severity: "success",
        detail: "Вы авторизовались",
        life: 2000,
        summary: "Успешная регистрация",
      });
    } catch (error) {
      toast.add({
        severity: "error",
        life: 2000,
        detail: "Произошла ошибка регистрации",
        summary: "Ошибка",
      });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      user.value = data.user;
      toast.add({
        severity: "success",
        life: 2000,
        detail: "Вы вошли в свой аккаунт",
        summary: "Успешный вход",
      });
    } catch (error) {
      toast.add({
        severity: "error",
        life: 2000,
        detail: "Произошла ошибка авторизации",
        summary: "Ошибка",
      });
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
    toast.add({
      severity: "info",
      life: 2000,
      detail: "Вы вышли из аккаунта",
      summary: "Выход",
    });
  };

  const authStateChange = async () => {
    supabase.auth.onAuthStateChange((_, session) => {
      user.value = session?.user || null;
    });
  };

  const getUser = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      user.value = data.user;
    } catch (error) {
      toast.add({
        severity: "error",
        life: 2000,
        detail: "Произошла ошибка при получении ваших данных",
        summary: "Ошибка",
      });
    }
  };
  return {
    authStateChange,
    registration,
    login,
    getUser,
    logout,
    user,
  };
});
