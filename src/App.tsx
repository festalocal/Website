// Router import
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// Web app pages imports
const Home = lazy(() => import("./pages/Home"));
const FestivalsCatalogue = lazy(() => import("./pages/FestivalsCatalogue"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/fetes" element={<FestivalsCatalogue />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
