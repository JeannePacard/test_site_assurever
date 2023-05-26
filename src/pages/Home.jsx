import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="body">
        <div className="hero">
          <div className="left-part">
            <h1 className="title">
              Assurever, une <span>nouvelle </span> expérience de l'assurance
            </h1>
            <h1 className="subtitle">QUI SOMMES-NOUS ?</h1>
            <p>
              Fort d’une expérience de plus de 35 ans, ASSUREVER est un courtier
              indépendant gestionnaire grossiste qui crée, gère et distribue des
              contrats d’assurance et d’assistance auprès des professionnels du
              tourisme, sur les marchés loisirs et affaires, pour les
              individuels et les groupes. <br />
              Précédemment faisant partie du groupe APRIL,la société a été
              reprise par ses dirigeants en décembre 2019.
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
                  src="./assets/Home/californie.jpg"
                  alt=""
                  className="img__align_1"
                />
                <img
                  src="./assets/Home/californie.jpg"
                  alt=""
                  className="img__align_2"
                />
              </div>
              <img
                src="./assets/Home/californie.jpg"
                alt=""
                className="img__align_3"
              />
            </div>
            <p>
              Nous sommes 50 collaborateurs ayant pour
              objectif................................. Présence sur toute la
              France Lutte cancer du seins.... Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Aut laborum libero quia corrupti
              illo, voluptatibus expedita modi maxime quam odit, tenetur eum
              voluptates deleniti non voluptatem. Itaque recusandae illum veniam
              soluta nisi asperiores rem voluptates repellendus dolores nobis.
              Earum doloribus similique animi accusamus, voluptates quas
              explicabo recusandae nesciunt rem maxime nobis in quibusdam quo
              commodi, totam tempora beatae reiciendis quia voluptatibus
              inventore vitae, blanditiis vero sapiente. Minus, magnam
              laudantium? Alias mollitia enim ea ipsam eveniet libero error quam
              soluta deleniti. Obcaecati animi, impedit architecto quasi
              pariatur amet fugiat! Aliquam fuga corporis saepe aperiam dicta et
              autem sint repudiandae molestias quod.
            </p>
          </div>
        </div>
        <hr />
        <div className="causes">
          <h1>NOS CAUSES</h1>
          <div className="cards">
            <Card
              title="Martin BOURGEOIS REPUBLIQUE"
              description="Soutenir les jeunes espoirs sportifs"
              image1="./assets/Home/martin.jpg"
              alt="photo de Martin BOURGEOIS REPUBLIQUE, biathlonien"
              image2="./assets/Home/martin(1).jpg"
              alt2="photo de Martin BOURGEOIS REPUBLIQUE, biathlonien"
            />
            <Card
              title="A chacun son Everest"
              description="Après la maladie, place à la vie ! 
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
              description="L’association Elan 2 propose pour tout adulte en situation de
                handicap mental un Centre d’Accueil de Jour, organise des
                Séjours d’Accueil Temporaire et des week-end adaptés."
              image1="./assets/Home/californie.jpg"
              alt="/"
            />
            <Card
              title="Lutte contre les Cancers du sein"
              description=""
              image1="./assets/Home/californie.jpg"
              alt="/"
            />
          </div>
        </div>
        <hr />
        <div className="valeurs">
          <h1>NOS VALEURS</h1>
          <div className="cards">
            <Card
              title="#ESPRITD’EQUIPE"
              description="L'ESPRIT D'EQUIPE est notre faculté à mettre en 
              commun l’ensemble de nos connaissances pratiques et théoriques 
              créant un lien entre nous, nous donnant ainsi la capacité d’œuvrer 
              ensemble pour le bien de l'équipe et de la société."
              image1="./assets/Home/espritdequipe.png"
              image2="./assets/Home/espritdequipe2.png"
              alt="Carte valeur #Espritd'équipe"
              alt2="Carte valeur #Espritd'équipe"
              title2="AU SEIN DE L'ENTREPRISE"
              description2="Assurever est une PME dans laquelle chacun a un rôle à 
              jouer. N’hésitez pas à partager vos idées, vous serez écouté(e). Vos 
              capacités et vos compétences peuvent être utiles et bénéfiques à 
              d’autres services afin de les aider dans leur quotidien."
              title3="AU SEIN DU SERVICE"
              description3="Vous aurez des questions à poser, n’hésitez pas à 
              le faire. Vos collègues y répondront ! En cas de surcharge de travail, 
              prévenez-nous, nous sommes aussi là pour vous aider. Si vous ne trouvez 
              pas de solution ou de réponse au sein de votre service, nous trouverons 
              l’Expert dans la société pour vous accompagner.

              Les mots à retenir : entraide et solidarité !"
              slogan="TOUT SEUL ON VA PLUS VITE, ENSEMBLE ON VA PLUS LOIN"
            />
            <Card
              title="#CONFIANCE"
              description="La CONFIANCE est une croyance en la valeur morale et 
              professionnelle d’un autre collaborateur, créant ainsi un 
              sentiment de sécurité individuel ou collectif. Il s'agit d'un 
              engagement mutuel, celui d'accepter l'erreur, trouver ensemble 
              des solutions et co-construire."
              image1="./assets/Home/confiance.png"
              image2="./assets/Home/confiance2.png"
              alt="Carte valeur #Confiance"
              alt2="Carte valeur #Confiance"
              title2="AU SEIN DE L'ENTREPRISE"
              description2="La confiance au sein de l'Entreprise se traduit par la 
              circulation de l'information, par la responsabilisation des collaborateurs 
              en précisant le rôle et les objectifs de chacun tout en travaillant sur la 
              cohésion d'équipe. 
              La confiance est une valeur qui se cultive au quotidien et qui permet à 
              chacun et à l'Entreprise de se développer. "
              title3="AU SEIN DU SERVICE"
              description3="A partir du moment où une tâche vous est confiée, vous êtes 
              autonome sur sa réalisation. Vos collègues sont présents pour vous 
              accompagner, vous aider à réaliser cette mission et à gagner en autonomie 
              et en compétences. Vous avez droit à l'erreur !"
              slogan="APPRENONS LE LÂCHER PRISE"
            />
            <Card
              title="#EXPERTISE"
              description="L'EXPERTISE est la capacité à enrichir son métier, 
              ses compétences, ses attitudes et ses aptitudes afin de garantir 
              un niveau de professionnalisme en perpétuelle progression."
              image1="./assets/Home/expertise.png"
              image2="./assets/Home/expertise2.png"
              alt="Carte valeur #Expertise"
              alt2="Carte valeur #Expertise"
              title2="AU SEIN DE L'ENTREPRISE"
              description2="Tout est prévu pour que votre intégration soit rapide et complète. 
              En effet, un parcours de formation et d’intégration est prévu pour tout nouvel 
              entrant dans la société : vous serez reçu par chaque service afin de vous 
              familiariser avec le métier de chacun. Vous ferez ainsi connaissance avec chaque 
              collaborateur de la société et vous connaitrez par conséquent les missions, les 
              outils de travail et les domaines d’expertises de chacun. 
              Vous saurez ainsi vers quel Expert vous tourner pour obtenir les réponses à vos 
              questions ou l’aide attendue."
              title3="AU SEIN DU SERVICE"
              description3="Vous bénéficierez également d’une formation générale et complète 
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
              description="L'ADAPTABILITE est la capacité à pouvoir s'adapter 
              aux évolutions et aux mutations de son service, de son métier, 
              de son secteur d’activité et de son milieu professionnel."
              title2="AU SEIN DE L'ENTREPRISE"
              description2="Vous pouvez être amené à réaliser d’autres missions que 
              celles pour lesquelles vous avez été engagé(e)."
              title3="AU SEIN DU SERVICE"
              description3=" Vous pouvez être amené(e) à changer vos habitudes de travail, notamment dans 
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
      <Footer />
    </div>
  );
}
