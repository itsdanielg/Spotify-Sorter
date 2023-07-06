import { Track } from "../../../types";

export interface PlaylistTrackCompactProps {
  index: number;
  track: Track;
  rearranged: boolean;
}

export function PlaylistTrackCompact({
  index,
  track: { title, artists, album, releaseDate, dateAdded, timeAdded, trackNumber },
  rearranged
}: PlaylistTrackCompactProps) {
  const background = rearranged ? "text-black bg-green-2 hover:bg-green-3" : "text-white-1 bg-gray-5 hover:bg-gray-6";

  return (
    <div
      className={`${background} flex items-center w-full transition text-sm [&>*]:p-2 overflow-x-auto md:overflow-hidden`}>
      <span className="w-16 md:w-[5%] text-center">{index + 1}</span>
      <span className="w-20 md:w-[10%] text-center">{releaseDate}</span>
      <span className="w-[120rem] md:w-[35%]">{title}</span>
      <span className="w-[10rem] md:w-[15%]">{artists[0]}</span>
      <span className="w-[10rem] md:w-[20%]">{album}</span>
      <span className="w-[10rem] md:w-[5%] text-center">{trackNumber}</span>
      <span className="w-[10rem] md:w-[10%] text-center">
        <p>{dateAdded}</p>
      </span>
    </div>
  );
}
