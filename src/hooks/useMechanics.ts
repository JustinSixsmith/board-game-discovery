import { useQuery } from "@tanstack/react-query";
import mechanics from "../data/mechanics";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const apiClient = new APIClient<Mechanic>(
  `/game/mechanics?client_id=${CLIENT_ID}`
);

export interface Mechanic {
  id: string;
  name: string;
}

const useMechanics = () =>
  useQuery({
    queryKey: ["mechanics"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: mechanics,
  });

export default useMechanics;

// useData<Mechanic>("/game/mechanics");

// ({ data: mechanics, isLoading: false, error: null });
