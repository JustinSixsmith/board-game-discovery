import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const UserRating = ({ score }: Props) => {
  const color = score > 3.49 ? "green" : score > 3.09 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default UserRating;
