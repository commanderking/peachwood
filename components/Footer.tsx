import { Box, Flex, Image, WrapItem } from "@chakra-ui/react";
import { Image as ImageType } from "data/images";
type Props = {
  currentImage: ImageType;
};

const avatarBaseUrl = "/profile/";

const Footer = ({ currentImage }: Props) => {
  return (
    <Flex backgroundColor="lightpink" padding={5} borderRadius={10}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="50px"
      >
        <Image
          width="50px"
          height="50px"
          style={{
            borderRadius: "50px",
          }}
          src={`${avatarBaseUrl}${currentImage.commentary[0].avatarImage}`}
        />
      </Box>
      <Box ml={3} display="flex" justifyContent="center" alignItems="center">
        {currentImage.commentary[0]?.commentEN}
      </Box>
    </Flex>
  );
};

export default Footer;
