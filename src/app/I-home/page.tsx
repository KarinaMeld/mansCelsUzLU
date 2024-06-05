import Head from "next/head";
import Image from "next/image";
import pages from "../scss/pages.module.scss";

export default function Home() {
  return (
    <div className={pages.container}>
      <div className={pages.heading}>
        <title>mājas</title>
        <div className={pages.heading_line}></div>
      </div>

      <main className={pages.main}>
        <h1 className={pages.title}>starppilsētu autobuss</h1>

        <div className={pages.descriptionContainer}>
          <div className={pages.imageContainer}>
            <Image
              src="/path-to-image1.jpg"
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <p className={pages.description}>
            garāks posma apraksts - no kurienes uz kurieni tieši maršruta posms
            ved, kā arī aprakstīts tajā izmantotais transports
          </p>
        </div>

        <div className={pages.descriptionContainer}>
          <div className={pages.imageContainer}>
            <Image
              src="/path-to-image2.jpg"
              alt="Image 2"
              width={300}
              height={200}
            />
          </div>
          <p className={pages.description}>
            aprakstīta posmam izvēlētā galda spēle, tās noteikumi un kā tieši tā
            ir līdzīga attiecīgajam starpposmam.
          </p>
        </div>
      </main>

      <footer className={pages.footer}>
        <div className={pages.arrowLeft}></div>
        <div className={pages.arrowRight}></div>
      </footer>
    </div>
  );
}
