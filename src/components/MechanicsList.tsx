import React from "react";
import useMechanics from "../hooks/useMechanics";

const Mechanics = () => {
  const { mechanics } = useMechanics();

  return (
    <ul>
      {mechanics.map((m) => (
        <li key={m.id}>{m.name}</li>
      ))}
    </ul>
  );
};

export default Mechanics;
