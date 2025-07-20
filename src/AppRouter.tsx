import Recipes from "@/routes/recipes/Recipes";
import { Route, Routes } from "react-router-dom";
import Login from "@/routes/auth/Login";
import Registration from "./routes/auth/Registration";
import Recipe from "./routes/recipe/Recipe";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:recipeName" element={<Recipe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
