import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import NextLink from "next/link";

export const Form = observer(({ name, data, form }) => {
  return (
    <VStack>
      <FormControl isInvalid={form.$("Id").error}>
        <FormLabel>{form.$("Id").label}</FormLabel>
        <Input type="number" {...form.$("Id").bind()}></Input>
        <FormErrorMessage>{form.$("Id").error}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={form.$("Name").error}>
        <FormLabel>{form.$("Name").label}</FormLabel>
        <Input {...form.$("Name").bind()}></Input>
        <FormErrorMessage>{form.$("Name").error}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={form.$("Abrv").error}>
        <FormLabel>{form.$("Abrv").label}</FormLabel>
        <Input {...form.$("Abrv").bind()}></Input>
        <FormErrorMessage>{form.$("Abrv").error}</FormErrorMessage>
      </FormControl>
      {data ? (
        <FormControl isInvalid={form.$("VehicleId").error}>
          <FormLabel>{form.$("VehicleId").label}</FormLabel>
          <Select {...form.$("VehicleId").bind()}>
            {data.map((vehicle) => {
              return (
                <option key={vehicle.Id} value={vehicle.Id}>
                  {vehicle.Name}
                </option>
              );
            })}
          </Select>
          <FormErrorMessage>{form.$("VehicleId").error}</FormErrorMessage>
          <Text color={"red"}>{form.error}</Text>
        </FormControl>
      ) : (
        <></>
      )}
      <ButtonGroup
        mt={"20px"}
        p={"10px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          isDisabled={form.hasError}
          colorScheme="green"
          onClick={form.onSubmit}
        >
          {name}
        </Button>
        <Button colorScheme="blue" onClick={form.onClear}>
          Clear
        </Button>
        <Button as={NextLink} href="/" colorScheme="pink">
          Cancel
        </Button>
      </ButtonGroup>
    </VStack>
  );
});
