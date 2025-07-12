import RecipeCard from "@/components/layout/recipes/RecipeCard";
import hotdogImage from "@/assets/img/hotdog.jpg";
import hamburgerImage from "@/assets/img/hamburger.jpg";
import pastaBolognaImage from "@/assets/img/pastaBologna.jpg";
import pastaCarbonaraImage from "@/assets/img/pastaCarbonara.jpg";

const Recipes = function () {
  const recipes = [{
      id: "someUniqueId1",
      imageUrl:hotdogImage,
      name:"Хот-дог",
      description:"Очень вкусный хот-дог с нежной булочкой, который Вам определённо понравится!",
      difficulty:"Легко",
      cookTime:"30 минут",
      rating:4.5,
      tags:["Стрит-фуд", "Мясо", "Хлеб"]
    }, 
    {
      id: "someUniqueId2",
      imageUrl:hamburgerImage,
      name:"Гамбургер",
      description:"Ультравкусный ХЭМБУРГЕР ПЛИЗ.",
      difficulty:"Средняя",
      cookTime:"1 час",
      rating:5,
      tags:["Мясо", "Стрит-фуд"]
    },
    {
      id: "someUniqueId3",
      imageUrl:pastaBolognaImage,
      name:"Паста болоньезе",
      description:"Ну это обязательно нужно попробовать",
      difficulty:"Средняя",
      cookTime:"45 минут",
      rating:4.2,
      tags:["Итальянская кухня", "Макароны", "Томаты"]
    },
    {
      id: "someUniqueId4",
      imageUrl:pastaCarbonaraImage,
      name:"Паста карбонара",
      description:"Вы откусите себе пальцы, когда попробуете эту вкуснятину.",
      difficulty:"Сложно",
      cookTime:"45 минут",
      rating:4.4,
      tags:["Итальянская кухня", "Макароны", "Бекон"]
    }
  ];

  return (
    <>
    <div className="justify-center flex items-center my-4">
      <div className="w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Recipes;
