import { Form } from "@/components/Form";
import vehicleStore from "@/stores/VehicleStore";
import { editForm } from "@/utils/VehicleForm";
import { Heading, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Edit() {
  const params = useParams();
  const form = editForm();
  useEffect(() => {
    if (params) {
      vehicleStore.fetchVehicles({ Id: params!.id }).then(() => {
        const data = vehicleStore.vehicleData[0];
        form.each((field: any) => {
          field.set("value", data[field.name]);
        });
      });
    }
  }, [form, params]);

  return (
    <VStack mt={"70px"} spacing={"8"}>
      <Heading>Edit vehicle</Heading>
      <Form name="Save changes" data={null} form={form}></Form>
    </VStack>
  );
}
