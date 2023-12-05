import { Header } from "@/components/Header";
import { VehicleList } from "@/components/VehicleList";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack mt={"70px"}>
      <Header modelsOf={null} name={"vehicle"}></Header>
      <VehicleList modelsOf={null}></VehicleList>
    </VStack>
  );
}
