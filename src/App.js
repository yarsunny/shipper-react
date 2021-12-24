import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import "./App.css";

const DriverManagement = React.lazy(() => import("./pages/DriverManagement"));
const Pickup = React.lazy(() => import("./pages/Pickup"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Beranda />} />
        <Route
          path="driver"
          element={
            <React.Suspense fallback={<>...</>}>
              <DriverManagement />
            </React.Suspense>
          }
        />
        <Route
          path="beranda"
          element={
            <React.Suspense fallback={<>...</>}>
              <Beranda />
            </React.Suspense>
          }
        />
        <Route
          path="pickup"
          element={
            <React.Suspense fallback={<>...</>}>
              <Pickup />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
