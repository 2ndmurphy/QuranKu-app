// src/pages/Home.tsx
import QuranList from "@/components/QuranList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center pt-16">
      {/* Banner Section */}
      <section className="w-full p-6 bg-amber-300 flex flex-col items-center space-y-4 text-center">
        <h3>Lihat Apa yang Baru</h3>
        <Input
          type="text"
          placeholder="Cari surah..."
          className="w-full max-w-xs"
        />
        <nav className="w-full flex justify-around mt-2">
          <ul className="flex space-x-4">
            <li>About Quran</li>
            <li>Ar-Rahman</li>
            <li>Yasin</li>
            <li>Al-Mulk</li>
          </ul>
        </nav>
      </section>

      {/* Task List Section */}
      <section className="w-full bg-white p-4 space-y-4">
        <h3 className="text-2xl font-semibold text-left">
          Ayo Jelajahi dan Tumbuh Bersama Quran!
        </h3>
        <ul className="space-y-3">
          <li className="p-4 border border-gray-200 rounded-lg shadow-sm text-left">
            <h4>Buat Tujuan</h4>
            <Button>Make a goal</Button>
          </li>
          <li className="p-4 border border-gray-200 rounded-lg shadow-sm text-left">
            <h4>Buat Rencana</h4>
            <Button>Make a goal</Button>
          </li>
        </ul>
      </section>

      {/* Quran List Section */}
      <section className="w-full px-4 py-2">
        <QuranList />
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-700 text-white text-center py-4">
        <p>&copy; 2024 My Quran App</p>
      </footer>
    </div>
  );
};

export default Home;
