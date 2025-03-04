import { Slide } from "@/components/jumbotron-carousel";
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

// type of publikasi is the same as news
export type Publikasi = News;

export const getNews = async (): Promise<{ data: News[] }> => {
  return api.get("/publikasi/berita").then((res) => res.data);
};

export const showNews = async (slug: string): Promise<{ data: News }> => {
  return api.get(`/publikasi/berita/${slug}`).then((res) => res.data);
};

export const getPublikasi = async (): Promise<{ data: Publikasi[] }> => {
  return api.get("/publikasi").then((res) => res.data);
};

export const showPublikasi = async (
  slug: string | null
): Promise<{ data: Publikasi }> => {
  return api.get(`/publikasi/${slug}`).then((res) => res.data);
};

export const getSlides = async (): Promise<{ data: Slide[] }> => {
  return api.get("/slides").then((res) => res);
}
