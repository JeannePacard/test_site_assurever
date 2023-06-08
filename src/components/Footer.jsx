import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="/logos/logo-blanc.png"
            alt="Logo Assurever"
            className="logo"
          />
        </div>
        <div className="footer-navigation">
          <h4>Navigation</h4>
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/actuality">
              <li>Actualité</li>
            </NavLink>
            <NavLink to="/professionnels">
              <li>Professionnels du tourisme</li>
            </NavLink>
            <NavLink to="/particuliers">
              <li>Particuliers</li>
            </NavLink>
            <NavLink to="/recrutement">
              <li>Recrutement</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Mentions légales</li>
            </NavLink>
          </ul>
        </div>

        <div className="footer-information">
          <h4>Informations</h4>
          <div className="information__column">
            <table width="100%" border="1" cellspacing="1" cellpadding="5">
              <tr>
                <td>Adresse : </td>
                <td>TSA 82219 – 18039 BOURGES Cedex</td>
              </tr>
              <tr>
                <td>Téléphone :</td>
                <td>
                  <a href="tel:0173034101">01 73 03 41 01</a>
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                  <a href="mailto:information@assurever.com">
                    information@assurever.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>Social :</td>
                <td>
                  <a href="https://www.linkedin.com/company/assurever/mycompany/">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0731 1.96875H2.92686C2.3375 1.96875 1.85938 2.475 1.85938 3.09902V14.901C1.85938 15.525 2.3375 16.0312 2.92686 16.0312H14.0731C14.6625 16.0312 15.1406 15.525 15.1406 14.901V3.09902C15.1406 2.475 14.6625 1.96875 14.0731 1.96875ZM14.0731 14.9062C6.63897 14.9045 2.92188 14.9027 2.92188 14.901C2.92354 7.02949 2.9252 3.09375 2.92686 3.09375C10.361 3.09551 14.0781 3.09727 14.0781 3.09902C14.0765 10.9705 14.0748 14.9062 14.0731 14.9062ZM3.82832 7.24043H5.79893V13.9518H3.82832V7.24043ZM4.81445 6.32285C5.44365 6.32285 5.95664 5.78145 5.95664 5.11348C5.95664 4.95466 5.9271 4.7974 5.8697 4.65067C5.8123 4.50394 5.72816 4.37062 5.6221 4.25832C5.51604 4.14602 5.39013 4.05694 5.25155 3.99616C5.11297 3.93538 4.96445 3.9041 4.81445 3.9041C4.66446 3.9041 4.51593 3.93538 4.37736 3.99616C4.23878 4.05694 4.11287 4.14602 4.0068 4.25832C3.90074 4.37062 3.81661 4.50394 3.75921 4.65067C3.70181 4.7974 3.67227 4.95466 3.67227 5.11348C3.67061 5.78145 4.18193 6.32285 4.81445 6.32285ZM9.00303 10.6312C9.00303 9.75586 9.16074 8.90859 10.1851 8.90859C11.1944 8.90859 11.2094 9.90879 11.2094 10.6875V13.9518H13.1783V10.2709C13.1783 8.46387 12.8098 7.07344 10.8159 7.07344C9.85801 7.07344 9.21553 7.63066 8.95156 8.15801H8.925V7.24043H7.03408V13.9518H9.00303V10.6312Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@assurever">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.986 7.50005L8.78174 9.33104V5.66907L11.986 7.50005Z"
                        fill="white"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 8.14725V6.85183C1 4.20148 1 2.87584 1.82852 2.02352C2.65796 1.17028 3.96345 1.13366 6.57352 1.05951C7.80944 1.02472 9.07282 1 10.1549 1C11.2361 1 12.4995 1.02472 13.7363 1.05951C16.3464 1.13366 17.6519 1.17028 18.4804 2.02352C19.3099 2.87584 19.3099 4.20239 19.3099 6.85183V8.14725C19.3099 10.7985 19.3099 12.1232 18.4813 12.9765C17.6519 13.8288 16.3473 13.8663 13.7363 13.9396C12.5004 13.9753 11.237 14 10.1549 14C8.9609 13.9964 7.76699 13.9763 6.57352 13.9396C3.96345 13.8663 2.65796 13.8297 1.82852 12.9765C1 12.1232 1 10.7976 1 8.14817V8.14725Z"
                        stroke="white"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
