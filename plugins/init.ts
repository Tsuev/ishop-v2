export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();

  authStore.getUser();
});
