import { Dispatch, SetStateAction } from "react"

export type AppStateContextType = {
  userData: UserData | undefined,
  setuserData: Dispatch<SetStateAction<UserData | undefined>>
  handleUserDataCall: (token: string, setisLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

export type UserData = {
  country?: string,
  display_name: string,
  email?: string,
  explicit_content?: ExplicitContent,
  external_urls: ExternalUrls,
  followers: Followers,
  href: string,
  id: string,
  images?: Image[],
  product?: string,
  type: string,
  uri: string
}

export type ExplicitContent = {
  filter_enabled: boolean,
  filter_locked: boolean
}

export type Image = {
  url: string
  height: number,
  width: number
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface ArtistItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface IArtists {
  items: ArtistItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  previous?: string | null;
  next?: string | null;
}

export interface MostPlayed {
  items: Track[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  previous?: string | null;
  next?: string | null;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface ISongCardProps {
  title: string
  artist: string
  artistUrl: string
  cover: string
  audioUrl: string
  url: string
  isLoading: boolean
}

export interface Playlists {
  href: string
  limit: number,
  next: string | null,
  offset: number,
  previous: string | null,
  total: number
  items: Playlist[]
}

export interface Playlist {
  collaborative: boolean,
  description: string,
  external_urls: ExternalUrls,
  followers: Followers,
  href: string,
  id: string,
  images: Image[],
  name: string,
  owner: UserData,
  public: boolean,
  snapshot_id: string,
  tracks: Tracks,
  type: string,
  uri: string
}

export interface Tracks {
  href: string,
  items: Array<any>,
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number
}

export enum TimeRange {
  YEARS = 'long_term',
  SIX_MONTH = 'medium_term',
  FOUR_WEEK = 'short_term'
}