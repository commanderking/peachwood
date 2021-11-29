import { Box, Image } from "@chakra-ui/react";
import images from "data/images";

const photoBaseUrl = "/photos/";

const PhotoContent = () => {
  return (
    <Box>
      {images.map((image) => {
        return (
          <Box key={image.src} mb={10}>
            <Image
              src={`${photoBaseUrl}${image.src}`}
              width="100%"
              maxWidth={450}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PhotoContent;
