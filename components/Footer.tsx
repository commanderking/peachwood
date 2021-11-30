import { Box, Flex, Avatar, WrapItem } from "@chakra-ui/react";
import { Image } from "data/images";
type Props = {
  currentImage: Image;
};

const avatarBaseUrl = "/profile/";

const Footer = ({ currentImage }: Props) => {
  return (
    <Flex backgroundColor="lightpink" padding={5} borderRadius={10}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar
          size="lg"
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
