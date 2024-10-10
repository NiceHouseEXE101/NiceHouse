// src/hooks/useFetchRooms.ts
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

interface Room {
  image: string;
  name: string;
  price: string;
  area: string;
  beds: string;
  rating: number;
}

const useFetchRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axiosInstance.get<Room[]>("/Product");
        setRooms(response.data);
      } catch (error) {
        setError("Failed to fetch room data");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return { rooms, loading, error };
};

export default useFetchRooms;
