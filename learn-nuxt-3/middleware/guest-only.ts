export default defineNuxtRouteMiddleware(() => {
  const isAuthenticated = useAuthenticated();
  if (isAuthenticated.value) {
    if (import.meta.server) return navigateTo('/');
    return abortNavigation();
  }
});
