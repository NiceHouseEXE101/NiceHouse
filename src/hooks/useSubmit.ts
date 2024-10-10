// src/hooks/useSubmit.ts
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const useSubmit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const submitData = async (
    endpoint: string,
    method: "post" | "put" | "delete",
    payload: any = {}
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance[method](endpoint, payload);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitData, loading, error };
};
