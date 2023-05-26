import { Box, Grid } from "@chakra-ui/react";
import { VideosResponse } from "../entities/Video";
import useVideos from "../hooks/useVideos";

interface Props {
  gameId: string;
}

const GameVideo = ({ gameId }: Props) => {
  const { data, error, isLoading } = useVideos(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const videosResponse = data as unknown as VideosResponse;
  const videos = videosResponse?.videos;

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
      gap={6}
    >
      {videos.map((video) => (
        <Box
          key={video.id}
          position="relative"
          pt="56.25%"
          width="100%"
          height="0"
        >
          <iframe
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
            title={video.title}
            allowFullScreen
          />
        </Box>
      ))}
    </Grid>
  );
};

// const GameVideo = ({ gameId }: Props) => {
//   const { data, error, isLoading } = useVideos(gameId);

//   if (isLoading) return null;
//   if (error) throw error;

//   // Uses type assertion to specify that data is a VideosResponse
//   const videosResponse = data as unknown as VideosResponse;

//   const firstVideo = videosResponse?.videos[0];
//   const videoSrc = `https://www.youtube.com/embed/${getVideoId(
//     firstVideo?.url || ""
//   )}`;

//   return firstVideo ? (
//     <div className="video-container">
//       <iframe src={videoSrc} title={firstVideo.title} allowFullScreen />
//     </div>
//   ) : null;
// };

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
