import { Box, Heading, Text, Center, Divider } from "@chakra-ui/react";
import Link from "next/link";
import years from "data/images";
import Image from "next/image";

const Layout = () => {
  return (
    <Box margin="auto" mt={12} maxWidth={[500, 600]}>
      <Box pl={5} pr={5}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box alignItems="center">
            <Heading fontSize="4xl" textAlign="center">
              Welcome to PeachWood Estate!
            </Heading>
            <Text textAlign="center">
              Home to Peach and Woody's Digital Content
            </Text>
            {[...years].reverse().map((year) => {
              return (
                <Box m={8} key={year.id}>
                  <Link href={`/holiday/${year.id}`}>
                    <Image
                      src={year.headlinePhoto}
                      width={500}
                      height={357}
                      alt="Drawing of Dog and Cat"
                    />
                    <Center>
                      <Text fontSize="xl">See {year.id} Photos</Text>
                    </Center>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box mt={10} mb={5}></Box>
      </Box>
    </Box>
  );
};

export default Layout;
