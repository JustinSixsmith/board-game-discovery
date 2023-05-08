import mechanics from "../data/mechanics";

export interface Mechanic {
  id: string;
  name: string;
}

const useMechanics = () => ({ data: mechanics, isLoading: false, error: null });

export default useMechanics;

// useData<Mechanic>("/game/mechanics");
