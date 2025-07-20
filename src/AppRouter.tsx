import Recipes from "@/routes/recipes/Recipes";
import { Route, Routes } from "react-router-dom";
import Login from "@/routes/auth/Login";
import Registration from "./routes/auth/Registration";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
    </Routes>
  );
}