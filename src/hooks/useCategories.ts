// useCategories.ts
import { useQuery } from "@tanstack/react-query";
import categories from "../data/categories";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

export interface Category {
  id: string;
  name: string;
}

const apiClient = new APIClient<Category>(
  `/game/categories?client_id=${CLIENT_ID}`
);

const useCategories = () =>
  useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: categories,
  });

export default useCategories;
