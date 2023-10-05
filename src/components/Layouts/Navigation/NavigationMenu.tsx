import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Atoms/Button";

interface NavigationMenuProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  removeToken: () => void;
}

export function NavigationMenu({ setShow, removeToken }: NavigationMenuProps) {
  return (
    <div className="absolute left-0 flex flex-col gap-4 w-full h-80 p-6 bg-gray-1 z-50 animate-linkFade">
      <Link
        onClick={() => setShow(false)}
        to={"/"}>
        Playlists
      </Link>
      <hr />
      <Button
        className="mt-auto ml-auto w-32"
        label="Log Out"
        onClick={() => {
          setShow(false);
          removeToken();
        }}
      />
    </div>
  );
}
