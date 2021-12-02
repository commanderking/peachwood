import { Box, Flex, Image, WrapItem } from "@chakra-ui/react";
import { Image as ImageType } from "data/images";
type Props = {
  imageSrc: string;
  text: string;
};

const Footer = ({ imageSrc, text }: Props) => {
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
          src={imageSrc}
        />
      </Box>
      <Box ml={3} display="flex" justifyContent="center" alignItems="center">
        {text}
      </Box>
    </Flex>
  );
};

export default Footer;
