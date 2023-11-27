import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <HStack columnGap={"13rem"}>
      <Heading>List of vehicles</Heading>
      <Button colorScheme="green" leftIcon={<AddIcon />}>
        New vehicle
      </Button>
    </HStack>
  );
}
