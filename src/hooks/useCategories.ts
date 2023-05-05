import useData from "./useData";

export interface Category {
  id: string;
  name: string;
}

const useCategories = () => useData<Category>("/game/categories");

export default useCategories;
