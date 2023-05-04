import useMechanics from "../hooks/useMechanics";

const MechanicsList = () => {
  const { data } = useMechanics();

  return (
    <ul>
      {data.map((m) => (
        <li key={m.id}>{m.name}</li>
      ))}
    </ul>
  );
};

export default MechanicsList;
