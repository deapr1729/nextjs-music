import Image from "next/image";

interface SongCardProps {
	cover: string;
	author: string;
	title: string;
	spotifyLink: string;
}

export const SongCard = ({ cover, author, title, spotifyLink }: SongCardProps) => {
	return (
		<div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
			<div className="flex-shrink-0">
				<Image src={cover} alt={title} width={50} height={50} />
			</div>
			<div>
				<div className="text-xl font-medium text-black">{title}</div>
				<p className="text-gray-500">{author}</p>
				<a href={spotifyLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
					Listen on Spotify
				</a>
			</div>
		</div>
	);
};
