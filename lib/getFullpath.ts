export const getFullpath = (path?: string | undefined): string => {
  return (
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : 'https://smkdiponegoropekalongan.sch.id' +
    (typeof path !== "undefined" ? path : "")
  ));
};
