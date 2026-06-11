export const metadata = {
  title: "La fédération",
  description:
    "Association loi 1901 à vocation ordinale, la FFPN structure la profession émergente de praticien Neuromorphose® en France et dans les territoires francophones.",
};

export default function FederationPage() {
  return (
    <article>
      {/* === Hero === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-bleu-federation">La fédération</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.025em] text-encre md:text-5xl">
            Une institution naissante,
            <br />
            ses statuts, sa gouvernance.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-texte md:text-xl">
            La FFPN est une <strong className="text-encre">association
            loi 1901 à vocation ordinale</strong>. Constituée pour
            structurer la profession émergente de praticien Neuromorphose®
            en France et dans les territoires francophones, elle s&apos;inscrit
            dans la tradition française des fédérations professionnelles
            qui garantissent la qualité de leurs membres, la déontologie
            de la profession, et la protection du public.
          </p>
          <p className="mt-6 text-base leading-relaxed text-gris-texte">
            Elle est titulaire de la marque{" "}
            <em>« Praticien Neuromorphose® »</em>, du référentiel
            pédagogique de la formation certifiante, et du processus de
            certification. Elle a accordé une convention de licence
            d&apos;exploitation à Neuroactif Édition (filiale de la
            holding Ataraxis) qui développe et distribue commercialement
            la formation.
          </p>
        </div>
      </section>

      {/* === Quatre missions === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Statuts et missions</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Quatre missions structurent l&apos;action de la FFPN.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Mission
              numero="01"
              titre="Garantir la qualité de la formation"
              texte="Définition du référentiel pédagogique, validation des contenus, supervision du processus de certification, jury final."
            />
            <Mission
              numero="02"
              titre="Veiller à la déontologie"
              texte="Code de déontologie public, Pacte de Véracité signé par chaque praticien certifié, instance disciplinaire indépendante en cas de manquement."
            />
            <Mission
              numero="03"
              titre="Animer la communauté professionnelle"
              texte="Supervisions trimestrielles, compagnonnage entre pairs, congrès annuel, journées d'étude, revue éditoriale."
            />
            <Mission
              numero="04"
              titre="Représenter la profession"
              texte="Auprès des pouvoirs publics, des autres ordres professionnels, des médias, des institutions de santé, des fédérations sœurs en construction dans d'autres pays."
            />
          </div>
        </div>
      </section>

      {/* === Gouvernance === */}
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Gouvernance</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Quatre instances en cours de constitution
          </h2>
          <div className="mt-10 space-y-8">
            <Instance
              titre="Conseil d'administration"
              texte="Instance dirigeante de la fédération, composée de praticiens certifiés et de personnalités qualifiées extérieures (juristes, médecins, universitaires). Présidence assurée par le fondateur de la méthode lors de la phase de constitution."
            />
            <Instance
              titre="Comité scientifique"
              texte="Composé de cliniciens, chercheurs et universitaires qui valident la rigueur méthodologique des productions de la fédération, et veillent à la cohérence des évolutions doctrinales."
            />
            <Instance
              titre="Comité éthique"
              texte="Garant du respect des valeurs fondatrices de la méthode et de la profession — l'humain augmenté, la non-substitution de l'accompagnement à l'acte médical, la protection des publics fragiles."
            />
            <Instance
              titre="Instance disciplinaire indépendante"
              texte="Saisie en cas de manquement signalé. Composée à parité de praticiens certifiés et de personnalités qualifiées extérieures. Procédure contradictoire, sanctions graduées (avertissement, suspension temporaire, radiation définitive)."
            />
          </div>
        </div>
      </section>

      {/* === Fédérations sœurs === */}
      <section className="border-b border-gris-trait bg-gris-fond">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Fédérations sœurs internationales</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Une fédération par pays
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            La FFPN française est la première fédération nationale du
            réseau international en construction. Des fédérations sœurs
            sont en cours de constitution dans 19 autres pays cibles
            selon l&apos;écosystème Neuromorphose®, sur le pattern
            d&apos;une fédération par pays{" "}
            <em>(FBPN Belgique, FQPN Québec, FUPN États-Unis, etc.)</em>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gris-texte md:text-lg">
            Chaque fédération nationale exerce les mêmes missions sur son
            territoire, dans le cadre éthique commun défini par la
            doctrine internationale de la méthode et adapté aux
            spécificités juridiques de chaque pays.
          </p>
        </div>
      </section>

      {/* === Documents officiels === */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="meta text-bleu-federation">Documents officiels</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-encre md:text-4xl">
            Transparence institutionnelle
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gris-texte md:text-lg">
            Les statuts, le règlement intérieur, les procès-verbaux des
            assemblées générales et les comptes annuels seront publiés à
            partir de septembre 2026, lors de l&apos;assemblée générale
            constitutive. La FFPN publie également annuellement, à partir
            de sa deuxième année d&apos;existence, des statistiques
            publiques sur l&apos;activité de son instance disciplinaire.
          </p>
          <ul className="mt-10 space-y-3">
            <DocOfficiel titre="Statuts de l'association" hint="À publier après dépôt en préfecture (septembre 2026)" />
            <DocOfficiel titre="Règlement intérieur" hint="À publier après la 1re AG constitutive" />
            <DocOfficiel titre="Procès-verbaux des AG" hint="Publiés après chaque AG" />
            <DocOfficiel titre="Comptes annuels" hint="Publiés annuellement après approbation en AG" />
            <DocOfficiel titre="Rapport disciplinaire annuel" hint="Publié à partir de la 2e année d'existence" />
          </ul>
        </div>
      </section>
    </article>
  );
}

function Mission({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <div className="rounded-sm border border-gris-trait bg-blanc-casse p-6">
      <p className="text-3xl font-light text-bleu-federation">{numero}</p>
      <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function Instance({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="border-l-2 border-bleu-federation pl-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em] text-encre">{titre}</h3>
      <p className="mt-2 text-base leading-relaxed text-gris-texte">{texte}</p>
    </div>
  );
}

function DocOfficiel({ titre, hint }: { titre: string; hint: string }) {
  return (
    <li className="rounded-sm border border-gris-trait bg-blanc-casse p-4">
      <p className="font-medium text-encre">{titre}</p>
      <p className="mt-1 text-xs text-gris-texte">{hint}</p>
    </li>
  );
}
