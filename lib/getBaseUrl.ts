export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    if (process.env.NEXT_PUBLIC_APP_URL) {
      return process.env.NEXT_PUBLIC_APP_URL;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}'`;
    }
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    throw new Error("No base URL found for production environment");
  }

  return "http://localhost:3000";
}
