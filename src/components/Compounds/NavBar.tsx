import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  setToken: Dispatch<SetStateAction<string>>;
}

export function NavBar({ setToken }: NavBarProps) {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="w-full bg-stone-700 flex items-center gap-4 p-5">
      <span className="text-white text-2xl">Welcome Daniel!</span>
      <div>
        <Link
          className="text-lg text-emerald-500"
          to={"/"}>
          Playlists
        </Link>
      </div>
      <button
        className="p-3 rounded-lg bg-green-400 ml-auto hover:opacity-50 transition"
        onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
}
