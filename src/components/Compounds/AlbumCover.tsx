import { Image } from "../Atoms/Image";

interface AlbumCoverProps {
  src: string;
  width?: string;
}

export function AlbumCover({ src, width }: AlbumCoverProps) {
  return (
    <div className={`${width ?? "w-80"} aspect-square`}>
      <Image src={src} />
    </div>
  );
}
