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
        className={`flex flex-col items-center gap-6 p-6 bg-gray-5 hover:bg-gray-6 transition-all`}
        to={`${id}`}>
        <div className={`${width ?? "w-80"} aspect-square`}>
          <img
            className="w-full h-full"
            src={imageURL !== "" ? imageURL : sampleURL}
            alt={sampleURL}
          />
        </div>
        <span className="text-white text-xl">{name}</span>
      </Link>
    </div>
  );
}
