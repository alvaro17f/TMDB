// type PopularRoot = {
//   page: number;
//   results: PopularType[];
//   total_pages: number;
//   total_results: number;
// }

import { Dispatch } from "react";

export type PopularType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[];

// export interface SearchRoot {
//  page:          number;
//  results:       SearchType[];
//  total_pages:   number;
//  total_results: number;
// }

export type SearchType = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[];

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type BelongsToCollection = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type RatingType = {
  status_code: number;
  status_message: string;
  success: boolean;
};

export type RatingProps = {
  value: number;
};

export type RootList = {
  page: number;
  results: ListType;
  total_pages: number;
  total_results: number;
};

export type ListType = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  rating: number;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[];

export type GuestType = {
  expires_at?: Date;
  guest_session_id?: string;
  success?: boolean;
};

export type GuestActionType = {
  type: string;
  payload: GuestType;
};

export type UserContextType = {
  state?: GuestType;
  dispatch?: Dispatch<GuestActionType>;
};
