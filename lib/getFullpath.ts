export const getFullpath = (path?: string | undefined): string => {
  return (
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : (process.env.VERCEL_URL as string)) +
    (typeof path !== "undefined" ? path : "")
  );
};
