import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header({ modelsOf, name }) {
  return (
    <HStack columnGap={"13rem"}>
      {modelsOf && (
        <IconButton
          as={NextLink}
          href={"/"}
          colorScheme="teal"
          icon={<ArrowBackIcon />}
        ></IconButton>
      )}
      <Heading>
        {"List of " + (modelsOf ? modelsOf.Name : "") + " " + name + "s"}
      </Heading>
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
