import { Image } from "@chakra-ui/react";
import { Image as ImageType } from "data/images";
const photoBaseUrl = "/photos/";

type Props = {
  image: ImageType;
  border?: string | null;
};

const Photo = ({ image, border }: Props) => {
  return (
    <Image
      width="100%"
      src={`${photoBaseUrl}${image.src}`}
      alt="Image of Animal"
      // @ts-ignore - should be stronger border typing
      border={border}
      borderRadius={10}
    />
  );
};

export default Photo;
