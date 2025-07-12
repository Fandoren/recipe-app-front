import Recipes from "@/routes/recipes/Recipes";
import { Route, Routes } from "react-router-dom";
import Login from "@/routes/auth/Login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}