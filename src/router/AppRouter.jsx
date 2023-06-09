import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/**Login and Register */}
      <Route path="/auth/*" element={<AuthRoute />} />
      {/**JournalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
