import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  ...(process.env.NODE_ENV === "development" && {
    httpsAgent: new (require("https").Agent)({
      rejectUnauthorized: false,
    }),
  }),
});
