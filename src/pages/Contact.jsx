import React from "react";
import Department from "../components/Department";

export default function Contact() {
  return (
    <>
      <div className="departments">
        <Department
          icone="./assets/Contact/avantvente.jpg"
          alt="avant vente"
          title="Avant vente"
          picto="./assets/Contact/at-sign-circle.svg"
          alt_picto="pictogramme envoie d'un mail"
          mail="information@assurever.com"
          subject="Demande provenant du site"
        />
        <Department
          icone="./assets/Contact/commerciaux.jpg"
          alt="Commerciaux"
          title="Commerciaux"
          picto="./assets/Contact/at-sign-circle.svg"
          alt_picto="pictogramme envoie d'un mail"
          mail="commercial@assurever.com"
          subject="Demande provenant du site"
        />
        <Department
          icone="./assets/Contact/comptabilite.jpg"
          alt="Comptabilité"
          title="Comptabilité"
          picto="./assets/Contact/at-sign-circle.svg"
          alt_picto="pictogramme envoie d'un mail"
          mail="comptabilite@assurever.com"
          subject="Demande provenant du site"
        />
        <Department
          icone="./assets/Contact/communication.jpg"
          alt="Communication"
          title="Communication"
          picto="./assets/Contact/at-sign-circle.svg"
          alt_picto="pictogramme envoie d'un mail"
          mail="communication@assurever.com"
          subject="Demande provenant du site"
        />
        <Department
          icone="./assets/Contact/telephone.jpg"
          alt="Telephone"
          title="Téléphone"
          picto="./assets/Contact/phone.svg"
          alt_picto="pictogramme téléphone"
          tel="01 73 03 41 01"
        />
        <Department
          icone="./assets/Contact/courrier.jpg"
          alt="Courrier"
          title="Courrier"
          picto_letter="./assets/Contact/mail.svg"
          alt_picto_letter="pictogramme lettre"
          adress="TSA 82219 – 18039 BOURGES Cedex"
        />
      </div>
    </>
  );
}
