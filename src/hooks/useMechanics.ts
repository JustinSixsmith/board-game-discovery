import useData from "./useData";

export interface Mechanics {
  id: number;
  name: string;
}

const useMechanics = () => useData<Mechanics>("/game/mechanics");

export default useMechanics;
