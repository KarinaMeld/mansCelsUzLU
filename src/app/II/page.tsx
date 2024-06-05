import Head from "next/head";
import Image from "next/image";
import "../scss/pages.scss";
import Link from "next/link";
import kitten from "@/app/images/kittens-bloda.png";
import monopols from "@/app/images/game-monopols.png";
import rearview from "@/app/images/rearview.png";
import arrow5 from "@/app/images/Arrow5.svg";
import arrow6 from "@/app/images/Arrow6.svg";

export default function Home() {
  return (
    <div className="container container-custom">
      <div className="heading-div">
        <h1 className="">starppilsētu sutobuss</h1>
      </div>

      <div className="rest-of-content">
        <div className="row row-one">
          <div className="col-md-7">
            <p className="step-info">
              mans rīts turpinās autobusā no Pierīgas pilsētiņas līdz Rīgai
            </p>
            <p>
              brauciens ilgs aptuveni stundu un šo laiku pavadu, lai pildītu
              iepriekš neizpildītus mājas darbus vai lasītu kādu grāmatu.
            </p>
            <p id="img-description">
              Attēls: &quot;kaķēni bļodā&quot;, Karīna Meldere, Vangaži, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={rearview}
                alt="Picture of a car rearview mirror"
                className="image img-fluid image-one"
              />
            </div>
          </div>
        </div>

        <div className="row row-two">
          <div className="board-game-info col-md-7">
            <h3 className="board-game-heading">
              <i>&quot;Monopols&quot;</i>
            </h3>
            <p>
              šī spēle atspoguļo ceļojuma ekonomisko aspektu, pārvaldot naudu un
              īpašumus. Starppilsētu autobuss salīdzināts ar monopolu, jo gluži
              kā monopolā tas kustās uz priekšu un, ja ieskaita arī atpakaļceļu,
              tad liekas kā pa apli.
            </p>
            <p>
              pa ceļam iespējams izpildīt iepriekš nesagatavotus mājas darbus un
              gala rezultātā vai nu paspēt vai arī “sēdēt cietumā” un rēķināties
              ar sekām.
            </p>
            <p id="img-description">
              Attēls: &quot;Monopols galda spēle&quot;, Karīna Meldere, Jūrmala,
              2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={monopols}
                alt="Picture of the board game 'Monopoly'"
                className="image img-fluid image-two"
              />
            </div>
          </div>
        </div>
        <div className="navigation-buttons row">
          <div className="col-7">
            <div className="nav-but button-prev">
              <Link href={"/"} className="link">
                <Image
                  src={arrow5}
                  alt="Arrow SVG"
                  className="arrow arrow-one img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-5">
            <div className="nav-but button-next">
              <Link href={"/"} className="link">
                <Image
                  src={arrow6}
                  alt="Arrow SVG"
                  className="arrow arrow-two img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
