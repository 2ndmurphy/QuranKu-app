// src/App.tsx
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative w-full max-w-md h-screen bg-zinc-500 flex flex-col mx-auto overflow-y-auto">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
