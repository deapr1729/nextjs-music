import { SongCard } from "../components/SongCard";
import { SONG_DATA as songData } from "../constants/songData";

interface HomeProps {
	songs: typeof songData;
}

export default function Home() {
	const songs = songData;
	return (
		<div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
			{songs.map((song, index) => (
				<SongCard key={index} {...song} />
			))}
		</div>
	);
}
