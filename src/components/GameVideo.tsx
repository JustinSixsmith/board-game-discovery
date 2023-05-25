import { VideosResponse } from "../entities/Video";
import useVideos from "../hooks/useVideos";

interface Props {
  gameId: string;
}

const GameVideo = ({ gameId }: Props) => {
  const { data, error, isLoading } = useVideos(gameId);

  if (isLoading) return null;
  if (error) throw error;

  // We use type assertion here to specify that data is a VideosResponse
  const videosResponse = data as unknown as VideosResponse;

  const firstVideo = videosResponse?.videos[0];
  const videoSrc = `https://www.youtube.com/embed/${getVideoId(
    firstVideo?.url || ""
  )}`;

  return firstVideo ? (
    <iframe
      width="100%"
      height="1000"
      src={videoSrc}
      title={firstVideo.title}
      allowFullScreen
    />
  ) : null;
};

// Function to extract video id from YouTube URL
function getVideoId(url: string): string {
  const urlObject = new URL(url);
  if (urlObject.host === "www.youtube.com") {
    return urlObject.searchParams.get("v") || "";
  } else if (urlObject.host === "youtu.be") {
    return urlObject.pathname.slice(1);
  }
  return "";
}

export default GameVideo;
