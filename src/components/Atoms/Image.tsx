import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

export function Image({ src, className = "", ...props }: ImageProps) {
  const sampleURL = "https://gtrusted.com/resources/images/noimage.jpg";

  return (
    <img
      {...props}
      className={`${className} w-full h-full select-none`}
      src={src ? src : sampleURL}
    />
  );
}
