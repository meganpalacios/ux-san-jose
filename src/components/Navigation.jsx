import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);

  return (
    <nav className="bg-white w-full shadow-sm relative">
      <ul className="hidden md:flex w-full p-6 justify-between items-center gap-6">
        <li>
          <a href="/">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </li>

        <li>
          <span
            className="nav-link flex items-center gap-1 cursor-pointer"
            onClick={() => setIsOpenSecondary(!isOpenSecondary)}>
            Nosotros <KeyboardArrowDownIcon fontSize="small" />
          </span>
          {isOpenSecondary && (
            <ul className="pl-4 mt-2 flex flex-col">
              <a className="nav-link" href="/instalaciones">Instalaciones</a>
              <a className="nav-link" href="/doctores">Nuestros doctores</a>
            </ul>
          )}
        </li>

        <li><a className="nav-link" href="/especialidades">Especialidades</a></li>
        <li><a className="nav-link" href="/agendar">Agenda una cita</a></li>
        <li><a className="main-button" href="/iniciar-sesion">Iniciar sesión</a></li>
      </ul>

      <div className="md:hidden flex justify-between items-center p-6">
        <a href="/">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <MenuIcon
          className="cursor-pointer"
          onClick={() => setIsOpenMenu(true)}
        />
      </div>

      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpenMenu(false)}
        />
      )}

      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[70%] max-w-[320px] bg-white z-50 shadow-xl p-6 transform transition-transform duration-300",
          isOpenMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-lg">Menú</h2>
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setIsOpenMenu(false)}
          />
        </div>

        <ul className="flex flex-col gap-6">
          <li>
            <span
              className="nav-link flex items-center gap-1 cursor-pointer"
              onClick={() => setIsOpenSecondary(!isOpenSecondary)}>
              Nosotros <KeyboardArrowDownIcon fontSize="small" />
            </span>

            {isOpenSecondary && (
              <ul className="pl-4 mt-2 flex flex-col gap-2">
                <a className="nav-link" href="/instalaciones">Instalaciones</a>
                <a className="nav-link" href="/doctores">Nuestros doctores</a>
              </ul>
            )}
          </li>

          <li><a className="nav-link" href="/especialidades">Especialidades</a></li>
          <li><a className="nav-link" href="/agendar">Agenda una cita</a></li>
          <li><a className="main-button" href="/iniciar-sesion">Iniciar sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}
