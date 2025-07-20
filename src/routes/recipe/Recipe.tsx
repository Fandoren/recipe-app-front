import RecipePageLayout from "@/components/layout/recipe/RecipePageLayout";
import { useParams } from "react-router-dom";

function Recipe() {
  const { recipeName } = useParams<{ recipeName: string }>();

  return <RecipePageLayout recipeName={recipeName} />;
}

export default Recipe;
