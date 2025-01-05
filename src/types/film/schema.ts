import type { Category, Saga } from "@/types";

export type Film = {
  id: number;
  type: string;
  titleOG: string;
  title: string;
  year: number;
  note: number;
  language: boolean;
  favorite: boolean;
  category: Category;
  info: string;
  poster: string;
  season: number;
  link: string;
  saga: Saga;
};
