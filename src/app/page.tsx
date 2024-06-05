import Image from "next/image";
import React from "react";
import "./scss/landing.scss";
import allboardgames from "@/app/images/boardgame-pile.png";
import kittens from "@/app/images/kittens-bloda.png";
import rearview from "@/app/images/rearview.png";
import vecriga_nakts from "@/app/images/vecriga-nakts.png";
import night_bus from "@/app/images/bus.png";
import coding from "@/app/images/coding.png";
import brugis from "@/app/images/brugis.png";
import arrow1 from "@/app/images/Arrow1.svg";
import arrow2 from "@/app/images/Arrow2.svg";
import arrow3 from "@/app/images/Arrow3.svg";
import arrow4 from "@/app/images/Arrow4.svg";
import arrow5 from "@/app/images/Arrow5.svg";

const landing = () => {
  return (
    <div className="landing-page container container-xl">
      <div className="landing-hero">
        <h1 className="landing-heading">mans ceļš uz Latvijas Universitāti</h1>

        <div className="card-meow row">
          <div className="decorative-line first-line col align-self-center"></div>

          <div className="content  col align-self-center">
            <Image src={allboardgames} alt="Image" className="image" />
          </div>

          <div className="decorative-line second-line col align-self-center"></div>
        </div>
      </div>

      <div className="landing-steps">
        <div className="row">
          <div className="col-md-6">
            <h2>mājas</h2>
            <p>dienu sāku mājās ar diviem pustrakiem kaķēniem.</p>
            <p>viņi ir nelieli haosa mīļi.</p>
            <div className="d-flex justify-content-center">
              <Image
                src={arrow1}
                alt="Arrow SVG"
                className="arrow arrow-one img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <Image
                src={kittens}
                alt="Image"
                className="image image-one img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row row-flip">
          <div className="col-md-6">
            <h2>starppilsētu autobuss</h2>
            <p>universitātē nonāku, izmantojot starppilsētu autobusu.</p>
            <p>brauciens ir aptuveni stundu ilgs.</p>
            <div className="d-flex justify-content-center">
              <Image
                src={arrow2}
                alt="Arrow SVG"
                className="arrow arrow-two img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-start">
              <Image
                src={rearview}
                alt="Image"
                className="image image-two img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Teika</h2>
            <p>
              Teikā esmu tikai tik ilgi, lai noķertu nākamo transporta līdzekli.
            </p>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <Image
                src={brugis}
                alt="Image"
                className="image image-three img-fluid"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Image
              src={arrow3}
              alt="Arrow SVG"
              className="arrow arrow-three img-fluid"
            />
          </div>
        </div>

        <div className="row row-flip">
          <div className="col-md-6">
            <h2>tramvajs</h2>
            <p>1. tramvajs pārvietojas ātri</p>
            <div className="d-flex justify-content-center">
              <Image
                src={arrow4}
                alt="Arrow SVG"
                className="arrow arrow-four img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-start">
              <Image
                src={night_bus}
                alt="Image"
                className="image image-four img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>Vecrīga</h2>
            <p>
              no tramvaja ejot apmaldīties nav viegli, bet Vecrīgā kopumā...
            </p>

            <div className="d-flex justify-content-center">
              <Image
                src={arrow5}
                alt="Arrow SVG"
                className="arrow arrow-five img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <Image
                src={vecriga_nakts}
                alt="Image"
                className="image image-five img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row row-flip">
          <div className="col-md-6">
            <h2>universitāte</h2>
            <p>manā universitātes ēkā tāda vēstures piegarša</p>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-start">
              <Image
                src={coding}
                alt="Image"
                className="image image-six img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
