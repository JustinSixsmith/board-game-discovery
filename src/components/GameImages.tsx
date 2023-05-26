import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { ImagesResponse } from "../entities/Image";
import useImages from "../hooks/useImages";

interface Props {
  gameId: string;
}

const GameImages = ({ gameId }: Props) => {
  const { data, isLoading, error } = useImages(gameId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  const imagesResponse = data as unknown as ImagesResponse;
  const images = imagesResponse?.images;

  return (
    <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={2}>
      {images.map((image) => (
        <Box
          key={image.id}
          sx={{ width: "100%", position: "relative", paddingBottom: "75%" }}
        >
          <Image
            src={image.medium}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameImages;
