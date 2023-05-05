import useData from "./useData";

export interface Mechanism {
  id: string;
  name: string;
}

const useMechanics = () => useData<Mechanism>("/game/mechanics");

export default useMechanics;
