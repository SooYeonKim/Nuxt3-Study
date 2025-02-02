export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (isAuthenticated.value) {
    if (import.meta.server) return navigateTo('/');
    return abortNavigation();
  }
});
