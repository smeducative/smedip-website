import { api } from "./api";

export type Categories = {
  title: string;
  slug: string;
  cover?: string | null;
};

export type Author = {
  name: string;
  photo: string;
};

export type News = {
  title: string;
  slug: string;
  cover: string;
  content: string;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
  categories: Categories[] | null;
  author: Author;
};

export const getNews = async (): Promise<{ data: News[] }> => {
  return api.get("/publikasi/berita").then((res) => res.data);
};
