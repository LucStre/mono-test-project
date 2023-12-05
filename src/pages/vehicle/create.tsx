import { Form } from "@/components/Form";
import { createForm } from "@/utils/VehicleForm";
import { Heading, VStack } from "@chakra-ui/react";

export default function Create() {
  const form = createForm();
  return (
    <VStack mt={"70px"} spacing={"8"}>
      <Heading>Create new vehicle</Heading>
      <Form name="Create" data={null} form={form}></Form>
    </VStack>
  );
}
