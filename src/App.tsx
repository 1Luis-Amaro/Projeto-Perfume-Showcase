import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PerfumeDetalhes } from "./pages/PerfumeDetalhes";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen " >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfume/:id" element={<PerfumeDetalhes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
