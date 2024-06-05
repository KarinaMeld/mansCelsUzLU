import Head from "next/head";
import Image from "next/image";
import "../scss/pages.scss";
import Link from "next/link";
import code from "@/app/images/coding.png";
import exit from "@/app/images/game-exit.png";
import arrow5 from "@/app/images/Arrow5.svg";
import arrow6 from "@/app/images/Arrow6.svg";

export default function Home() {
  return (
    <div className="container container-custom">
      <div className="heading-div">
        <h1 className="">universitāte</h1>
      </div>

      <div className="rest-of-content">
        <div className="row row-one">
          <div className="col-md-7">
            <p className="step-info">
              universitātē pavadu lielu savas dienas daļu.
            </p>
            <p>universitātse mājas darbus pildot, pavadu vēl vairāk laika.</p>
            <p id="img-description">
              Attēls: &quot;mājaslapas veidošana&quot;, Karīna Meldere, Jūrmala,
              2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={code}
                alt="Picture of this project code"
                className="image img-fluid image-one"
              />
            </div>
          </div>
        </div>

        <div className="row row-two">
          <div className="board-game-info col-md-7">
            <h3 className="board-game-heading">
              <i>&quot;Exit: Faraona Kapenes&quot;</i>
            </h3>
            <p>
              Šī spēle ir par mīklu risināšanu un izlaušanās istabām, kas
              simbolizē akadēmiskos izaicinājumus un intelektuālo attīstību.
              Gluži kā mācīties Datorikas fakultātē bakalaura studijās, arī šo
              spēli ir jēga spēlēt tikai vienreiz. Gala rezultātā tā ir
              “atkosta” un spēli var nodot tālāk citiem spēlētājiem.
            </p>
            <p id="img-description">
              Attēls: &quot;Exit: Faraona Kapenes&quot; galda spēle, Karīna
              Meldere, Jūrmala, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={exit}
                alt="Picture of the board game 'Exploding Kittens'"
                className="image img-fluid image-two"
              />
            </div>
          </div>
        </div>
        <div className="navigation-buttons row">
          <div className="col-7">
            <div className="nav-but button-prev">
              <Link href={"/V"} className="link">
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
