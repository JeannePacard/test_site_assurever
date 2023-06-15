import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled, keyframes } from "@stitches/react";

import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIconClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <NavigationMenuRoot className="NavigationMenuRoot">
        <img
          src="/logos/logo-bleu.png"
          alt="Logo Assurever"
          className="header_logo"
        />
        <button className="icon" onClick={handleIconClick}>
          <HamburgerMenuIcon />
        </button>
        <NavigationMenuList
          className={`NavigationMenuList NavigationMenuList--top ${
            menuOpen ? "visible" : "hide"
          }`}
        >
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuLink className="NavigationMenuLink" href="/">
              Accueil
            </NavigationMenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuLink
              className="NavigationMenuLink"
              href="/professionnels"
            >
              Notre expertise
            </NavigationMenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuLink
              className="NavigationMenuLink"
              href="/actuality"
            >
              Actualité
            </NavigationMenuLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuTrigger className="NavigationMenuTrigger">
              Vous êtes <CaretDownIcon aria-hidden className="caretdown" />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="NavigationMenuContent">
              <NavigationMenu.Sub className="NavigationMenuSub">
                <NavigationMenu.List
                  className={`NavigationMenuList ${menuOpen ? "visible" : ""}`}
                >
                  <NavigationMenu.Item
                    value="sub2"
                    className="NavigationMenuItem"
                  >
                    <NavigationMenu.Trigger className="NavigationMenuTrigger NavigationMenuTrigger--variant">
                      Particuliers
                      <CaretDownIcon aria-hidden className="caretdown" />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                      <div className="ListSubMenu">
                        <ListItem
                          className="ListItem"
                          title="Espace personnel"
                          href="https://monespace.assurever.com/#/app/accueil"
                        >
                          Vous avez déjà souscrit une assurance et vous
                          souhaitez accéder à votre espace personnel ?
                        </ListItem>
                        <ListItem
                          className="ListItem"
                          title="Recherche d'assurance"
                          href="#"
                        >
                          Vous êtes à la recherche d’une assurance voyage pour
                          protéger votre séjour ?
                        </ListItem>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item
                    value="sub3"
                    className="NavigationMenuItem"
                  >
                    <NavigationMenu.Trigger className="NavigationMenuTrigger NavigationMenuTrigger--variant ">
                      Courtiers
                      <CaretDownIcon aria-hidden className="caretdown" />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                      <div className="ListSubMenu">
                        <ListItem
                          className="ListItem"
                          title="Site pro"
                          href="https://pro.assurever.com/#/app/authenticate/direct"
                        >
                          Vous disposez de vos identifiants ?
                        </ListItem>
                        <ListItem
                          className="ListItem"
                          title="Partenaires"
                          href="mailto:thomas.blanc@assurever.com?subject=Devenir partenaire Assurever"
                        >
                          Vous souhaitez devenir partenaire d’Assurever ?
                        </ListItem>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item
                    value="sub1"
                    className="NavigationMenuItem"
                  >
                    <NavigationMenu.Trigger className="NavigationMenuTrigger NavigationMenuTrigger--variant">
                      Professionnel du tourisme
                      <CaretDownIcon aria-hidden className="caretdown" />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="NavigationMenuContent">
                      <div className="ListSubMenu">
                        <ListItem
                          className="ListItem"
                          title="Espace pro"
                          href="https://pro.assurever.com/#/app/accueil"
                        >
                          Vous faites déjà partie de nos clients fidèles et vous
                          disposez de vos codes de connexion à l’espace pro ?
                        </ListItem>
                        <ListItem
                          className="ListItem"
                          title="Informations"
                          href="mailto:information@assurever.com?subject=Demande de renseignement"
                          target="_blank"
                        >
                          Vous souhaitez plus d’informations sur les solutions
                          que nous pouvons vous proposer ?
                        </ListItem>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenuContent>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuLink
              className="NavigationMenuLink"
              href="/recrutement"
            >
              Recrutement
            </NavigationMenuLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenuLink className="NavigationMenuLink" href="/contact">
              Contact
            </NavigationMenuLink>
          </NavigationMenu.Item>

          <NavigationMenuIndicator>
            <Arrow />
          </NavigationMenuIndicator>
        </NavigationMenuList>

        <ViewportPosition className="ViewportPosition">
          <NavigationMenuViewport />
        </ViewportPosition>
      </NavigationMenuRoot>
    </>
  );
};

const colortext = "#273370";
const bleu = "#2733703c";

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: "relative",
  display: "flex",
  width: "max-content",
  justifyContent: "center",
  alignItems: "center",
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  borderRadius: 6,
  listStyle: "none",
  margin: 0,
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: colortext,
  "&:focus": { boxShadow: `0 0 0 2px ${bleu}` },
  "&:hover": { backgroundColor: bleu },
};

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  transition: "width, transform 250ms ease",
  '&[data-state="open"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="close"]': { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  fontSize: 15,
  lineHeight: 1,
});

const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "white",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
});

const ListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <ListItemLink {...props} ref={forwardedRef}>
          <ListItemHeading>{title}</ListItemHeading>
          <ListItemText>{children}</ListItemText>
        </ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);

const ListItemLink = styled("a", {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  "&:focus": { boxShadow: `0 0 0 2px ${bleu}` },
  "&:hover": { backgroundColor: bleu, color: colortext },
});

const ListItemHeading = styled("div", {
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 5,
  color: colortext,
  "&:hover": { color: colortext },
});

const ListItemText = styled("p", {
  all: "unset",
  color: colortext,
  lineHeight: 1.4,
  fontWeight: "initial",
  "&:hover": { color: colortext },
});

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: "3%",
  perspective: "2000px",
});

const Arrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "white",
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});

export default Navigation;
