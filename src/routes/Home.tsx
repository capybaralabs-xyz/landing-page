import { Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={3}
    >
      <Heading as="h3">This is the home page!</Heading>
      <Text>
        This app is using chakra ui and react-router-dom. Feel free to put your
        magic inside!
      </Text>
    </Flex>
  );
};

export default Home;
