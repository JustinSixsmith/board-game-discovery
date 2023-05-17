import useMechanics from "./useMechanics";

const useMechanic = (id?: string) => {
  const { data: mechanics } = useMechanics();
  return mechanics?.find((m) => m.id === id);
};

export default useMechanic;
