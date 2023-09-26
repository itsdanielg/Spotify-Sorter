const DEFAULT_HAMBURGER_STYLE = [
  "relative",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "w-4",
  "aspect-square",
  "[&>*]:w-full",
  "[&>*]:h-[2px]",
  "[&>*]:rounded-lg",
  "[&>*]:bg-white",
  "[&>*]:transition-all"
].join(" ");

export function Handle() {
  return (
    <div className={DEFAULT_HAMBURGER_STYLE}>
      <div className={`mb-1`} />
      <div className={`absolute`} />
      <div className={`mt-1`} />
    </div>
  );
}
