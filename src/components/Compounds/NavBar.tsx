import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
  setToken: Dispatch<SetStateAction<string>>;
}

export function NavBar({ setToken }: NavBarProps) {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="w-full bg-stone-700 flex items-center p-5">
      <span className="text-white text-2xl">Welcome Daniel!</span>
      <button
        className="p-3 rounded-lg bg-green-400 ml-auto hover:opacity-50 transition"
        onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
}
