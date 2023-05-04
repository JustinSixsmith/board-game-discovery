import useData from "./useData";

export interface Categories {
  id: number;
  name: string;
}

const useCategories = () => useData<Categories>("/game/categories");

export default useCategories;
