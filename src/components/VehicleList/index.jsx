import vehicleStore from "@/stores/VehicleStore";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
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
  const [state, setState] = useState({
    Id: "",
    Name: "",
    Abrv: "",
  });

  useEffect(() => {
    vehicleStore
      .fetchVehicles(state)
      .then(() => setData(vehicleStore.vehicleData));
  }, [state]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TableContainer mt={"20px"}>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            {Object.keys(state).map((key) => {
              return <Th key={key}>{key}</Th>;
            })}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {Object.keys(state).map((key) => {
              return (
                <Td key={key} p={"10px"}>
                  <Input
                    name={key}
                    value={state[key]}
                    onChange={handleChange}
                    size={"sm"}
                  ></Input>
                </Td>
              );
            })}
            <Td></Td>
          </Tr>
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
