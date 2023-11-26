import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const PIC = "/photos/peach_box.png";

// Replace with redirect in the future
const WeddingPage = () => {
  return (
    <Box>
      <Head>
        <title>Jimmy & Allison</title>
        <meta property="og:title" content="Jimmy & Allison" />
        <meta
          property="og:description"
          content="Jimmy and Allison are getting married!"
        />
        <meta
          property="og:image"
          content={`https://peachwood.vercel.app/${PIC}`}
        />
      </Head>
      <VStack alignItems="center" height="100vh" justifyContent="center">
        <Heading size="lg">Check back soon!</Heading>
        <Image src={PIC} width={500} height={357} alt="Peach in a box" />
      </VStack>
    </Box>
  );
};

export default WeddingPage;
