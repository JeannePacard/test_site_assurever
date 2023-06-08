import React from "react";
import Department from "../components/Department";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="departments">
          <Department
            icone="./assets/Contact/avantvente.jpg"
            alt="avant vente"
            title="Vous hésitez entre deux assurances ? vous avez une question sur une garantie ?"
            picto="./assets/Contact/at-sign-circle.svg"
            alt_picto="pictogramme envoie d'un mail"
            mail="information@assurever.com"
            subject="Demande provenant du site"
          />
          <Department
            icone="./assets/Contact/commerciaux.jpg"
            alt="Commerciaux"
            title="Vous souhaitez rejoindre les 4500 professionnels du tourisme qui nous font déjà confiance ?"
            picto="./assets/Contact/at-sign-circle.svg"
            alt_picto="pictogramme envoie d'un mail"
            mail="commercial@assurever.com"
            subject="Demande provenant du site"
          />
          <Department
            icone="./assets/Contact/comptabilite.jpg"
            alt="Comptabilité"
            title="Vous souhaitez régler une facture ou valider un règlement ? "
            picto="./assets/Contact/at-sign-circle.svg"
            alt_picto="pictogramme envoie d'un mail"
            mail="comptabilite@assurever.com"
            subject="Demande provenant du site"
          />
          <Department
            icone="./assets/Contact/communication.jpg"
            alt="Communication"
            title="Vous êtes un professionnel de la presse ? vous souhaitez en savoir encore plus sur notre société ? "
            picto="./assets/Contact/at-sign-circle.svg"
            alt_picto="pictogramme envoie d'un mail"
            mail="communication@assurever.com"
            subject="Demande provenant du site"
          />
          <Department
            icone="./assets/Contact/telephone.jpg"
            alt="Telephone"
            title="Vous préférez nous contacter par téléphone ?"
            picto="./assets/Contact/phone.svg"
            alt_picto="pictogramme téléphone"
            tel="01 73 03 41 01"
          />
          <Department
            icone="./assets/Contact/courrier.jpg"
            alt="Courrier"
            title="Ou par courrier ?"
            picto_letter="./assets/Contact/mail.svg"
            alt_picto_letter="pictogramme lettre"
            adress="TSA 82219 – 18039 BOURGES Cedex"
          />
        </div>
      </div>
    </>
  );
}
