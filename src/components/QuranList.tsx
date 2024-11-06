// src/components/QuranList.tsx
import React from "react";
import { useQuran } from "@/hooks/useQuran";

const QuranList: React.FC = () => {
  const { data: surahs, loading, error } = useQuran("surahs");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="quran-list w-full py-3 rounded">
      <div className="flex space-x-4 w-full">
        <h2 className="text-center font-semibold text-lg mb-4">Surah</h2>
        <h2 className="text-center font-semibold text-lg mb-4">Juz</h2>
        <h2 className="text-center font-semibold text-lg mb-4">Diturunkan urut</h2>
      </div>
      <ul className="grid grid-cols-1 gap-3 text-left">
        {surahs?.map((surah) => (
          <li
            key={surah.number}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className="font-semibold text-lg">{surah.name}</h3>
            <p className="text-sm text-gray-500">
              {surah.translation} - {surah.revelation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuranList;
