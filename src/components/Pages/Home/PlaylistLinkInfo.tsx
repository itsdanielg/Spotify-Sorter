interface PlaylistLinkInfoProps {
  show: boolean;
  owner: string;
  description: string;
  collaborative: boolean;
  isPublic: boolean;
}

export function PlaylistLinkInfo({ show, owner, description, collaborative, isPublic }: PlaylistLinkInfoProps) {
  const showStyle = show ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`${showStyle} hidden md:flex absolute top-0 left-0 flex-col gap-2 w-full h-full p-12 rounded-lg bg-gray-7 text-white transition duration-300`}>
      <div className="flex flex-col gap-2 items-start bg-gray-4 p-2 rounded-md">
        <span>
          <strong>Owner: </strong>
          {owner}
        </span>
        <span>{collaborative ? "Collaborative Playlist" : "Non-collaborative Playlist"}</span>
        <span>{isPublic ? "Public Playlist" : "Private Playlist"}</span>
      </div>
      {description && (
        <div className="bg-gray-4 p-2 rounded-md">
          <span className="text-green">{description}</span>
        </div>
      )}
    </div>
  );
}
