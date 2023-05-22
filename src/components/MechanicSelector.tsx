import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useMechanic from "../hooks/useMechanic";
import useMechanics from "../hooks/useMechanics";
import useGameQueryStore from "../store";

const MechanicSelector = () => {
  const { data, error } = useMechanics();
  const setSelectedMechanicId = useGameQueryStore((s) => s.setMechanicId);
  const selectedMechanicId = useGameQueryStore((s) => s.gameQuery.mechanicId);
  const selectedMechanic = useMechanic(selectedMechanicId);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedMechanic?.name || "Select a Mechanic"}
      </MenuButton>
      <MenuList>
        {data.map((mechanic) => (
          <MenuItem
            onClick={() => setSelectedMechanicId(mechanic.id)}
            key={mechanic.id}
            value={mechanic.id}
          >
            {mechanic.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MechanicSelector;

// import { Select } from "@chakra-ui/react";
// import useMechanics from "../hooks/useMechanics";
// import useGameQueryStore from "../store";

// const MechanicSelector = () => {
//   const { data, error } = useMechanics();
//   const setSelectedMechanicId = useGameQueryStore((s) => s.setMechanicId);
//   // const selectedMechanicId = useGameQueryStore((s) => s.gameQuery.mechanicId);

//   if (error) {
//     return null;
//   }

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedMechanicId(event.target.value);
//   };

//   return (
//     <Select
//       onChange={handleSelectChange}
//       variant="filled"
//       placeholder="Select a Mechanic"
//       size="md"
//       width="inherit"
//       fontWeight="bold"
//     >
//       {data?.map((mechanic) => (
//         <option key={mechanic.id} value={mechanic.id}>
//           {mechanic.name}
//         </option>
//       ))}
//     </Select>
//   );
// };

// export default MechanicSelector;
