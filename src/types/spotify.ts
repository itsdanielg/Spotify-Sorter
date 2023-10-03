type SpotifyUser = {
  id: string;
  display_name: string | null;
  images: SpotifyImage[];
  type: "user";
};

type SpotifyUserPlaylists = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SpotifySimplifiedPlaylist[];
};

type SpotifySimplifiedPlaylist = {
  id: string;
  name: string;
  collaborative: boolean;
  description: string | null;
  href: string;
  images: SpotifyImage[];
  owner: SpotifyUser;
  public: boolean;
  tracks: SpotifySimplifiedPlaylistTracks;
  type: "playlist";
};

type SpotifySimplifiedPlaylistTracks = {
  href: string;
  total: number;
};

type SpotifyPlaylist = SpotifySimplifiedPlaylist & {
  tracks: SpotifyPlaylistTracks;
};

type SpotifyImage = {
  height: number | null;
  url: string;
  width: number | null;
};

type SpotifyPlaylistTracks = {
  href: string;
  items: SpotifyPlaylistTrack[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

type SpotifyPlaylistTrack = {
  added_at: string;
  added_by: SpotifyUser;
  is_local: boolean;
  track: SpotifyTrack;
};

type SpotifyTrack = {
  id: string;
  name: string;
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
  explicit: boolean;
  href: string;
  is_local: boolean;
  is_playable: boolean;
  popularity: number;
  preview_url: string | null;
  restrictions: SpotifyRestriction;
  track_number: number;
  type: "track";
};

type SpotifyAlbum = {
  id: string;
  name: string;
  album_type: "album" | "single" | "compilation";
  artists: SpotifyArtist[];
  href: string;
  images: SpotifyImage[];
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: SpotifyRestriction;
  total_tracks: number;
  type: "album";
};

type SpotifySimplifiedArtist = {
  id: string;
  name: string;
  href: string;
  type: "artist";
};

type SpotifyArtist = SpotifySimplifiedArtist & {
  genres: string[];
  images: SpotifyImage[];
  popularity: number;
};

type SpotifyRestriction = {
  reason: "market" | "product" | "explicit";
};

type SpotifyResponseError = {
  error: SpotifyError;
};

type SpotifyError = {
  status: number;
  message: string;
};

export type {
  SpotifyUser,
  SpotifyUserPlaylists,
  SpotifySimplifiedPlaylist,
  SpotifySimplifiedPlaylistTracks,
  SpotifyPlaylist,
  SpotifyImage,
  SpotifyPlaylistTracks,
  SpotifyPlaylistTrack,
  SpotifyTrack,
  SpotifyAlbum,
  SpotifySimplifiedArtist,
  SpotifyArtist,
  SpotifyRestriction,
  SpotifyResponseError,
  SpotifyError
};
