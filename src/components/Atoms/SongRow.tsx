import { Song } from "../../types/index.t";

export interface SongRowProps {
  index: number;
  song: Song;
}

export function SongRow({
  index,
  song: { title, artists, album, albumURL, releaseDate, dateAdded, timeAdded, trackNumber },
}: SongRowProps) {
  return (
    <tr className={`${index % 2 ? "bg-stone-400" : ""} [&>*]:p-2 [&>td]:border-x-2`}>
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
