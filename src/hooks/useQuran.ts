import { useState, useEffect } from "react";
import { fetchQuran } from "@/api/quranApi";

type Surah = {
  number: number;
  numberOfAyahs: number;
  name: string;
  translation: string;
  revelation: string;
};

export const useQuran = (endpoint: string) => {
  const [data, setData] = useState<Surah[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchQuran<Surah[]>(endpoint);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
