export function getBaseUrl() {
  // Check if we're in a browser environment
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Check if we're in a production environment
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    if (process.env.NEXT_PUBLIC_APP_URL) {
      // Priority order for production URLS
      // 1. Custom domain (recommended for production)
      return process.env.NEXT_PUBLIC_APP_URL;
    }
    // 2. Vercel URL (auto-generated)
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}'`;
    }
    // 3. Vercel project URL (more reliable)
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    throw new Error("No base URL found for production environment");
  }

  return "http://localhost:3000";
}
