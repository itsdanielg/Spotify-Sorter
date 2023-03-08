import { Song } from "../../types/index.t";

export interface SongRowProps {
  index: number;
  song: Song;
  rearranged: boolean;
}

export function SongRow({
  index,
  song: { title, artists, album, albumURL, releaseDate, dateAdded, timeAdded, trackNumber },
  rearranged
}: SongRowProps) {
  const background = rearranged ? "text-black bg-green-2 hover:bg-green-3" : "text-white-1 bg-gray-5 hover:bg-gray-6";

  return (
    <div className={`${background} flex items-center w-full transition [&>*]:p-2`}>
      <span className="w-[5%] text-center">{index + 1}</span>
      <span className="w-[10%] text-center">{releaseDate}</span>
      <span className="w-[5%] p-2">
        <img
          className="w-full h-full"
          src={albumURL}
          alt="404"
        />
      </span>
      <span className="w-[30%]">{title}</span>
      <span className="w-[15%]">
        {artists.map((artist, index) => (
          <p
            key={`${album} ${artist}`}
            className={index === 0 ? "font-bold" : ""}>
            {artist}
          </p>
        ))}
      </span>
      <span className="w-[20%]">{album}</span>
      <span className="w-[5%] text-center">{trackNumber}</span>
      <span className="w-[10%] text-center">
        <p>{dateAdded}</p>
        <p>{timeAdded}</p>
      </span>
    </div>
  );
}
