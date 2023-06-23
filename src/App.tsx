// Router import
import { Route, Routes } from "react-router-dom";
// Web app pages imports
import Home from "./pages/Home";
import FestivalsCatalogue from "./pages/FestivalsCatalogue";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetes" element={<FestivalsCatalogue />} />
      </Routes>
    </>
  );
}

export default App;
