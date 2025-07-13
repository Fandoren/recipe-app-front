import { Moon, Sun } from "lucide-react"

import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "@/components/layout/theme-toggle/ThemeProvider"
import { useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme === "dark");

  const onThemeChange = (checked: boolean) => {
    setCurrentTheme(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Switch.Root
      checked={currentTheme}
      onCheckedChange={onThemeChange}
      className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background 
      disabled:cursor-not-allowed disabled:opacity-50 bg-accent border-input"
    >
      <span
        className={`${
          currentTheme ? "translate-x-5" : "translate-x-0"
        } 
        pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 
        flex items-center justify-center
        transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`}
      >
        {currentTheme ? (
          <Moon className="w-4 h-4 m-auto text-card-foreground" />
        ) : (
          <Sun className="w-4 h-4 m-auto" />
        )}
      </span>
    </Switch.Root>
  );
}