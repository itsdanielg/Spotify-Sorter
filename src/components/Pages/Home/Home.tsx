import { useCurrentUserPlaylists, useCurrentUserPlaylistsReturn } from "../../../api/hooks/useCurrentUserPlaylists";
import { Playlist } from "../../../types";
import { PlaylistLink } from "./PlaylistLink";
import { Loading } from "../Loading";
import { PageLayout } from "../../Molecules";

export function Home() {
  const { data, error } = useCurrentUserPlaylists();

  if (error) return <></>;
  const { playlists } = data as useCurrentUserPlaylistsReturn;

  if (playlists.length === 0) return <Loading />;
  return (
    <PageLayout>
      <div className="flex flex-col items-center p-4 gap-4">
        <div className="flex items-center justify-center my-4">
          <span className="text-white text-[3.5rem] font-bold">Playlists</span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-4 md:gap-12 w-full md:w-auto">
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
    </PageLayout>
  );
}
