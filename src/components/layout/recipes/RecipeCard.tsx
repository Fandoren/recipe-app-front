import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
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

  return (
    <Card
      className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl max-w-xs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-60">
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
        >
          <h2 className="font-bold text-lg text-white drop-shadow">
            {name}
          </h2>
        </div>
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <p className="text-white text-sm drop-shadow">{description}</p>
          </div>
        )}
      </div>
      <CardContent className="space-y-2 p-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Сложность: {difficulty}</span>
          <span>Время готовки: {cookTime}</span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
