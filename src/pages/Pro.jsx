import React from "react";

export default function Pro() {
  return (
    <>
      <div className="question">
        <h1>
          PROFESSIONNELS, <br /> POURQUOI NOUS REJOINDRE ?
        </h1>
      </div>
      <div className="advantages">
        <p className="advantage bleu">
          <strong>
            <span> Une équipe commerciale sur l'ensemble de la France.</span>
          </strong>
          <br />
          <br /> Un Commercial Terrain ainsi qu'un Conseiller Client
          spécifiquement pour votre agence.
        </p>
        <p className="advantage bleu">
          <strong>
            <span> Un extranet pro</span>
          </strong>
          <br />
          <br /> Pour souscrire vos assurances et suivre vos ventes
        </p>
        <p className="advantage bleu">
          <strong>
            <span>
              Un site de souscription dédié pour vos souscriptions d'assurances
              personnelles.
            </span>
          </strong>
          <br />
          <br /> Une assurance voyage réservée aux professionnels du tourisme,
          pour y avoir accès contacter votre commercial ou notre service client.
        </p>
        <p className="advantage bleu">
          <strong>
            <span>
              Une intégration dans vos sites internets ou dans vos outils de
              reservation de voyages.
            </span>
          </strong>
          <br />
          <br /> Des API afin d'intégrer directement la souscription de
          l'assurance dans vos outils de reservation de voyages ou sur votre
          site de vente de voyages
        </p>
      </div>
      <img
        src="./assets/Professionnel/commerciaux.jpg"
        alt="Carte des commerciaux"
        className="salesman"
      />
      <p className="contact">
        Vous êtes un professionnel du tourisme , un courtier en assurance et
        vous souhaitez avoir des informations sur les produits d'assurance
        voyage de Assurever ? <br /> Contacter notre équipe commerciale par mail
        <a href="mailto:commercial@assurever.com"> commercial@assurever.com</a>.
      </p>
      <div className="gammepro">
        <h1>
          Découvrez également <br /> la gamme pro
        </h1>
        <p>
          Cette gamme est destinée aux professionnels du tourisme. Elle comprend
          bien sur la RCP (Responsabilité Civile Professionnelle) mais également
          la multirsique pour vos locaux, la santé prévoyance, la protection
          juridique, la responsabilité des dirigeants, la couverture de flotte
          automobile ou d'autocars (à partir de 3 véhicules). <br /> Contacter
          notre équipe commerciale par mail
          <a href="mailto:commercial@assurever.com">commercial@assurever.com</a>
          .
        </p>
      </div>
    </>
  );
}
