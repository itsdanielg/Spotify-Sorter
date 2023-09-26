import { useContext } from "react";
import { Track } from "../../../../../types";
import { AlbumCover } from "../../../../Compounds";
import { PlaylistContext } from "../../Playlist";

export interface PlaylistTrackProps {
  index: number;
  rearranged: boolean;
  track: Track;
}

export function PlaylistTrack({
  index,
  rearranged,
  track: { title, artists, album, albumURL, releaseDate, dateAdded, timeAdded, trackNumber }
}: PlaylistTrackProps) {
  const { isCompact } = useContext(PlaylistContext);

  const background = rearranged ? "text-black bg-green hover:bg-greenHover" : "text-white bg-gray-5 hover:bg-gray-6";
  const compactStyle = isCompact ? "text-sm overflow-x-auto md:overflow-hidden [&>*]:truncate" : "";

  return (
    <div className={`${background} ${compactStyle} flex items-center w-full transition-all [&>*]:p-2`}>
      <span className={`${isCompact ? "w-16 md:w-[5%]" : "w-[5%]"} text-center`}>{index + 1}</span>
      <span className={`${isCompact ? "w-20 md:w-[10%]" : "w-[10%]"} text-center`}>{releaseDate}</span>
      {!isCompact && (
        <span className="w-[5%] p-2">
          <AlbumCover
            src={albumURL}
            width="w-full"
          />
        </span>
      )}
      <span className={`${isCompact ? "w-[120rem] md:w-[35%]" : "w-[30%]"}`}>{title}</span>
      <span className={`${isCompact ? "w-[10rem] md:w-[15%]" : "w-[15%]"}`}>
        {isCompact ? (
          <>{artists[0]}</>
        ) : (
          <>
            {artists.map((artist, index) => (
              <p
                key={`${album} ${artist}`}
                className={index === 0 ? "font-bold" : ""}>
                {artist}
              </p>
            ))}
          </>
        )}
      </span>
      <span className={`${isCompact ? "w-[10rem] md:w-[20%]" : "w-[20%]"}`}>{album}</span>
      <span className={`${isCompact ? "w-[10rem] md:w-[5%]" : "w-[5%]"} text-center`}>{trackNumber}</span>
      <span className={`${isCompact ? "w-[10rem] md:w-[10%]" : "w-[10%]"} text-center`}>
        <p>{dateAdded}</p>
        {!isCompact && <p>{timeAdded}</p>}
      </span>
    </div>
  );
}
