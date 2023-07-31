// Importing React for lazy loading
import { LazyExoticComponent, Suspense, lazy } from "react";
// Importing block for higher order component
// with faster rendering times thanks to million
// import { block } from "million/react";
// Page components imports
const Navbar: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../components/Navbar")
);
import { Props } from "./../components/Footer";
const Footer: LazyExoticComponent<
  ({ fb_link, insta_link, lkd_link }: Props) => JSX.Element
> = lazy(() => import("../components/Footer"));

function LegalNotice(): JSX.Element {
  return (
    <>
      <div
        key={Math.random()}
        className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg"
      >
        <Suspense>
          <Navbar key={Math.random()} />
        </Suspense>
      </div>
      <div className="flex flex-col gap-4 mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-festa-dark-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center">
          <b>Mentions légales</b>
        </h1>
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Propriétaire du site web : </b>
          </h2>
          <ul>
            <li>
              <b>EI : </b> Thibault Le Pluart
            </li>
            <li>
              <b>Mail : </b> festalocal.app@gmail.com
            </li>
            <li>
              <b>Numéro de téléphone : </b> +33 06.13.93.40.30
            </li>
            <li>
              <b>Immatriculation : </b> 952 162 626 R.C.S. Vannes
            </li>
            <li>
              <b>Numéro d’identification à la TVA : </b>Entreprise non redevable
              à la TVA (Micro-entreprise)
            </li>
            <li>
              <b>Siège social : </b>2 RUE du Fety, 56000, Vannes
            </li>
            <li>
              <b>SIRET : </b>95216262600016
            </li>
          </ul>
          <p>
            <b>Activitée exercée : </b>Vente sur catalogue spécialisé. Vente de
            produits non alimentaires et non réglementés
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Hébergement du site web : 1</b>
          </h2>
          <p>
            Ce site est hébergé par la société Vercel.{" "}
            <a className="text-festa-light-blue" href="https://vercel.com/">
              https://vercel.com/
            </a>
            , dont le siège social est situé à San Francisco, California, 94133,
            US. La conception et le développement est assurée en interme par
            l’EI - festa local.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Description du site : </b>
          </h2>
          <p>
            Festa Local fourni sur le site{" "}
            <a
              className="text-festa-light-blue"
              href="https://www.festalocal.fr/"
            >
              https://www.festalocal.fr/"
            </a>{" "}
            des informations aussi précises que possible. Cependant, il ne
            pourra être tenue responsable des omissions, des inexactitudes et
            des carences dans la mise à jour, qu’elles soient de son fait ou du
            fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p className="mt-2">
            Toutes les informations indiquées sur le site
            <a
              className="text-festa-light-blue"
              href="https://www.festalocal.fr/"
            >
              https://www.festalocal.fr/"
            </a>{" "}
            sont données à titre indicatif, et sont susceptibles d’évoluer. Par
            ailleurs, les renseignements figurant sur le site
            <a
              className="text-festa-light-blue"
              href="https://www.festalocal.fr/"
            >
              https://www.festalocal.fr/"
            </a>{" "}
            ne sont pas exhaustifs. Ils sont donnés sous réserve de
            modifications ayant été apportées depuis leur mise en ligne.{" "}
          </p>
          <p className="mt-2">
            Le site{" "}
            <a
              className="text-festa-light-blue"
              href="https://www.festalocal.fr/"
            >
              https://www.festalocal.fr/"
            </a>
            ne pourra être tenu responsable de dommages matériels liés à
            l’utilisation du site. De plus l’utilisateur du site s’engage à
            accéder au site en utilisant un matériel conforme, ne contenant pas
            de virus et avec un navigateur de dernière génération mis-à-jour.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Propriété intellectuelle et contrefaçon : </b>
          </h2>
          <p>
            Festa Local est propriétaire des droits de propriété intellectuelle
            ou détient les droits d’usage sur tous les éléments accessibles sur
            le site, notamment les textes, images, graphismes, logo, icônes,
            sons, logiciels.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de : Festa Local et son fondateur Thibault Le Pluart
          </p>
          <p className="mt-2">
            Toute exploitation non autorisée du site ou de l’un quelconque des
            éléments qu’il contient sera considérée comme constitutive d’une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </section>
      </div>

      <Suspense>
        <Footer
          fb_link="https://www.facebook.com/profile.php?id=100087768589954"
          insta_link="https://www.instagram.com/festa.local/"
          lkd_link="https://www.linkedin.com/company/festa-local/"
        ></Footer>
      </Suspense>
    </>
  );
}

export default LegalNotice;
