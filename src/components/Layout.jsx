import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Header";

export default function Layout() {
  const [isActive, setIsActive] = useState(false);

  const handleisActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
