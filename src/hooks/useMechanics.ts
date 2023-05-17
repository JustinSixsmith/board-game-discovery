// useMechanics.ts
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import mechanics from "../data/mechanics";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

export interface Mechanic {
  id: string;
  name: string;
}

const apiClient = new APIClient<Mechanic>(
  `/game/mechanics?client_id=${CLIENT_ID}`
);

const useMechanics = () =>
  useQuery<Mechanic[], Error>({
    queryKey: ["mechanics"],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"),
    initialData: mechanics,
  });

export default useMechanics;
