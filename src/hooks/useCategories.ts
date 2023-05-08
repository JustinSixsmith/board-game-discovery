import categories from "../data/categories";

export interface Category {
  id: string;
  name: string;
}

const useCategories = () => ({
  data: categories,
  isLoading: false,
  error: null,
});

export default useCategories;

// useData<Category>("/game/categories");
