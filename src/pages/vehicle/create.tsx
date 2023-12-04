import { Form } from "@/components/Form";
import vehicleForm from "@/utils/VehicleForm";
import { Heading, VStack } from "@chakra-ui/react";

export default function Create() {
  return (
    <VStack mt={"70px"} spacing={"8"}>
      <Heading>Create new vehicle</Heading>
      <Form name="Create" form={vehicleForm}></Form>
    </VStack>
  );
}
