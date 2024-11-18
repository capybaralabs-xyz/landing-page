import { useRouteError } from "react-router-dom";
import { Flex, Text, Heading } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w="100vw"
      h="100vh"
      flexDir={"column"}
      gap={3}
    >
      <Heading as="h2">Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      {/* @ts-ignore */}
      <Text as={"i"}>{error.statusText || error.message}</Text>
    </Flex>
  );
}
