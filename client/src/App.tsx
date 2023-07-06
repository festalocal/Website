// Router import
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
