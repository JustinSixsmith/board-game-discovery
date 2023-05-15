import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  games: T[];
  mechanics?: T[];
  categories?: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const id = "JLBr5npPhV";

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(`${endpoint}?client_id=${id}`, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          // console.log(res.data);
          setData(res.data.games || res.data.mechanics || res.data.categories);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading: isLoading };
};

export default useData;

// user_id: "gTUbCczk76";
