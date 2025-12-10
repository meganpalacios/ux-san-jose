import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import clsx from "clsx";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);

  const liStyle = isOpenMenu ? "block" : "hidden";

  return (
    <nav className="bg-white flex w-full">
      <ul className="grid grid-flow-col w-full p-6 justify-between md:items-center md:gap-6">
        <li>
          <a className="" href="/">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </li>
        <li className={clsx(liStyle, "md:block")}>
          <span
            className="nav-link"
            onClick={() => setIsOpenSecondary(!isOpenSecondary)}>
            Nosotros
            <KeyboardArrowDownIcon />
          </span>
          {isOpenSecondary && (
            <ul>
              <li>
                <a className="nav-link" href="/instalaciones">
                  Instalaciones
                </a>
              </li>
              <li>
                <a className="nav-link" href="/doctores">
                  Nuestros doctores
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className={clsx(liStyle, "md:block")}>
          <a className="nav-link" href="/especialidades">
            Especialidades
          </a>
        </li>
        <li className={clsx(liStyle, "md:block")}>
          <a className="nav-link hidden md:block" href="/testimonios">
            Testimonios
          </a>
        </li>
        <li className={clsx(liStyle, "md:block")}>
          <a className="nav-link" href="/agendar">
            Agenda una cita
          </a>
        </li>
        <li className={clsx(liStyle, "md:block")}>
          <a className="button-primary" href="/iniciar-sesion">
            Iniciar sesión
          </a>
        </li>
        <li className="md:hidden">
          <MenuIcon
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </li>
      </ul>
    </nav>
  );
}
