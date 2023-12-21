export interface IGamesSearch {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResult[];
  user_platforms: boolean;
}

export interface IGames {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
}

export interface Filters {
  years: FiltersYear[];
}

export interface FiltersYear {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: YearYear[];
  nofollow: boolean;
  count: number;
}

export interface YearYear {
  year: number;
  count: number;
  nofollow: boolean;
}

export interface IResult {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: any[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus | null;
  metacritic: null;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game: null;
  reviews_count: number;
  community_rating: number;
  saturated_color: Color;
  dominant_color: Color;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null;
  tags: Genre[];
  esrb_rating: EsrbRating | null;
  short_screenshots: ShortScreenshot[];
  description_raw?: string;
}

export interface AddedByStatus {
  toplay: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: string;
  language?: Language;
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface PlatformElement {
  platform: PlatformPlatform;
  released_at: Date | null;
  requirements_en: RequirementsEn | null;
  requirements_ru: null;
}

export interface PlatformPlatform {
  id: number;
  name: Name;
  slug: Slug;
  image: null;
  year_end: null;
  year_start: null;
  games_count: number;
  image_background: string;
}

export enum Name {
  Linux = "Linux",
  MACOS = "macOS",
  PC = "PC",
}

export enum Slug {
  Linux = "linux",
  Macos = "macos",
  PC = "pc",
}

export interface RequirementsEn {
  minimum: string;
  recommended?: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  id: number;
  store: Genre;
}

export interface IAchievments {
  count: number;
  next: string | null;
  previous: string | null;
  results: IAchievment[];
}

export interface IAchievment {
  id: number;
  name: string;
  description: string;
  image: string;
}
