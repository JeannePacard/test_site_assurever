import React from "react";
import Article from "../components/Article";

export default function Actuality() {
  return (
    <>
      <div className="container">
        <div className="actuality_container">
          {/* pour creer un nouvel article : 
            - Copier/coller toute la partie <Article ......... /> + la balise <hr />
            (la balise hr sert à mettre une ligne entre chaque article pour les différencier)

            Title = le titre de l'article
            Content = Premier paragraphe
            Content2 = Second paragraphe 
            Content3 = Troisième paragraphe 
            (Attention 3 paragraphes maximum)
            Link_article = lien de l'article dans la presse 
            Subtitle = Titre écrit au dessus de l'image comme pour l'article Lancement du trophée 2023 avec le "Merci à nos partenaires"
            Image = lien de l'image 
            Alt = description de l'image pour les malvoyants

            Vous pouvez ne pas remplir tous les champs si par exemple un article ne contient que 2 paragraphes
            Les tailles d'images ne sont pas réglable pour vous, si vous voulez une image plus petite il faudra mettre des bords transparents sur votre image
            */}
          <Article
            title="Votre client a manqué sa correspondance ?"
            content="Avec ASSUREVER et la Protection Correspondance, offrez lui la garantie d’un départ de province serein."
            content2="Nous remboursons le nouveau titre de transport (avion/train) de votre client."
            content3="La correspondance est un moyen de transport dont le service est établi en liaison avec celui d’un autre, avec une concordance d’horaires.

            Un délai minimum doit bien évidemment être respecté entre l’heure prévue d’arrivée du premier transport et l’heure de départ prévue du transport suivant."
            link_article="https://www.tourmag.com/Votre-client-a-manque-sa-correspondance_a118976.html"
            subtitle=""
            image="/assets/Articles/correspondance.jpg"
            alt="Mathieu Drouet et Jean Philippe Lardennois"
          />
          <hr />
          <Article
            title="Assurever – Un accompagnement des professionnels du tourisme qui fait la différence"
            content="Reprise fin 2019 par ses dirigeants, Matthieu Drouet et Jean-Philippe Lardennois, Assurever est un courtier qui s’adresse uniquement aux professionnels du tourisme. Avec à la clé une nouvelle expérience de l’assurance voyage qui repose sur des valeurs inscrites dans son ADN : adaptabilité, expertise, confiance et esprit d’équipe."
            content2="Fort d’une expérience de l’assurance et d’une expertise du tourisme de plus de 35 ans, Assurever crée, gère et distribue des contrats d’assurance et d’assistance auprès des professionnels du tourisme, sur les marchés loisirs et affaires, pour les individuels et les groupes."
            content3=""
            link_article="https://www.lechotouristique.com/article/assurever-un-accompagnement-des-professionnels-du-tourisme-qui-fait-la-difference"
            subtitle=""
            image="/assets/Articles/assurever-matthieu-drouet-jean-philippe-lardenois.jpg"
            alt="Mathieu Drouet et Jean Philippe Lardennois"
          />
          <hr />
          <Article
            title="Opération Padawan : Comment Assurever forme ses chevaliers Jedi"
            content="« Lorsque l’on visite les agences de voyage avec nos équipes, explique Matthieu Drouet, le président d’ Assurever, nous avons constaté un manque de repères parmi des nombreux conseillers en voyages."
            content2="Il leur faut en effet non seulement des connaissances techniques sur l’assurance voyage mais également des connaissances géographiques et culturelles sur les destinations qu’elles sont amenées à proposer à leur clients« ."
            content3=""
            link_article="https://www.laquotidienne.fr/operation-padawan-comment-assurever-forme-ses-chevaliers-jedi/"
            subtitle=""
            image="/assets/Articles/Matthieu-Drouet-Assurever.jpg"
            alt="Mathieu Drouet, président d'Assurever"
          />
          <hr />

          <Article
            title="LA DESTINATION EST DEVOILEE"
            content="La destination du trophée 2023 est enfin dévoilée : l’Islande !"
            content2="Pour cette édition, nos partenaires sont Mutuaide et Avis."
            content3=""
            link_article="https://www.tourmag.com/Trophee-Assurever-la-destination-mystere-pour-2023-est_a118678.html"
            subtitle=""
            image="/assets/Articles/islande.jpg"
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
            image="/assets/Articles/formations.jpg"
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
            image="/assets/Articles/partenaires.png"
            alt="Partenaire Trophée 2023 Assurever"
          />
        </div>
      </div>
    </>
  );
}
