import { Link } from "react-router-dom";
import hotdogImage from "@/assets/img/hotdog.jpg";
import { Separator } from "@/components/ui/separator";

type RecipePageLayoutProps = {
  recipeName?: string;
};

const recipeSteps = [{
      id: "stepId1",
      imageUrl:hotdogImage,
      name:"Оглавление шага (Опционально)",
      description:"Описание шага 1"
    }, 
    {
      id: "stepId2",
      imageUrl:hotdogImage,
      name:"Оглавление шага (Опционально)",
      description:"Описание шага 2"
    },
    {
      id: "stepId3",
      imageUrl:hotdogImage,
      name:"Оглавление шага (Опционально)",
      description:"Описание шага 3"
    },
    {
      id: "stepId4",
      imageUrl:hotdogImage,
      name:"Оглавление шага (Опционально)",
      description:"Описание шага 4"
    }
  ];

const RecipePageLayout = function ({ recipeName }: RecipePageLayoutProps) {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-1">
        <div className="flex flex-col items-center">
          <Link
            className="no-underline transition duration-200 text-5xl text-foreground dark:text-primary dark:hover:text-accent-foreground hover:text-primary"
            to="/recipes"
          >
            &lt;
          </Link>
        </div>
      </div>
      <div className="border border-primary p-4 col-span-8">
        <span className="block text-3xl font-bold text-foreground dark:text-primary mb-4">
          Название рецепта
        </span>
        <div className="grid grid-cols-5">
          <div className="col-span-2 flex justify-center items-cente">
            <img
              src={hotdogImage}
              alt={recipeName}
              className="border border-primary rounded-2xl max-w-[400px] max-h-[400px] object-cover"
            />
          </div>
          <div className="col-span-3 border border-primary">
            Описание рецепта
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <span className="block text-2xl text-foreground dark:text-primary mb-4">
            Пошаговый рецепт
          </span>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default RecipePageLayout;
