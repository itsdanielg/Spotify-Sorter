import { Song } from "../../types/index.t";

export interface SongRowProps {
  index: number;
  song: Song;
}

export function SongRow({ index, song: { title, artist, album, albumURL, releaseDate, dateAdded } }: SongRowProps) {
  return (
    <tr className="[&>*]:p-2 [&>td]:border-2">
      <td className="w-[1px] whitespace-nowrap">{index}</td>
      <td className="w-[1px] whitespace-nowrap">{releaseDate}</td>
      <td>{title}</td>
      <td className="w-[1px] whitespace-nowrap">{artist}</td>
      <td className="w-20">
        <img
          className="w-full h-full"
          src={albumURL}
          alt="404"
        />
      </td>
      <td>{album}</td>
      <td className="w-[1px] whitespace-nowrap">{dateAdded}</td>
    </tr>
  );
}
