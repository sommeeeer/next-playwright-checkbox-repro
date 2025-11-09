import { getAlbums } from "@/app/shared//api";
import Album from "@/app/shared//components/Album";

export default async function AlbumPage() {
  const albums = await getAlbums();
  return (
    <div>
      {albums.map((album) => (
        <Album album={album} />
      ))}
    </div>
  );
}
