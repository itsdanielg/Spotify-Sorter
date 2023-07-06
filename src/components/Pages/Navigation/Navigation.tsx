import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../api/hooks/useUser";
import { Button } from "../../Atoms/Button";
import { Hamburger } from "../../Atoms/Hamburger";
import { NavigationMenu } from "./NavigationMenu";

interface NavigationProps {
  removeToken: () => void;
}

export function Navigation({ removeToken }: NavigationProps) {
  const [show, setShow] = useState(false);
  const name = useUser();

  return (
    <div className="relative w-full bg-black">
      <div className="flex items-center justify-between gap-4 w-full h-full p-4">
        <span className="grow text-white-1 text-3xl md:text-4xl">Welcome{name ? `, ${name}` : ""}!</span>
        <div className="flex items-center ml-auto">
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-lg text-green-1 hover:text-white-1 hover:underline transition-all"
              to={"/"}>
              Playlists
            </Link>
            <Button
              label="Log Out"
              onClick={() => removeToken()}
            />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Hamburger
              toggle={show}
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
      {show && (
        <NavigationMenu
          removeToken={removeToken}
          setShow={setShow}
        />
      )}
    </div>
  );
}
