import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="left-part">
            <h1 className="title">
              Assurever, une <span>nouvelle </span> expérience de l'assurance
            </h1>
            <h1 className="subtitle">QUI SOMMES-NOUS ?</h1>
            <p>
              Amoureux des voyages en toute liberté, nous savons que voyager
              sereinement est possible dès lors que les voyageurs sont rassurés
              car bien assurés auprès d’acteurs fiables et R’assurants. <br />
              <br /> Fort de 35 ans d’expérience, la nouvelle marque ASSUREVER
              est aujourd’hui un courtier grossiste indépendant et gestionnaire,
              n°1 sur le marché du tourisme Loisirs et Affaires grâce au
              déploiement de nos équipes terrain.
            </p>
          </div>
          <img src="./assets/Home/californie.jpg" alt="Route de Californie" />
        </div>
        <hr />
        <div className="about-us">
          <h1>UN PEU PLUS SUR NOUS</h1>
          <div className="about-us__container">
            <div className="about-us__img">
              <div className="img__align">
                <img
                  src="./assets/Home/groupe.jpg"
                  alt=""
                  className="img__align_1"
                />
                <img
                  src="./assets/Home/octobre-rose2.jpg"
                  alt=""
                  className="img__align_2"
                />
              </div>
              <img
                src="./assets/Home/assurever-1.jpg"
                alt=""
                className="img__align_3"
              />
            </div>
            <p>
              Nous créons, distribuons et gérons des contrats d’assurances et
              d’assistance sur mesure pour répondre aux besoins de nos clients
              professionnels, de l’assurance voyage à la couverture des risques
              IARD liés à leur activité.
              <br />
              Nous les accompagnons dans un cadre de partenariats durables
              nourris : de notre expertise technique de l’assurance doublée de
              nos savoir-faire dans le tourisme, de relations de proximité grâce
              à une présence commerciale dédiée.
              <br />
              <br />
              ASSUREVER est avant tout une aventure humaine, une histoire
              d’hommes et de femmes, proches de nos clients et de nos assurés.
              <br />
              Adaptabilité, Expertise, Confiance et Esprit d'équipe, nos valeurs
              sont nos engagements qui nous ressemblent et nous assemblent en
              nous guidant au quotidien pour mener à bien notre mission auprès
              de vous.
            </p>
          </div>
        </div>
        <hr />
        <div className="causes">
          <h1>NOS CAUSES</h1>
          <div className="cards">
            {/* pour creer une nouvelle carte valeur ou causes... : 
            - Copier/coller toute la partie <Card ......... /> 
            Title = le titre de l'annonce
            Content = description 
            Image1 = image qui s'affiche sur la page d'accueil
            Alt = description de l'image pour les malvoyants pour l'image 1
            Image2 = image qui s'affiche dans le pop up
            Alt2 = description de l'image pour les malvoyants pour l'image 2

            subtitle = sous titre qui s'affiche DANS le pop up (voir les pop up de nos valeurs : subtitle = le premier titre sous l'image)
            content2 = la description d'en dessous du premier sous titre 
            subtitle2 et content3 = pareil

            slogan = Notre phrase slogan qui s'affiche tout en bas du pop up
            */}
            <Card
              title="Martin BOURGEOIS REPUBLIQUE"
              content="Soutenir les jeunes espoirs sportifs"
              image1="./assets/Home/martin.jpg"
              alt="photo de Martin BOURGEOIS REPUBLIQUE, biathlonien"
              image2="./assets/Home/martin(1).jpg"
              alt2="photo de Martin BOURGEOIS REPUBLIQUE, biathlonien"
            />
            <Card
              title="A chacun son Everest"
              content="Après la maladie, place à la vie ! 
              L’association à Chacun son Everest !, accompagne des
                enfants atteints de cancer ou de leucémie, et des femmes en
                rémission d’un cancer du sein, pour les aider à affronter la
                phase délicate de l’après-cancer et qu’ils puissent retrouver
                confiance, joie de vivre et un nouvel élan de vie."
              image1="./assets/Home/Achacunsoneverest.jpg"
              image2="./assets/Home/Achacunsoneverest2.jpg"
              alt="photo des enfants de l'association 'A chacun son Everest'"
              alt2="mot des enfants de l'association 'A chacun son Everest'"
            />
            <Card
              title="Elan 2"
              content="L’association Elan 2 propose pour tout adulte en situation de
                handicap mental un Centre d’Accueil de Jour, organise des
                Séjours d’Accueil Temporaire et des week-end adaptés."
              image1="./assets/Home/californie.jpg"
              alt="/"
            />
            <Card
              title="Lutte contre les Cancers du sein"
              content=""
              image1="./assets/Home/groupe.jpg"
              alt="Photo de l'événement octobre rose"
              image2="./assets/Home/octobre-rose.jpg"
            />
          </div>
        </div>
        <hr />
        <div className="values">
          <h1>NOS VALEURS</h1>
          <div className="cards">
            <Card
              title="#ESPRITD’EQUIPE"
              content="L'ESPRIT D'EQUIPE est notre faculté à mettre en 
              commun l’ensemble de nos connaissances pratiques et théoriques 
              créant un lien entre nous, nous donnant ainsi la capacité d’œuvrer 
              ensemble pour le bien de l'équipe et de la société."
              image1="./assets/Home/espritdequipe.png"
              image2="./assets/Home/espritdequipe2.png"
              alt="Carte valeur #Espritd'équipe"
              alt2="Carte valeur #Espritd'équipe"
              subtitle="AU SEIN DE L'ENTREPRISE"
              content2="Assurever est une PME dans laquelle chacun a un rôle à 
              jouer. N’hésitez pas à partager vos idées, vous serez écouté(e). Vos 
              capacités et vos compétences peuvent être utiles et bénéfiques à 
              d’autres services afin de les aider dans leur quotidien."
              secondsubtitle="AU SEIN DU SERVICE"
              content3="Vous aurez des questions à poser, n’hésitez pas à 
              le faire. Vos collègues y répondront ! En cas de surcharge de travail, 
              prévenez-nous, nous sommes aussi là pour vous aider. Si vous ne trouvez 
              pas de solution ou de réponse au sein de votre service, nous trouverons 
              l’Expert dans la société pour vous accompagner.

              Les mots à retenir : entraide et solidarité !"
              slogan="TOUT SEUL ON VA PLUS VITE, ENSEMBLE ON VA PLUS LOIN"
            />
            <Card
              title="#CONFIANCE"
              content="La CONFIANCE est une croyance en la valeur morale et 
              professionnelle d’un autre collaborateur, créant ainsi un 
              sentiment de sécurité individuel ou collectif. Il s'agit d'un 
              engagement mutuel, celui d'accepter l'erreur, trouver ensemble 
              des solutions et co-construire."
              image1="./assets/Home/confiance.png"
              image2="./assets/Home/confiance2.png"
              alt="Carte valeur #Confiance"
              alt2="Carte valeur #Confiance"
              subtitle="AU SEIN DE L'ENTREPRISE"
              content2="La confiance au sein de l'Entreprise se traduit par la 
              circulation de l'information, par la responsabilisation des collaborateurs 
              en précisant le rôle et les objectifs de chacun tout en travaillant sur la 
              cohésion d'équipe. 
              La confiance est une valeur qui se cultive au quotidien et qui permet à 
              chacun et à l'Entreprise de se développer. "
              secondsubtitle="AU SEIN DU SERVICE"
              content3="A partir du moment où une tâche vous est confiée, vous êtes 
              autonome sur sa réalisation. Vos collègues sont présents pour vous 
              accompagner, vous aider à réaliser cette mission et à gagner en autonomie 
              et en compétences. Vous avez droit à l'erreur !"
              slogan="APPRENONS LE LÂCHER PRISE"
            />
            <Card
              title="#EXPERTISE"
              content="L'EXPERTISE est la capacité à enrichir son métier, 
              ses compétences, ses attitudes et ses aptitudes afin de garantir 
              un niveau de professionnalisme en perpétuelle progression."
              image1="./assets/Home/expertise.png"
              image2="./assets/Home/expertise2.png"
              alt="Carte valeur #Expertise"
              alt2="Carte valeur #Expertise"
              subtitle="AU SEIN DE L'ENTREPRISE"
              content2="Tout est prévu pour que votre intégration soit rapide et complète. 
              En effet, un parcours de formation et d’intégration est prévu pour tout nouvel 
              entrant dans la société : vous serez reçu par chaque service afin de vous 
              familiariser avec le métier de chacun. Vous ferez ainsi connaissance avec chaque 
              collaborateur de la société et vous connaitrez par conséquent les missions, les 
              outils de travail et les domaines d’expertises de chacun. 
              Vous saurez ainsi vers quel Expert vous tourner pour obtenir les réponses à vos 
              questions ou l’aide attendue."
              secondsubtitle="AU SEIN DU SERVICE"
              content3="Vous bénéficierez également d’une formation générale et complète 
              sur votre métier afin de devenir vous-même très vite Expert dans votre domaine. 
              Nous savons que vous n’avez pas la science infuse ;) Vos collègues comme nos clients 
              apprécieront l’honnêteté de quelqu’un qui reconnait « ne pas savoir » et qui saura 
              où, et auprès de qui trouver la bonne information. Votre discours n’en sera que plus 
              rassurant.
              Vous entretiendrez par la suite votre statut d’Expert ; chez Assurever, la curiosité 
              n’est pas un vilain défaut !"
              slogan="L'EXPERTISE EST COMME UN JARDIN, ELLE SE CULTIVE"
            />
            <Card
              title="#ADAPTABILITE"
              content="L'ADAPTABILITE est la capacité à pouvoir s'adapter 
              aux évolutions et aux mutations de son service, de son métier, 
              de son secteur d’activité et de son milieu professionnel."
              subtitle="AU SEIN DE L'ENTREPRISE"
              content2="Vous pouvez être amené à réaliser d’autres missions que 
              celles pour lesquelles vous avez été engagé(e)."
              secondsubtitle="AU SEIN DU SERVICE"
              content3=" Vous pouvez être amené(e) à changer vos habitudes de travail, notamment dans 
              l’organisation matérielle, physique (télétravail, flex office) mais aussi dans 
              les outils utilisés au quotidien.
              Chaque client est unique et possède ses propres besoins. Il faudra faire preuve 
              de flexibilité et d’agilité pour répondre efficacement, que ce soit un autocariste, 
              une agence de voyage traditionnelle, un groupiste, une compagnie aérienne… De la 
              même manière, la réponse apportée à un professionnel ou un particulier sera 
              différente, à vous de vous adapter ! 
              Nous ne parlerons pas de taxes aéroportuaires à un autocariste, il nous regarderait 
              avec des yeux comme des soucoupes !
              Nos garanties et nos produits évoluent avec le monde du voyage, un monde en 
              perpétuelle évolution, volcans, attentats, pandémies… Et nous aussi !"
              slogan="CHEZ ASSUREVER, l’IMPOSSIBLE EST EN COURS"
              image1="./assets/Home/adaptabilite.png"
              image2="./assets/Home/adaptabilite2.png"
              alt="Carte valeur #Adaptabilité"
              alt2="Carte valeur #Adaptabilité"
            />
          </div>
        </div>
      </div>
    </>
  );
}
