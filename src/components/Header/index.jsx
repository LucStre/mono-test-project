import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header({ title, name }) {
  return (
    <HStack columnGap={"13rem"}>
      <Heading>{title}</Heading>
      <Button
        as={NextLink}
        href={`/${name}/create`}
        colorScheme="green"
        leftIcon={<AddIcon />}
      >
        New {name}
      </Button>
    </HStack>
  );
}
