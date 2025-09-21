import { Link, NavLink } from "react-router";
import { Separator } from "../ui/separator";
import {
  FileQuestionMark,
  Github,
  LayoutDashboard,
  Linkedin,
} from "lucide-react";

const SideBarContent = () => {
  return (
    <>
      <img
        src="/logo/GeoAgroMap.svg"
        alt="Logo GeoAgroMap"
        className="w-65 mx-auto"
      />

      <Separator className="my-10 bg-gray-200 !w-3/4 mx-auto" />

      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block ${isActive ? "bg-primary-75" : ""}`
            }
          >
            <li className="flex items-center gap-5 px-5 text-neutral-600 py-2 hover:bg-primary-100 transition-all duration-300 ease-in-out">
              <LayoutDashboard size={28} />
              <span className="text-xl">Dashboard</span>
            </li>
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `block ${isActive ? "bg-primary-75" : ""}`
            }
          >
            <li className="flex items-center gap-5 px-5 text-neutral-600 py-2 hover:bg-primary-100 transition-all duration-300 ease-in-out">
              <FileQuestionMark size={29} />
              <span className="text-xl">Sobre</span>
            </li>
          </NavLink>
        </ul>
      </nav>

      <div className="mt-auto flex flex-col gap-5">
        <div className="flex items-center justify-center gap-5 text-primary-200">
          <Link
            to={"www.linkedin.com/in/pedrodev-goncalves"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-100 transition-all duration-300 ease-in-out"
          >
            <Linkedin size={50} />
          </Link>
          <Link
            to={"https://github.com/PedroGoncalves-Dev"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-100 transition-all duration-300 ease-in-out"
          >
            <Github size={50} />
          </Link>
        </div>
        <p className="text-center text-sm text-primary-200">
          Desenvolvido por <span className="font-bold">Pedro Gonçalves</span>
        </p>
      </div>
    </>
  );
};

export default SideBarContent;
