import { Song } from "../../types/index.t";

export interface SongRowProps {
  index: number;
  song: Song;
  leftChanged: boolean;
  rightChanged: boolean;
  rearranged: boolean;
}

export function SongRow({
  index,
  song: { title, artists, album, albumURL, releaseDate, dateAdded, timeAdded, trackNumber },
  leftChanged,
  rightChanged,
  rearranged,
}: SongRowProps) {
  const background = leftChanged && rightChanged ? "bg-green" : leftChanged || rightChanged ? "bg-sky-100" : "";

  return (
    <tr className={`${background} [&>*]:p-2 [&>td]:border-x-2 text-white bg-gray-5 hover:bg-gray-6 transition`}>
      <td className="w-[4%] text-center">{index}</td>
      <td className="w-[10%] text-center">{releaseDate}</td>
      <td className="w-[6%]">
        <img
          className="w-full h-full"
          src={albumURL}
          alt="404"
        />
      </td>
      <td className="w-[30%]">{title}</td>
      <td className="w-[20%]">
        {artists.map((artist, index) => (
          <p
            key={`${album} ${artist}`}
            className={index === 0 ? "font-bold" : ""}>
            {artist}
          </p>
        ))}
      </td>

      <td className="w-[18%]">{album}</td>
      <td className="w-[2%] text-center">{trackNumber}</td>
      <td className="text-center">
        <p>{dateAdded}</p>
        <p>{timeAdded}</p>
      </td>
    </tr>
  );
}
