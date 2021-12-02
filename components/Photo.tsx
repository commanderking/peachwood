import { Image } from "@chakra-ui/react";
import { Image as ImageType } from "data/images";
const photoBaseUrl = "/photos/";

type Props = {
  image: ImageType;
};

const Photo = ({ image }: Props) => {
  return (
    <Image
      width="100%"
      src={`${photoBaseUrl}${image.src}`}
      alt="Image of Animal"
    />
  );
};

export default Photo;
