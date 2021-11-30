import { Box, Flex, Avatar, WrapItem } from "@chakra-ui/react";
import { Image } from "data/images";
type Props = {
  currentImage: Image;
};

const avatarBaseUrl = "/profile/";

const Footer = ({ currentImage }: Props) => {
  return (
    <Flex backgroundColor="lightpink" padding={20} borderRadius={10}>
      <Avatar
        width={50}
        src={`${avatarBaseUrl}${currentImage.commentary[0].avatarImage}`}
        borderRadius={50}
      />
      <Box ml={20} display="flex" justifyContent="center" alignItems="center">
        {currentImage.commentary[0]?.commentEN}
      </Box>
    </Flex>
  );
};

export default Footer;
