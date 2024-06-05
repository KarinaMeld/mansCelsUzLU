import Head from "next/head";
import Image from "next/image";
import "../scss/pages.scss";
import Link from "next/link";
import kitten from "@/app/images/kittens-bloda.png";
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
              katrs mans rīts sākas &quot;mājās&quot;. kā es aprakstītu savas
              mājas? haoss. tīrākais haoss. šogad šo haosu vēl vairāk saasināja
              divu identiski pelēku kaķēnu uzrašanās.
            </p>
            <p>
              par viņu darbībām visvairāk informēta ir manas mammas mīļākā puķe.
              viņu dēļ tā bijusi spiesta mainīt puķu podu un atrašanās vietu nu
              jau trīs reizes (balstoties uz man piejamo informāciju
              05.06.2024.).
            </p>
            <p id="img-description">
              Attēls: &quot;kaķēni bļodā&quot;, Karīna Meldere, Vangaži, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={kitten}
                alt="Picture of kittens"
                className="image img-fluid image-one"
              />
            </div>
          </div>
        </div>

        <div className="row row-two">
          <div className="board-game-info col-md-7">
            <h3 className="board-game-heading">
              <i>&quot;Exploding kittens&quot;</i>
            </h3>
            <p>this is a longer explanation about the board game</p>
            <p id="img-description">
              Attēls: &quot;Exploding kittens board game&quot;, Karīna Meldere,
              Jūrmala, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={kitten}
                alt="Picture of the board game 'Exploding Kittens'"
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
