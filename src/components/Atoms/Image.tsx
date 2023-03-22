interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Image({ src, alt, className = "", ...props }: ImageProps) {
  const sampleURL = "https://gtrusted.com/resources/images/noimage.jpg";

  return (
    <img
      {...props}
      className={`${className} w-full h-full select-none`}
      src={src ?? sampleURL}
      alt={alt}
    />
  );
}
