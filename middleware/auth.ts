export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (!authStore.user && to.path === "/profile") {
    return navigateTo("/");
  }
});
