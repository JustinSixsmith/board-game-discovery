import { useQuery } from "@tanstack/react-query";
import categories from "../data/categories";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

export interface Category {
  id: string;
  name: string;
}

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Category>>(`/game/categories?client_id=${CLIENT_ID}`)
        .then((res) => res.data.categories),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: categories,
  });

export default useCategories;

// useData<Category>("/game/categories");
