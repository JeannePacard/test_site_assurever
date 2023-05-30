import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const [isActive, setIsActive] = useState(false);

  const handleisActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <div className="navigation">
          <img
            src="/logos/logo-bleu.png"
            alt="Logo Assurever"
            className="navbar__logo"
          />
          <div className={`nav ${isActive ? "show-nav" : "hide-nav"}`}>
            <div className={`navbar ${isActive ? "show-nav" : "hide-nav"}`}>
              <ul className="navbar__links">
                <NavLink
                  to="/"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li className="navbar__item">Accueil</li>
                </NavLink>
                <NavLink
                  to="/actuality"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li className="navbar__item">Actualité</li>
                </NavLink>
                <li className="defile navbar__item">
                  Vous êtes
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="#273370"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <ul className="behind">
                    <NavLink
                      to="/professionnels"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                      <p className="navbar__item">Professionnels du tourisme</p>
                    </NavLink>
                    <NavLink
                      to="/particuliers"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                      <p className="navbar__item">Particuliers</p>
                    </NavLink>
                  </ul>
                </li>
                <NavLink
                  to="/recrutement"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li className="navbar__item">Recrutement</li>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li className="navbar__item">Contact</li>
                </NavLink>
              </ul>
            </div>
            <button className="navbar__burger" onClick={handleisActive}>
              <span className="burger-bar"></span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
