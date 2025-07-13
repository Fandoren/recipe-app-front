import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Dumbbell, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RecipeCardProps {
  imageUrl: string;
  name: string;
  description: string;
  difficulty: string;
  cookTime: string;
  rating: number;
  tags: string[];
}

export default function RecipeCard({
  imageUrl,
  name,
  description,
  difficulty,
  cookTime,
  rating,
  tags,
}: RecipeCardProps) {
  const [hovered, setHovered] = useState(false);

  let shortenTagName = (tagName: string) => {
    if (tagName.length > 10) {
      return tagName.slice(0, 8) + "...";
    }
    return tagName;
  };

  return (
    <Card
      className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl max-w-xs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-40">
        <img
          src={imageUrl}
          alt={name}
          className={cn(
            "h-full w-full object-cover transition-all duration-300",
            hovered ? "blur-sm scale-105" : ""
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-end p-4 transition-all duration-300",
            hovered ? "items-start" : "items-end"
          )}
        ></div>
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <p className="text-white text-sm drop-shadow">{description}</p>
          </div>
        )}
      </div>
      <CardContent className="space-y-2 py-2 px-4">
        <h2 className="font-bold text-xl text-secondary-background drop-shadow">
          {name}
        </h2>
        <div className="flex justify-around space-x-2 text-sm text-secondary-text">
          <span className="flex w-max">
            <Dumbbell className="w-5 h-5 mx-1" />
            {difficulty}
          </span>
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-1 h-6"
          />
          <span className="flex w-max">
            <Clock className="w-5 h-5 mx-1" />
            {cookTime}
          </span>
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-1 h-6"
          />
          <span className="flex w-max">
            <Star className="w-5 h-5 mx-1" />
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Badge className="mx-1" key={tag}>
              {shortenTagName(tag)}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
