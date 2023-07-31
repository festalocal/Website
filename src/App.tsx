// Router import
import { Route, Routes } from "react-router-dom";
import { LazyExoticComponent, Suspense, lazy } from "react";
// Web app pages imports
const Home: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./pages/Home")
);

const FestivalsCatalogue: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./pages/FestivalsCatalogue")
);
const FestivalDetails: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./pages/FestivalDetails")
);
const UnderWork: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./pages/UnderWork")
);
const LegalNotice: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("./pages/LegalNotice")
);

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
