import { useQuery } from "@tanstack/react-query";
import mechanics from "../data/mechanics";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

export interface Mechanic {
  id: string;
  name: string;
}

const useMechanics = () =>
  useQuery({
    queryKey: ["mechanics"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Mechanic>>(`/game/mechanics?client_id=${CLIENT_ID}`)
        .then((res) => res.data.mechanics),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: mechanics,
  });

export default useMechanics;

// useData<Mechanic>("/game/mechanics");

// ({ data: mechanics, isLoading: false, error: null });
