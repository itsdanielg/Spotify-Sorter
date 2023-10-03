import { Image } from "../Atoms";

interface AlbumCoverProps {
  src: string;
  width?: string;
}

export function AlbumCover({ src, width = "w-80" }: AlbumCoverProps) {
  return (
    <div className={`${width} aspect-square`}>
      <Image src={src} />
    </div>
  );
}
