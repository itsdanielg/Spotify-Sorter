export type mockPlaylistSong = {
  id: string;
  index: number;
};

export function mockUpdatePlaylistItem(playlist: mockPlaylistSong[], startIndex: number, endIndex: number) {
  if (startIndex === endIndex) return false;
  playlist.splice(endIndex, 0, playlist.splice(startIndex, 1)[0]);
  return true;
}
