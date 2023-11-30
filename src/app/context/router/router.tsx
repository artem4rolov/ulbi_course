import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config";

export const Router = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
