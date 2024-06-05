import Head from "next/head";
import Image from "next/image";
import "../scss/pages.scss";
import Link from "next/link";
import erika from "@/app/images/erika.png";
import trains from "@/app/images/game-trains.png";
import arrow5 from "@/app/images/Arrow5.svg";
import arrow6 from "@/app/images/Arrow6.svg";

export default function Home() {
  return (
    <div className="container container-custom">
      <div className="heading-div">
        <h1 className="">tramvajs</h1>
      </div>

      <div className="rest-of-content">
        <div className="row row-one">
          <div className="col-md-7">
            <p className="step-info">
              tramajā pavadu krietnu laika posmu, aptuveni 35 minūtes katru rītu
              - ļoti atkarīgs no tā, cik necili brauc citi cilvēki pa Gaisa
              tiltu.
            </p>
            <p>
              tramvajā parasti vienkārši klausos mūziku vai lasu kaut ko
              iepriekš iesāktu.
            </p>
            <p id="img-description">
              Attēls: &quot;tramvajs&quot;, Karīna Meldere, Vangaži, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={erika}
                alt="Picture of a speeding transport"
                className="image img-fluid image-one"
              />
            </div>
          </div>
        </div>

        <div className="row row-two">
          <div className="board-game-info col-md-7">
            <h3 className="board-game-heading">
              <i>&quot;Game of Trains&quot;</i>
            </h3>
            <p>
              Šī spēle ir par vilcienu un to vagoniņu kārtošanu, kas simbolizē
              transporta sistēmas sarežģītību un koordināciju. Šī ir vēl viena
              spēle par transportu, kas gan neilgst tik ilgi kā monopols.
            </p>
            <p id="img-description">
              Attēls: &quot;Game of Trains&quot; galda spēle, Karīna Meldere,
              Jūrmala, 2024.
            </p>
          </div>
          <div className="col-md-5">
            <div className="vertical-line"></div>
            <div className="image d-flex justify-content-center">
              <Image
                src={trains}
                alt="Picture of the board game 'Game of Trains'"
                className="image img-fluid image-two"
              />
            </div>
          </div>
        </div>
        <div className="navigation-buttons row">
          <div className="col-7">
            <div className="nav-but button-prev">
              <Link href={"/III"} className="link">
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
              <Link href={"/V"} className="link">
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
