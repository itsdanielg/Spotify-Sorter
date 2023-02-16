import { Link } from "react-router-dom";

interface PlaylistLinkProps {
  id: string;
  name: string;
  imageURL: string;
  width?: string;
}

const sampleURL = "https://gtrusted.com/resources/images/noimage.jpg";

export function PlaylistLink({ id, name, imageURL, width }: PlaylistLinkProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        className={`${width ?? "w-80"} aspect-square`}
        to={`${id}`}>
        <img
          className="w-full h-full"
          src={imageURL !== "" ? imageURL : sampleURL}
          alt={sampleURL}
        />
      </Link>
      <span className="text-xl">{name}</span>
    </div>
  );
}
