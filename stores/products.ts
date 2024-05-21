export const useProductsStore = defineStore("products", () => {
  const supabase = useSupabaseClient();
  const toast = useToast();
  const authStore = useAuthStore();

  const products = ref([]);
  const userProducts = ref([]);

  const getUserProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("user_id", authStore.user?.id);

      if (error) throw error;

      userProducts.value = data;
    } catch (error) {
      toast.add({
        severity: "error",
        life: 2000,
        detail: "Произошла ошибка подгрузки ваших смартфонов",
        summary: "Ошибка",
      });
    }
  };

  return {
    getUserProducts,
    products,
    userProducts,
  };
});
