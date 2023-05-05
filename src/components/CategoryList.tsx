import { Select, Spinner } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const CategoriesList = ({ onSelectCategory }: Props) => {
  const { data, loading, error } = useCategories();

  if (error) return null;
  if (loading) return <Spinner>Loading...</Spinner>;

  return (
    <Select
      onChange={(event: { target: { value: string } }) =>
        onSelectCategory(
          data.find((category) => category.id === event.target.value) || {
            id: "",
            name: "",
          }
        )
      }
    >
      <option> - Category - </option>
      {data.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoriesList;
