import { Link } from "react-router-dom";
import { AlbumCover } from "../../Compounds/AlbumCover";

interface PlaylistLinkProps {
  id: string;
  name: string;
  imageURL: string;
}

export function PlaylistLink({ id, name, imageURL }: PlaylistLinkProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        className={`flex flex-col items-center gap-6 p-6 bg-gray-5 hover:bg-gray-6 transition-all`}
        to={`${id}`}>
        <AlbumCover src={imageURL} />
        <span className="text-white-1 text-xl">{name}</span>
      </Link>
    </div>
  );
}
