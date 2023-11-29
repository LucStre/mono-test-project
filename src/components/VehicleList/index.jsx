import vehicleStore from "@/stores/VehicleStore";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
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
    sortBy: "",
    orderBy: "",
  });
  const [page, setPage] = useState({
    limit: 5,
    skip: 0,
  });
  const [size, setSize] = useState(-1);

  useEffect(() => {
    vehicleStore
      .fetchVehicles({ ...state, ...page })
      .then(() => setData(vehicleStore.vehicleData));
  }, [state, page]);

  useEffect(() => {
    vehicleStore
      .fetchVehicles(state)
      .then(() => setSize(vehicleStore.vehicleData.length));
  }, [state, size]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSort = (event) => {
    setState({
      ...state,
      sortBy: event.target.textContent,
      orderBy: state.orderBy == "asc" ? "desc" : "asc",
    });
  };

  const handlePageChange = (skip) => {
    setPage({
      ...page,
      skip: skip,
    });
  };

  return (
    <TableContainer mt={"20px"}>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            {Object.keys(state)
              .slice(0, 3)
              .map((key) => {
                return (
                  <Th key={key} cursor={"pointer"} onClick={handleSort}>
                    {key}
                  </Th>
                );
              })}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {Object.keys(state)
              .slice(0, 3)
              .map((key) => {
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
      <Flex justifyContent={"space-between"}>
        <IconButton
          colorScheme="teal"
          icon={<ArrowLeftIcon />}
          isDisabled={page.skip < page.limit}
          onClick={() => handlePageChange(0)}
        ></IconButton>
        <IconButton
          variant="outline"
          colorScheme="teal"
          icon={<ChevronLeftIcon />}
          isDisabled={page.skip < page.limit}
          onClick={() => handlePageChange(page.skip - page.limit)}
        ></IconButton>
        <ButtonGroup alignItems={"center"}>
          {Array.from(Array(Math.ceil(size / page.limit)), (e, i) => {
            return (
              <Button
                key={i}
                variant="ghost"
                colorScheme="teal"
                size="sm"
                isActive={i * page.limit == page.skip}
                onClick={() => handlePageChange(i * page.limit)}
              >
                {i + 1}
              </Button>
            );
          })}
        </ButtonGroup>
        <IconButton
          variant="outline"
          colorScheme="teal"
          icon={<ChevronRightIcon />}
          isDisabled={size <= page.limit + page.skip}
          onClick={() => handlePageChange(page.skip + page.limit)}
        ></IconButton>
        <IconButton
          colorScheme="teal"
          icon={<ArrowRightIcon />}
          isDisabled={size <= page.limit + page.skip}
          onClick={() =>
            handlePageChange(Math.floor(size / page.limit) * page.limit)
          }
        ></IconButton>
      </Flex>
    </TableContainer>
  );
}
