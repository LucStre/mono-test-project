import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading } from "@chakra-ui/react";

export function Header({ title, name }) {
  return (
    <HStack columnGap={"13rem"}>
      <Heading>{title}</Heading>
      <Button colorScheme="green" leftIcon={<AddIcon />}>
        New {name}
      </Button>
    </HStack>
  );
}
