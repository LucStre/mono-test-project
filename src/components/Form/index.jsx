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
      {form.map((field) => {
        if (field.name != "MakeId") {
          return (
            <FormControl key={field.name} isInvalid={field.error}>
              <FormLabel>{field.label}</FormLabel>
              <Input {...field.bind()}></Input>
              <FormErrorMessage>{field.error}</FormErrorMessage>
            </FormControl>
          );
        } else {
          return (
            <FormControl key={field.name} isInvalid={field.error}>
              <FormLabel>{field.label}</FormLabel>
              <Select {...field.bind()}>
                {data.map((vehicle) => {
                  return (
                    <option key={vehicle.Id} value={vehicle.Id}>
                      {vehicle.Name}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{field.error}</FormErrorMessage>
              <Text color={"red"}>{form.error}</Text>
            </FormControl>
          );
        }
      })}
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
        <Button
          as={NextLink}
          href={data ? `/models/${form.$("MakeId").value}` : "/"}
          colorScheme="pink"
        >
          Cancel
        </Button>
      </ButtonGroup>
    </VStack>
  );
});
