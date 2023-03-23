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

  const albumCoverWidth = "w-80";
  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseOver={() => setShowInfo(true)}
      onMouseOut={() => setShowInfo(false)}>
      <Link
        className={`relative flex flex-col items-center gap-6 p-6 bg-gray-5 hover:bg-gray-6 transition-all`}
        to={`${id}`}>
        <AlbumCover
          src={imageURL}
          width={albumCoverWidth}
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
    </div>
  );
}
