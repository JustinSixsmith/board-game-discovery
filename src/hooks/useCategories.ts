import { useQuery } from "@tanstack/react-query";
import categories from "../data/categories";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Category {
  id: string;
  name: string;
}

const id = "JLBr5npPhV";

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Category>>(`/game/categories?client_id=${id}`)
        .then((res) => res.data.categories),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: categories,
  });

export default useCategories;

// useData<Category>("/game/categories");
