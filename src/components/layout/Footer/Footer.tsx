import { Separator } from "@/components/ui/separator";
import FooterPages from "./FooterPages";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="bg-background">
      <Separator/>
      <div className="grid grid-cols-12 px-4 py-2">
        <div className="col-span-2 flex items-center justify-center">
          <span className="text-4xl font-semibold whitespace-nowrap text-foreground dark:text-primary">
            Рецептовик
          </span>
        </div>
        <FooterPages />
        <FooterSocial />
      </div>
    </footer>
  );
}
