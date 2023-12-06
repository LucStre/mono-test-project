import { Form } from "@/components/Form";
import modelStore from "@/stores/ModelStore";
import vehicleStore from "@/stores/VehicleStore";
import { editForm } from "@/utils/ModelForm";
import { Heading, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {
  const params = useParams();
  const form = editForm(params!.id);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    vehicleStore
      .fetchVehicles({ sortBy: "Name", orderBy: "asc" })
      .then(() => setData(vehicleStore.vehicleData));
  }, []);

  useEffect(() => {
    if (params) {
      modelStore.fetchModels({ Id: params!.id }).then(() => {
        const data = modelStore.modelData[0];
        form.each((field: any) => {
          field.set("value", data[field.name]);
        });
      });
    }
  }, [form, params]);

  return (
    <VStack mt={"70px"} spacing={"8"}>
      <Heading>Edit model</Heading>
      <Form name="Save changes" data={data} form={form}></Form>
    </VStack>
  );
}
