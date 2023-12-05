import { Form } from "@/components/Form";
import vehicleStore from "@/stores/VehicleStore";
import { createForm } from "@/utils/ModelForm";
import { Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Create() {
  const form = createForm();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    vehicleStore
      .fetchVehicles({ sortBy: "Name", orderBy: "asc" })
      .then(() => setData(vehicleStore.vehicleData));
  }, []);
  return (
    <VStack mt={"70px"} spacing={"8"}>
      <Heading>Create new model</Heading>
      <Form name="Create" data={data} form={form}></Form>
    </VStack>
  );
}
