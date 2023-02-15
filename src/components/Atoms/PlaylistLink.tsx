import { Link } from "react-router-dom";

interface PlaylistLinkProps {
  id: string;
  name: string;
  imageURL: string;
  width?: string;
}

const sampleURL = "https://i.scdn.co/image/ab67616d0000b27311b7621f71aab1085a2b1ee7";

export function PlaylistLink({ id, name, imageURL, width }: PlaylistLinkProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        className={`${width ?? "w-80"} aspect-square`}
        to={`${id}`}>
        <img
          className="w-full h-full"
          src={imageURL}
          alt={sampleURL}
        />
      </Link>
      <span className="text-xl">{name}</span>
    </div>
  );
}
