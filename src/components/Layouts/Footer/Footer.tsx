const SPOTIFY_URL = "https://www.spotify.com/";
const SPOTIFY_API_URL = "https://developer.spotify.com/";
const GITHUB_URL = "https://github.com/itsdanielg";

export function Footer() {
  return (
    <footer className="flex items-center justify-center text-center w-full pt-8 pb-4 mt-auto">
      <span className="text-white text-xs">
        This website uses the{" "}
        <a
          className="text-green md:hover:text-green transition-all "
          href={SPOTIFY_API_URL}
          target="_blank">
          Spotify API
        </a>
        .{" "}
        <a
          className="text-green md:hover:text-green transition-all "
          href={SPOTIFY_URL}
          target="_blank">
          Spotify
        </a>{" "}
        and the Spotify logo are trademarks of Spotify AB. This website was created by{" "}
        <a
          className="hover:text-purple-500 transtiion-all duration-200"
          href={GITHUB_URL}
          target="_blank">
          @itsdanielg
        </a>
        .
      </span>
    </footer>
  );
}
