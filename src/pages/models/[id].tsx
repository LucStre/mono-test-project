import { Header } from "@/components/Header";
import { VehicleList } from "@/components/VehicleList";
import vehicleStore from "@/stores/VehicleStore";
import { VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Models() {
  const params = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (params) {
      vehicleStore
        .fetchVehicles({ Id: params!.id })
        .then(() => setData(vehicleStore.vehicleData[0]));
    }
  }, [params]);
  return (
    <VStack mt={"70px"}>
      {data && <Header modelsOf={data} name={"model"}></Header>}
      {data && <VehicleList modelsOf={data}></VehicleList>}
    </VStack>
  );
}
