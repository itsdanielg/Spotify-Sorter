import { useState } from "react";
import { Link } from "react-router-dom";
import { AlbumCover } from "../../Compounds/AlbumCover";
import { PlaylistLinkInfo } from "./PlaylistLinkInfo";

interface PlaylistLinkProps {
  id: string;
  name: string;
  imageURL: string;
  owner: string;
  description: string;
  collaborative: boolean;
  isPublic: boolean;
}

export function PlaylistLink({ id, name, imageURL, owner, description, collaborative, isPublic }: PlaylistLinkProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Link
      onMouseOver={() => setShowInfo(true)}
      onMouseOut={() => setShowInfo(false)}
      className={`relative flex md:flex-col items-center gap-6 p-6 bg-gray-5 rounded-lg w-full md:w-auto`}
      to={`${id}`}>
      <AlbumCover
        src={imageURL}
        width="w-20 md:w-80"
      />
      {showInfo && (
        <PlaylistLinkInfo
          owner={owner}
          description={description}
          collaborative={collaborative}
          isPublic={isPublic}
        />
      )}
      <span className="text-white-1 text-xl">{name}</span>
    </Link>
  );
}
