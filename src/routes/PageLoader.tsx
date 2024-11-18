import { Flex, Spinner, Text } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      flexDir={"column"}
    >
      <Spinner size={"xl"} />
      <Text>Loading...</Text>
    </Flex>
  );
};

export default PageLoader;
