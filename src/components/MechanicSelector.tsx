import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import useMechanic from "../hooks/useMechanic";
import useMechanics from "../hooks/useMechanics";
import useGameQueryStore from "../store";

const MechanicSelector = () => {
  const { data, error } = useMechanics();
  const setSelectedMechanicId = useGameQueryStore((s) => s.setMechanicId);
  const selectedMechanicId = useGameQueryStore((s) => s.gameQuery.mechanicId);
  const selectedMechanic = useMechanic(selectedMechanicId);
  const [isOpen, setIsOpen] = useState(false);

  if (error) {
    return null;
  }

  const handleSelectMechanic = (mechanicId: string) => {
    setSelectedMechanicId(mechanicId);
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      placement="bottom-start"
    >
      <PopoverTrigger>
        <Button rightIcon={<BsChevronDown />}>
          {selectedMechanic?.name || "Select a Mechanic"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody maxH="400px" overflowY="auto" p={0}>
          <List spacing={3} p={3}>
            {data.map((mechanic) => (
              <ListItem
                key={mechanic.id}
                onClick={() => handleSelectMechanic(mechanic.id)}
                cursor="pointer"
              >
                {mechanic.name}
              </ListItem>
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default MechanicSelector;
