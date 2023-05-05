import useData from "./useData";

export interface Mechanic {
  id: string;
  name: string;
}

const useMechanics = () => useData<Mechanic>("/game/mechanics");

export default useMechanics;
