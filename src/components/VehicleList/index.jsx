import vehicleStore from "@/stores/VehicleStore";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function VehicleList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    vehicleStore
      .fetchVehicles("")
      .then(() => setData(vehicleStore.vehicleData));
  }, []);

  return (
    <TableContainer mt={"20px"}>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Abrv</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((vehicle) => {
            return (
              <Tr key={vehicle.Id}>
                <Td>{vehicle.Id}</Td>
                <Td>{vehicle.Name}</Td>
                <Td>{vehicle.Abrv}</Td>
                <Td>
                  <Button mr={"5px"} colorScheme="blue" leftIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button colorScheme="red" leftIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
