import { useState } from "react";
import { Button } from "../../ui/button";
import NavBarHamburger from "./NavBarHamburger";
import NavBarLinkList from "./NavBarLinkList";
import NavBarLogo from "./NavBarLogo";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../theme-toggle/ModeToggle";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {

  const [isLogged, setLogged] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-background">
      <div className="grid grid-cols-12 p-4 py-2">
        <NavBarLogo></NavBarLogo>
        <NavBarHamburger></NavBarHamburger>
        <div className="hidden md:block col-span-8" id="navbar-default">
          <NavBarLinkList></NavBarLinkList>
        </div>
        <div className="col-span-1 flex items-center">
          <ModeToggle/>
        </div>
        <div className="col-span-1">
          {isLogged 
            ? <Button>Личный кабинет</Button> 
            : <Button onClick={() => navigate("/login")}>Войти</Button>}
        </div>
      </div>
      <Separator/>
    </nav>
  );
}
