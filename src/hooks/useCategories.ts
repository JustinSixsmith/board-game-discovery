import { useQuery } from "@tanstack/react-query";
import categories from "../data/categories";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const apiClient = new APIClient<Category>(
  `/game/categories?client_id=${CLIENT_ID}`
);

export interface Category {
  id: string;
  name: string;
}

const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: categories,
  });

export default useCategories;

// useData<Category>("/game/categories");
