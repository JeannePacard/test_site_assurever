import React from "react";
import Post from "../components/Post";

export default function Recrutement() {
  return (
    <>
      <div className="container">
        <div className="recruitment">
          <h1>Venez nous rejoindre !</h1>
          <h2>Nous recrutons</h2>

          <p>
            Nous rejoindre, c'est avant tout rejoindre une aventure humaine, une
            histoire d’hommes et de femmes, proches de nos clients et de nos
            assurés. <br />
            <br />
            <strong>
              Alors, qu'attendez-vous pour entrer dans la grande famille
              ASSUREVER ?
            </strong>
          </p>
          <iframe
            src="https://www.youtube.com/embed/Hs9_AiLSh8w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <hr />
        <div className="offers">
          <h1>Nos offres actuelles :</h1>
          <div className="offer">
            {/* pour creer un nouveau post : 
            - Copier/coller toute la partie <Post ......... /> 
            Title = le titre de l'annonce
            Image = lien de l'image à ajouter 
            Alt = description de l'image pour les malvoyants
            Description = description de l'annonce 
            Link = Lien du document PDF du post
            Title_link = Ce qu'il y a écrit sur le bouton sur lequel on clique pour voir l'annonce
            Mail = Mail à qui envoyer la candidature
            */}
            <Post
              title="Candidature spontanée"
              image="https://www.mairie-longevillesurmer.fr/medias/2023/04/Offre-demploi.jpg"
              alt="Image d'offre d'emploie"
              description="Nous n'avons actuellement pas d'offre d'emploi mais nous vous invitons à effectuer une candidature spontanée !"
              link="#"
              title_link="Voir l'offre d'emploi"
              mail="rh@assurever.com"
              subject="Candidature spontanée"
              title_mail="Nous vous invitons à envoyer votre candidature par mail à rh@assurever.com ou en cliquant ici."
            />
          </div>
        </div>
      </div>
    </>
  );
}
