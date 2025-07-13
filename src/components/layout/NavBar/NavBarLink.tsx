import { useNavigate } from "react-router-dom";

interface NavBarLink {
  name: string;
  path: string;
}

export default function NavBarLink(props: NavBarLink) {
  const navigate = useNavigate();

  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 text-xl 
        hover:text-darkblue dark:hover:text-accent-foreground 
        text-primary-foreground dark:text-primary"
        aria-current="page"
        onClick={() => navigate(props.path)}
      >
        {props.name}
      </a>
    </li>
  );
}
