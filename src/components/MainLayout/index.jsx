import { Header } from "@/components/Header";
import { VehicleList } from "@/components/VehicleList";
import { VStack } from "@chakra-ui/react";

export function MainLayout() {
  return (
    <VStack mt={"70px"}>
      <Header></Header>
      <VehicleList></VehicleList>
    </VStack>
  );
}
