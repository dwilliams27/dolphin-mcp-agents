import { Route, Routes } from "react-router-dom";

import { Login } from "@/pages/login";

export function LoginRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
