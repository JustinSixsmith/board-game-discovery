import { Select, Spinner } from "@chakra-ui/react";
import useMechanics, { Mechanism } from "../hooks/useMechanics";

interface Props {
  onSelectMechanics: (category: Mechanism) => void;
}

const MechanicsList = ({ onSelectMechanics }: Props) => {
  const { data, loading, error } = useMechanics();

  if (error) return null;
  if (loading) return <Spinner>Loading...</Spinner>;

  return (
    <Select
      onChange={(event: { target: { value: string } }) =>
        onSelectMechanics(
          data.find((mechanism) => mechanism.id === event.target.value) || {
            id: "",
            name: "",
          }
        )
      }
    >
      <option> - Mechanism - </option>
      {data.map((mechanism) => (
        <option key={mechanism.id} value={mechanism.id}>
          {mechanism.name}
        </option>
      ))}
    </Select>
  );
};

export default MechanicsList;

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
