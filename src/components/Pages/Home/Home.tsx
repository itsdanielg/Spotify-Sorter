import { usePlaylists } from "../../../api/hooks/usePlaylists";
import { Playlist } from "../../../types";
import { PlaylistLink } from "./PlaylistLink";
import { Loading } from "../Loading";

export function Home() {
  const playlists: Playlist[] = usePlaylists();

  if (playlists.length === 0) return <Loading />;
  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex justify-center mb-8">
        <span className="text-white-1 text-[3rem] font-bold">Playlists</span>
      </div>
      <div className="flex flex-wrap items-center justify-center mx-12 gap-12 p-2">
        {playlists.map(({ id, name, imageURL, owner, description, collaborative, isPublic }: Playlist) => {
          return (
            <PlaylistLink
              key={`Playlist ID ${id}`}
              id={id}
              name={name}
              imageURL={imageURL}
              owner={owner}
              description={description}
              collaborative={collaborative}
              isPublic={isPublic}
            />
          );
        })}
      </div>
    </div>
  );
}