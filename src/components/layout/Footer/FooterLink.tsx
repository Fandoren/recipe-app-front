import { useNavigate } from "react-router-dom";

interface FooterLinkProps {
  name: string;
  path: string;
  svg?: string;
  svgViewBox?: string;
}

export default function FooterLink({
  name,
  path,
  svg,
  svgViewBox
}: FooterLinkProps) {
  const navigate = useNavigate();

  const svgElement = svg ? (
    <svg
      className="w-10 h-10"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox= {svgViewBox || "0 0 32 32"}
    >
      <path d={svg}></path>
      <span className="sr-only">{name}</span>
    </svg>
  ) : (
    <></>
  );

  return (
    <a
      href={path}
      className="hover:text-primary dark:hover:text-accent-foreground 
        text-foreground dark:text-primary transition duration-200"
    >
      {svgElement}
      {svg ? null : name}
    </a>
  );
}
