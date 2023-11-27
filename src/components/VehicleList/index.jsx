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

export function VehicleList() {
  const vehicles = [
    { Id: 1, Name: "Toyota", Abrv: "TYT" },
    { Id: 2, Name: "Audi", Abrv: "AD" },
    { Id: 3, Name: "Mercedes Benz", Abrv: "MB" },
    { Id: 4, Name: "Alfa Romeo", Abrv: "ALRO" },
    { Id: 5, Name: "Citroen", Abrv: "CTR" },
  ];
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
          {vehicles.map((vehicle) => {
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
