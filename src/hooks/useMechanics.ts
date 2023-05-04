import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Mechanics {
  id: number;
  name: string;
}

interface FetchMechanicsResponse {
  count: number;
  mechanics: Mechanics[];
}

const Mechanics = () => {
  const [mechanics, setMechanics] = useState<Mechanics[]>([]);
  const [error, setError] = useState("");
  const id = "JLBr5npPhV";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchMechanicsResponse>(`/game/mechanics?client_id=${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data.mechanics);
        setMechanics(res.data.mechanics);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { mechanics, error, loading };
};

export default Mechanics;
