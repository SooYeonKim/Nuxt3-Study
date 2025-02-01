export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated.value) {
    if (import.meta.server) return navigateTo('/');
    return abortNavigation();
  }
});
