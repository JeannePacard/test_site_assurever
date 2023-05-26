import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Article from "../components/Article";

export default function Actuality() {
  return (
    <div>
      <Navigation />
      <div className="body">
        <div className="actuality_container">
          <Article
            title="LA DESTINATION EST DEVOILEE"
            content="La destination du trophée 2023 est enfin dévoilée : l’Islande !"
            content2="Pour cette édition, nos partenaires sont Mutuaide et Avis."
            content3=""
            link_article="https://www.tourmag.com/Trophee-Assurever-la-destination-mystere-pour-2023-est_a118678.html"
            subtitle=""
            image="./assets/Articles/islande.jpg"
            alt="Paysage d'Islande"
          />
          <hr />
          <Article
            title="Assurance voyage ou assurance des cartes bancaires ?"
            content="Nous vous proposons un nouveau service pour aider les agences de voyages à convaincre leurs clients de l'importance de souscrire une assurance pour leurs séjours : le service FORMATIONS d’ASSUREVER."
            content2=""
            content3=""
            link_article="https://www.tourmag.com/Assurance-voyage-ou-assurance-des-cartes-bancaires-ASSUREVER-vous-aide-a-y-voir-plus-clair_a118139.html"
            subtitle=""
            image="./assets/Articles/formations.jpg"
            alt="Dates des formations Assurever 2023"
          />
          <hr />
          <Article
            title="LANCEMENT DU TROPHEE 2023"
            content="Ca y est, ASSUREVER lance sa 9ème édition du Trophée des meilleurs vendeurs d’assurances voyage."
            content2="Les inscriptions sont ouvertes, rendez-vous sur votre espace pro.assurever.com (espace des news) et cliquez sur le lien pour faire participer votre agence et remporter une place pour un somptueux voyage. "
            content3="Destination : mystère !"
            link_article="https://www.laquotidienne.fr/assurever-relance-son-trophee/"
            subtitle="Merci à nos partenaires"
            image="./assets/Articles/partenaires.png"
            alt="Partenaire Trophée 2023 Assurever"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
