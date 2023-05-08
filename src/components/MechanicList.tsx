import { Select, Spinner } from "@chakra-ui/react";
import useMechanics, { Mechanic } from "../hooks/useMechanics";

interface Props {
  onSelectMechanic: (mechanic: Mechanic) => void;
}

const MechanicList = ({ onSelectMechanic }: Props) => {
  const { data, isLoading, error } = useMechanics();

  if (error) return null;
  if (isLoading) return <Spinner>Loading...</Spinner>;

  return (
    <Select
      onChange={(event: { target: { value: string } }) =>
        onSelectMechanic(
          data.find((mechanic) => mechanic.id === event.target.value) || {
            id: "",
            name: "",
          }
        )
      }
      variant="filled"
      placeholder="Mechanic"
      size="md"
    >
      {data.map((mechanic) => (
        <option key={mechanic.id} value={mechanic.id}>
          {mechanic.name}
        </option>
      ))}
    </Select>
  );
};

export default MechanicList;

// import { List, ListItem, Text } from "@chakra-ui/react";
// import useMechanics from "../hooks/useMechanics";

// const MechanicsList = () => {
//   const { data } = useMechanics();

//   return (
//     <List>
//       {data.map((m) => (
//         <ListItem key={m.id}>
//           <Text fontSize="lg">{m.name}</Text>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default MechanicsList;
