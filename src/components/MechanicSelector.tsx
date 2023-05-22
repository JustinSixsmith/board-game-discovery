import { Select } from "@chakra-ui/react";
import useMechanics from "../hooks/useMechanics";
import useGameQueryStore from "../store";

const MechanicSelector = () => {
  const { data, error } = useMechanics();
  const setSelectedMechanicId = useGameQueryStore((s) => s.setMechanicId);
  const selectedMechanicId = useGameQueryStore((s) => s.gameQuery.mechanicId);

  if (error) {
    return null;
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMechanicId(selectedMechanicId || event.target.value);
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
