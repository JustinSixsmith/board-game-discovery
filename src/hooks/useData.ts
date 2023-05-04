import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  games: T[];
  mechanics: T[];
}

const useMechanics = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const id = "JLBr5npPhV";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(`${endpoint}?client_id=${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data.games || res.data.mechanics);
        setData(res.data.games || res.data.mechanics);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useMechanics;
