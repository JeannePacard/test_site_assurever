import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Pro from "./pages/Pro";
import Recrutement from "./pages/Recrutement";
import Contact from "./pages/Contact";
import Legalnotice from "./pages/Legalnotice";
import Layout from "./components/Layout";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "./ga-utils.ts";

const App = () => {
  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };
  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <>
      <CookieConsent
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        style={{ background: "#273370" }}
      >
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
      </CookieConsent>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/actuality" element={<Actuality />} />
            <Route path="/professionnels" element={<Pro />} />
            <Route path="/recrutement" element={<Recrutement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionslegales" element={<Legalnotice />} />
            {/* path="*" => pour si l'url ne correspond à rien  */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
