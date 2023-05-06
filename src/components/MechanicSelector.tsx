import { Select } from "@chakra-ui/react";
import useMechanics, { Mechanic } from "../hooks/useMechanics";

interface Props {
  onSelectMechanic: (mechanic: Mechanic | undefined) => void;
}

const MechanicSelector = ({ onSelectMechanic }: Props) => {
  const { data, error } = useMechanics();

  if (error) {
    return null;
  }

  return (
    <Select
      onChange={(event) => {
        console.log(event.target.value);
        const selectedMechanic = data.find(
          (mechanic) => mechanic.id === event.target.value
        );
        onSelectMechanic(selectedMechanic);
      }}
      variant="filled"
      placeholder="Category"
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

export default MechanicSelector;
