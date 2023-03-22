import { mockUpdatePlaylistItem } from "./mockUpdatePlaylistItem";

export type mockPlaylistSong = {
  id: string;
  index: number;
};

export function mockUpdatePlaylist(targetPlaylist: mockPlaylistSong[], playlist: mockPlaylistSong[]) {
  for (let i = 0; i < targetPlaylist.length; i++) {
    const song = targetPlaylist[i];
    const startIndex = playlist.indexOf(playlist.find((uneditedSong) => uneditedSong.id === song.id)!);
    mockUpdatePlaylistItem(playlist, startIndex, i);
  }
}
