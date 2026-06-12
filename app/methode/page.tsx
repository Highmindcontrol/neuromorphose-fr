export const metadata = {
  title: "La méthode",
  description:
    "La Neuromorphose® est une méthode clinique de transformation par la médiation d'une forme intérieure. Six lignées scientifiques convergentes, trois modes cliniques, un protocole en sept temps.",
};

export default function MethodePage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">La Neuromorphose®</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Une méthode clinique pour traverser ce qui se présente.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            La Neuromorphose® est une méthode clinique de transformation
            par la médiation d&apos;une forme intérieure. Conçue par
            François Le Moing à partir d&apos;une intuition clinique
            précise, elle a été progressivement formalisée en un protocole
            rigoureux, adossée à un manifeste scientifique trilingue,
            instrumentée par des outils numériques propriétaires, et
            désormais transmise dans le cadre d&apos;une formation
            certifiante exigeante.
          </p>
          <p className="mt-4 text-sm text-gris-texte">
            Cette page présente la méthode dans ses grands axes. Pour le
            détail scientifique complet, les références cliniques et le
            livre fondateur, consultez{" "}
            <a
              href="https://neuromorphose.com"
              className="text-bleu-federation underline hover:text-bleu-clair"
              target="_blank"
              rel="noopener noreferrer"
            >
              neuromorphose.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* === Six lignées scientifiques === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Six lignées scientifiques</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            La Neuromorphose® ne se rattache à aucune école unique, mais
            elle s&apos;inscrit à l&apos;intersection de six lignées
            scientifiques majeures.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Lignee
              numero="01"
              titre="Neurosciences de la forme"
              texte="Le cortex visuel occupe environ 30 % de la surface corticale humaine. Le cerveau pense avec des formes, des couleurs, des mouvements, des textures — le langage articulé n'est qu'une traduction tardive d'une grammaire intérieure plus riche. Cellules de lieu (O'Keefe), cellules de grille (Moser) — prix Nobel de médecine 2014. Simulation épisodique constructive (Schacter, Addis)."
            />
            <Lignee
              numero="02"
              titre="Cristallographie et biologie moléculaire"
              texte="Les cinq solides de Platon, les sept systèmes cristallins, les capsides icosaédriques des virus — la matière elle-même s'organise selon des formes géométriques précises. Le cerveau qui convoque ces formes en séance accède à une intuition géométrique partagée avec la matière vivante."
            />
            <Lignee
              numero="03"
              titre="Lignée philosophique"
              texte="Du Timée de Platon au De divina proportione de Pacioli illustré par Léonard de Vinci, en passant par Plotin, Proclus, Boèce et la Melencolia I de Dürer — vingt-cinq siècles de pensée occidentale ont préparé l'idée que la géométrie intérieure de la psyché est un objet sérieux."
            />
            <Lignee
              numero="04"
              titre="Filiation analytique"
              texte="Carl Gustav Jung et le mandala comme structure psychique fondamentale. Marie-Louise von Franz qui étend l'intuition jungienne aux solides de Platon comme archétypes de la psyché. Edward Edinger qui articule Jung et alchimie. La Neuromorphose® hérite de cette intuition mais sans son métaphysique strict."
            />
            <Lignee
              numero="05"
              titre="Héritage hypnotique"
              texte="Milton Erickson (1901-1980) a posé le langage hypnotique conversationnel — truismes, présuppositions, ratifications, métaphores thérapeutiques. La transe n'est pas un état spécial provoqué par une induction théâtrale : c'est un état naturel et quotidien qu'on rejoint au fil du dialogue, sans rupture."
            />
            <Lignee
              numero="06"
              titre="Approches somatiques"
              texte="Stephen Porges et la théorie polyvagale qui montre que l'engagement social ventral vagal est l'état préalable à toute ouverture clinique. Antonio Damasio qui articule cognition et émotion. Bessel van der Kolk qui rappelle que « le corps n'oublie rien ». La séance est aussi, et d'abord, une séance somatique."
            />
          </div>
        </div>
      </section>

      {/* === Trois modes cliniques === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Les trois modes cliniques</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Une séance multifacette, trois modes en fonction du besoin
            du patient.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gris-texte">
            Une séance de Neuromorphose® mobilise un ou plusieurs des
            trois modes cliniques, choisis à l&apos;anamnèse selon ce
            que la personne porte. Le praticien articule ces modes pour
            épouser au plus près le besoin réel du patient.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Mode
              nom="Résolution"
              texte="La personne vient avec quelque chose qui pèse — une angoisse, un blocage, une douleur intérieure, une boucle obsédante. La forme convoquée dit ce qui pèse, le rend manipulable, et permet que la pesée se transforme, s'apaise, ou se dissipe."
            />
            <Mode
              nom="Exploration"
              texte="La personne ne vient pas avec un fardeau à déposer. Elle vient avec une zone de sa vie qu'elle veut comprendre — sa relation à un parent défunt, son rapport à l'argent, son ambivalence sur un projet. La forme cartographie cette zone sans direction imposée."
            />
            <Mode
              nom="Futurisation"
              texte="La personne regarde devant. Elle a une décision à prendre, un cap à fixer, une vie à orienter. La forme inscrit cette fois une trace mnésique du futur — pas une visualisation positive, mais une véritable inscription neurale d'un état désiré."
            />
          </div>
        </div>
      </section>

      {/* === Protocole en 7 temps === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Protocole canonique</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Sept temps, dans cet ordre, sans saut.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gris-texte md:text-lg">
            La méthode se déploie selon un protocole canonique en sept
            temps, dans cet ordre précis, sans saut, sans inversion, sans
            omission.
          </p>
          <ol className="mt-12 space-y-8">
            <Temps
              numero="01"
              titre="Anamnèse étendue"
              texte="Quatre dimensions classiques (histoire du symptôme, histoire personnelle, histoire familiale, contexte présent) et une cinquième propre à la méthode — l'écologie de la décision. Premier passage écologique. Annonce du mode clinique."
            />
            <Temps
              numero="02"
              titre="Phase préhypnotique étendue"
              texte="Innovation doctrinale : 10-15 minutes au lieu de quelques minutes. Le praticien installe un état d'attention partagée qui n'est ni de la conversation ordinaire ni encore de l'hypnose."
            />
            <Temps
              numero="03"
              titre="Induction"
              texte="Cohérence cardiaque (six respirations par minute pendant trois à quatre minutes) qui installe l'état d'engagement social polyvagal, puis hypnose conversationnelle ericksonienne sans rupture."
            />
            <Temps
              numero="04"
              titre="Émergence de la forme spontanée"
              texte="Le praticien invite doucement la personne à laisser apparaître une forme. Règle absolue : la forme vient de la personne, jamais du praticien. Matérialisation à l'écran avec l'outil EndoFormia®."
            />
            <Temps
              numero="05"
              titre="Matérialisation et manipulation conjointe"
              texte="Cœur opératoire — 20-30 minutes pendant lesquelles la personne et le praticien manipulent ensemble la forme à l'écran, selon le mode clinique choisi. Co-manipulation : la personne garde le contrôle de l'intention, le praticien garde le contrôle du tempo."
            />
            <Temps
              numero="06"
              titre="Sortie écologique avec triple option"
              texte="Second passage écologique (la personne est désormais transformée). Trois options de sortie : la forme se dissipe, la forme se transforme et reste sous un visage apaisé, ou la forme s'éparpille définitivement par le rituel intégré du Grand Éparpillement."
            />
            <Temps
              numero="07"
              titre="Consolidation par la fiche-mémoire"
              texte="Document à dimension poétique produit en fin de séance qui consigne la forme convoquée, les mots-flèches gravés ensemble, et la phrase canonique de fermeture. Délivrance dans l'espace patient sécurisé avant la sortie du cabinet."
            />
          </ol>
        </div>
      </section>

      {/* === Triple posture === */}
      <section className="border-b border-gris-trait bg-encre">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-blanc-casse/60">La triple posture du praticien</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-blanc-casse md:text-4xl">
            Toute la méthode est portée par cette triple posture
            déontologique, inscrite dans le Pacte de Véracité que signe
            chaque praticien certifié.
          </h2>
          <div className="mt-12 grid gap-8 text-sm leading-relaxed text-blanc-casse/80 md:grid-cols-3">
            <div>
              <p className="text-bleu-clair font-semibold">Prendre soin sans soigner</p>
              <p className="mt-2">
                Nous prenons soin de la personne dans sa traversée intérieure.
                Mais aucune affection somatique, aucune pathologie
                médicalement reconnue ne se voit promettre une guérison.
              </p>
            </div>
            <div>
              <p className="text-bleu-clair font-semibold">Éclairer sans diagnostiquer</p>
              <p className="mt-2">
                Nous éclairons par le repérage clinique, nous orientons.
                Mais nous n&apos;établissons pas de diagnostic
                psychiatrique. Quand un signal médical apparaît, nous
                orientons vers un confrère habilité.
              </p>
            </div>
            <div>
              <p className="text-bleu-clair font-semibold">Accompagner sans prescrire</p>
              <p className="mt-2">
                Nous accompagnons par la présence thérapeutique, la voix
                calibrée, la co-manipulation de la forme. Mais aucun
                médicament, aucune indication thérapeutique formelle ne
                sort du cabinet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Pour aller plus loin === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24 text-center">
          <p className="meta text-bleu-federation">Pour aller plus loin</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Le livre fondateur et le site doctrinal international
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Pour le détail scientifique complet de la Neuromorphose®, sa
            filiation, ses références bibliographiques exhaustives, et le
            livre fondateur en français, anglais et espagnol, consultez
            le site doctrinal international de la méthode.
          </p>
          <a
            href="https://neuromorphose.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-encre bg-encre px-6 py-3 text-sm font-medium uppercase tracking-wider text-blanc-casse transition-colors hover:bg-blanc-casse hover:text-encre"
          >
            Visiter neuromorphose.com →
          </a>
        </div>
      </section>
    </article>
  );
}

function Lignee({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <div>
      <p className="text-3xl font-light text-bleu-federation">{numero}</p>
      <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function Mode({ nom, texte }: { nom: string; texte: string }) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <p className="meta text-bleu-federation">Mode</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-encre">{nom}</h3>
      <p className="mt-4 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function Temps({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <li className="flex gap-6">
      <p className="flex-shrink-0 text-3xl font-light text-bleu-federation">{numero}</p>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
        <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
      </div>
    </li>
  );
}
