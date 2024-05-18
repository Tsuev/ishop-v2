export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (!authStore.user && to.path === "/lk") {
    return navigateTo("/");
  }
});
