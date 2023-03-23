interface PlaylistLinkInfoProps {
  owner: string;
  description: string;
  collaborative: boolean;
  isPublic: boolean;
  width?: string;
}

export function PlaylistLinkInfo({
  owner,
  description,
  collaborative,
  isPublic,
  width = "w-80"
}: PlaylistLinkInfoProps) {
  return (
    <div
      className={`${width} absolute top-0 left-0 aspect-square flex flex-col items-center gap-2 p-8 m-6 bg-gray-7 text-white`}>
      <span className="text-xl">{owner}</span>
      <span className={description ? "text-green-1" : "text-red-500"}>{description || "No Description"}</span>
      <span className={collaborative ? "text-green-1" : "text-red-500"}>
        {collaborative ? "Collaborative Playlist" : "Non-collaborative Playlist"}
      </span>
      <span className={isPublic ? "text-green-1" : "text-red-500"}>
        {isPublic ? "Public Playlist" : "Private Playlist"}
      </span>
    </div>
  );
}
