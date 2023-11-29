import { Header } from "@/components/Header";
import { VehicleList } from "@/components/VehicleList";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack mt={"70px"}>
      <Header title={"List of vehicles"} name={"vehicle"}></Header>
      <VehicleList></VehicleList>
    </VStack>
  );
}
