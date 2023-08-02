import { Track } from "../../../types";
import { AlbumCover } from "../../Compounds/AlbumCover";

export interface PlaylistTrackProps {
  index: number;
  track: Track;
  rearranged: boolean;
}

export function PlaylistTrack({
  index,
  track: { title, artists, album, albumURL, releaseDate, dateAdded, timeAdded, trackNumber },
  rearranged
}: PlaylistTrackProps) {
  const background = rearranged ? "text-black bg-green hover:bg-greenHover" : "text-white bg-gray-5 hover:bg-gray-6";

  return (
    <div className={`${background} flex items-center w-full transition [&>*]:p-2`}>
      <span className="w-[5%] text-center">{index + 1}</span>
      <span className="w-[10%] text-center">{releaseDate}</span>
      <span className="w-[5%] p-2">
        <AlbumCover
          src={albumURL}
          width="w-full"
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
