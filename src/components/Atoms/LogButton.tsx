export interface LogButtonProps {
  authURL: string;
}

export function LogButton({ authURL }: LogButtonProps) {
  return (
    <a
      className="p-3 rounded-lg bg-green hover:opacity-50 transition"
      href={authURL}>
      LOGIN TO SPOTIFY
    </a>
  );
}
