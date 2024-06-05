import Head from "next/head";
import Image from "next/image";
import "../scss/pages.scss";
import Link from "next/link";
import kitten from "@/app/images/kittens-bloda.png";
import arrow5 from "@/app/images/Arrow5.svg";
import cities from "@/app/images/game-lost-cities.png";
import vecriga from "@/app/images/vecriga-nakts.png";
import arrow6 from "@/app/images/Arrow6.svg";

export default function Home() {
  return (
    <div className="container container-custom">
      <div className="heading-div">
        <h1 className="">Vecrīga</h1>
      </div>

      <div className="rest-of-content">
        <div className="row row-one">
          <div className="col-md-7">
            <p className="step-info">
              Vecrīgā ir lielākais ceļa posms, kas man no jāiet ar kājām -
              izbaudu.
            </p>
            <p>
              šis ir arī tas ceļa posms, kurā visvieglāk nožēlot nepaņemtu
              leitussargu - neizbaudu.
            </p>
            <p id="img-description">
              Attēls: &quot;Vecrīga naktī&quot;, Karīna Meldere, Rīga, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={vecriga}
                alt="Old Riga during the night"
                className="image img-fluid image-one"
              />
            </div>
          </div>
        </div>

        <div className="row row-two">
          <div className="board-game-info col-md-7">
            <h3 className="board-game-heading">
              <i>&quot;Lost Cities&quot;</i>
            </h3>
            <p>
              Šī spēle ir par piedzīvojumiem un ekspedīcijām, kas simbolizē
              vēsturiskās vietas un kultūras bagātības izpēti.
            </p>
            <p id="img-description">
              Attēls: &quot;Lost Cities&quot; galda spēle, Karīna Meldere,
              Jūrmala, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={cities}
                alt="Picture of the board game 'Exploding Kittens'"
                className="image img-fluid image-two"
              />
            </div>
          </div>
        </div>
        <div className="navigation-buttons row">
          <div className="col-7">
            <div className="nav-but button-prev">
              <Link href={"/IV"} className="link">
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
              <Link href={"/VI"} className="link">
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
