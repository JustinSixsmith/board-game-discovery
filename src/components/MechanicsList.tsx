import { List, ListItem, Text } from "@chakra-ui/react";
import useMechanics from "../hooks/useMechanics";

const MechanicsList = () => {
  const { data } = useMechanics();

  return (
    <List>
      {data.map((m) => (
        <ListItem key={m.id}>
          <Text fontSize="lg">{m.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default MechanicsList;
