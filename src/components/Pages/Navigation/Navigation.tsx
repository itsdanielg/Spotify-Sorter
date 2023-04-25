import { Link } from "react-router-dom";
import { Button } from "../../Atoms/Button";

interface NavigationProps {
  removeToken: () => void;
}

export function Navigation({ removeToken }: NavigationProps) {
  return (
    <div className="w-full bg-black flex items-center justify-between gap-4 p-5">
      <span className="text-white-1 text-4xl grow">Welcome Daniel!</span>
      <div className="flex items-center justify-center px-8">
        <Link
          className="text-lg text-green-1 hover:text-white-1 hover:underline transition"
          to={"/"}>
          Playlists
        </Link>
      </div>
      <div>
        <Button
          label="Log Out"
          onClick={() => removeToken()}
        />
      </div>
    </div>
  );
}
