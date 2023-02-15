import { authURL } from "../Constants";

export function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-300">
      <a
        className="p-3 rounded-lg bg-green-400 hover:opacity-50 transition"
        href={authURL}>
        LOGIN TO SPOTIFY
      </a>
    </div>
  );
}
