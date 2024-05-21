import type { ProductType } from "@/types/products";

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
        .eq("user_id", authStore.user?.id as string);

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

  const createProduct = async (product: ProductType) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert([product] as never[])
        .select();
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
    createProduct,
    userProducts,
    products,
  };
});
