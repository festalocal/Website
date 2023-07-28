// Router import
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import UnderWork from "./pages/UnderWork";
import LegalNotice from "./pages/LegalNotice";
// Web app pages imports
const Home = lazy(() => import("./pages/Home"));
const FestivalsCatalogue = lazy(() => import("./pages/FestivalsCatalogue"));
const FestivalDetails = lazy(() => import("./pages/FestivalDetails"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetes" element={<FestivalsCatalogue />} />
          <Route path="/fetes/:id" element={<FestivalDetails />} />
          <Route path="/carte" element={<UnderWork />} />
          <Route path="/about" element={<UnderWork />} />
          <Route path="/organisateur" element={<UnderWork />} />
          <Route path="/login" element={<UnderWork />} />
          <Route path="/mentions_legales" element={<LegalNotice />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
