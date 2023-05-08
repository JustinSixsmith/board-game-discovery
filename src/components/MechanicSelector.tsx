import { Select } from "@chakra-ui/react";
import useMechanics, { Mechanic } from "../hooks/useMechanics";

interface Props {
  onSelectMechanic: (mechanic: Mechanic | null) => void;
}

const MechanicSelector = ({ onSelectMechanic }: Props) => {
  const { data, error } = useMechanics();

  if (error) {
    return null;
  }

  return (
    <Select
      onChange={(event) => {
        const selectedMechanic = data.find(
          (mechanic) => mechanic.id === event.target.value
        );
        onSelectMechanic(selectedMechanic || null);
      }}
      variant="filled"
      placeholder="Mechanics (All)"
      size="md"
      width="16"
      fontWeight="bold"
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
