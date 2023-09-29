import { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../../Atoms";
import { LogoutButton } from "../../Compounds";

interface NavigationProps {
  name: string;
}

export function Navigation({ name }: NavigationProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full bg-black">
      <div className="flex items-center justify-between gap-4 w-full h-full p-4">
        <span className="grow text-white text-3xl md:text-4xl">Welcome{name ? `, ${name}` : ""}!</span>
        <div className="flex items-center ml-auto">
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-lg text-green hover:text-white hover:underline transition-all"
              to={"/"}>
              Playlists
            </Link>
            <LogoutButton />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Hamburger
              toggle={show}
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
      {/* {show && (
        <NavigationMenu
          removeToken={removeToken}
          setShow={setShow}
        />
      )} */}
    </div>
  );
}
