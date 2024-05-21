export default defineNuxtRouteMiddleware(() => {
  const productsStore = useProductsStore();
  productsStore.getUserProducts();
});
