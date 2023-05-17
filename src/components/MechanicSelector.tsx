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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const mechanicId = event.target.value;
    const selectedMechanic = data?.find(
      (mechanic) => mechanic.id === mechanicId
    );
    onSelectMechanic(selectedMechanic || null);
  };

  return (
    <Select
      onChange={handleSelectChange}
      variant="filled"
      placeholder="Select a Mechanic"
      size="md"
      width="inherit"
      fontWeight="bold"
    >
      {data?.map((mechanic) => (
        <option key={mechanic.id} value={mechanic.id}>
          {mechanic.name}
        </option>
      ))}
    </Select>
  );
};

export default MechanicSelector;
