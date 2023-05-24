import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import categories from "../data/categories";
import { Category } from "../entities/Category";
import APIClient from "../services/api-client";
import { CLIENT_ID } from "../services/client-id";

const apiClient = new APIClient<Category>(
  `/game/categories?client_id=${CLIENT_ID}`
);

const useCategories = () =>
  useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: categories,
  });

export default useCategories;
