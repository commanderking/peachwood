import { Box } from "@chakra-ui/react";
import Image from "next/image";
import images from "data/images";
const PhotoContent = () => {
  return (
    <Box>
      {images.map((image) => {
        return (
          <Box mb={10}>
            <Image
              layout="responsive"
              src={image.src}
              width={500}
              height={500}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PhotoContent;
