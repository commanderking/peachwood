import { Box } from "@chakra-ui/react";
import images from "data/images";

const PhotoContent = () => {
  return (
    <Box>
      {images.map((image) => {
        return (
          <Box mb={10}>
            <img
              src={image.src}
              style={{
                width: "100%",
                maxWidth: 450,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PhotoContent;
