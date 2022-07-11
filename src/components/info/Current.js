import React, { Component } from "react";

// Styles
import "./../../assets/css/style.css";
import "./../../assets/css/custom.css";
import "./../../assets/css/login.css";
import "./../../assets/css/admin.css";
import "./../../assets/css/app.css";
import "./../../assets/css/main.css";

// Components
import OpacityImage from "./../common/OpacityImage";

// Images
const imageurl = "https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/";
const playneutralukraine = imageurl + "playneutral-ukraine.jpeg";
const wfs2022 = imageurl + "wfs2022.png";
const anticlines = imageurl + "anticlines.jpg";
const mgbg_babylona = imageurl + "mgbg-babylona.png";
const mgbg_babylonb = imageurl + "mgbg-babylonb.jpeg";
const fracas = imageurl + "fracas.png";
const xcoax = imageurl + "xcoax.jpg";
const DC2020 = imageurl + "discussion-concert-jan2020.jpg";
const superpang = imageurl + "superpang.jpg";
const cendres_sovn2 = imageurl + "cendres_sovn2.jpg";
const queue = imageurl + "queue.jpeg";
const sptour = imageurl + "sptour.jpeg";
const audiosphere = imageurl + "audiosphere.png";
const festival_ecoutes = imageurl + "festival-ecoutes.png";
const attn = imageurl + "attn.jpeg";
const smc2018 = imageurl + "smc2018.jpg";
const todaysart2018 = imageurl + "todaysart2018.jpg";
const fraislandi = imageurl + "fraislandi.jpg";
const arc_power = imageurl + "arc-power.jpg";
const hisolat_k7 = imageurl + "hisolat-k7.jpg";
const sonologyConcert12May2018 = imageurl + "SonologyConcert12May2018.jpg";
const azimuth_mgbg = imageurl + "azimuth-mgbg.jpeg";
const crucial = imageurl + "crucial.jpg";
const lectoraat = imageurl + "lectoraat.jpg";
const orpheus = imageurl + "bg-orpheus.jpg";
const rc = imageurl + "rc.jpg";
const SonologyConcert17October2018 =
  imageurl + "SonologyConcert17October2018.jpg";
const OrpheusMachine = imageurl + "orpheus-machines.jpeg";
const lueur1 = imageurl + "lueura.jpg";
const multiphonies = imageurl + "grm_multiphonies2019-20.jpg";
const Crxssings = imageurl + "CRXSSINGS.jpg";
const Rask2 = imageurl + "rask2poster2.jpg";
const Sonix = imageurl + "sonix.jpg";

class Current extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandcampStyle: {
        position: "relative",
        display: "block",
        width: "400px",
        height: "100px",
      },
      noBorder: {
        border: "0px",
      },
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <article>
            {" "}
            <div className="date">21-05-2022</div>
            <div className="hr">
              <hr />
            </div>
            <p>WFS Festival</p>
            <div className="img-center">
              <a href="http://sonology.org/" target="_blank">
                <OpacityImage imageUrl={wfs2022} />
              </a>
            </div>
            <p>
              The WFS festival will take place on 3 and 4 June 2022 in the New
              Music Lab at Sonology.{" "}
            </p>
            <p>
              Works will be performed by Ran Perry, Paolo Piaser. Anni Nöps, Ida
              Hirsenfelder, Henri Colombat, Suzana Lașcu, Otso Aho, Hugo Lioret,
              Margot Domart, Leslee Smucker, Casper Schipper, Bjarni Gunnarsson,
              Siamak Anvari, Lou Kim, Luca Faraldi, Alberto Tombolan and Kristin
              Norderval.
            </p>
            <p>My contribution is a new piece, 'Wildfires' (2022). </p>
            <p>
              'Based on the idea of distributed entities, 'Wildfires' questions
              virtual relationships between artificial sound sources. The piece
              consists of 22 generated scores that are activated in real-time
              but in no predefined order.'
            </p>
          </article>

          <article>
            {" "}
            <div className="date">06-05-2022</div>
            <div className="hr">
              <hr />
            </div>
            <p>Ukraine Appeal</p>
            <div className="img-center">
              <a href="https://playneutral.bandcamp.com/album/ukraine-appeal" target="_blank">
                <OpacityImage imageUrl={playneutralukraine} />
              </a>
            </div>
            <p>
        We’re all shocked by the tragic events in Ukraine and, following a conversation with Tom from Good Weather for an Airstrike, decided to ask artists if they would be able to contribute a track for a compilation to support the war victims in Ukraine.</p>
        <p>While this compilation is free, we’d like to encourage and invite you to give whatever you can.</p>
        <p>All money goes to the Red Cross Ukraine Crisis Appeal.y.{" "}</p>
        </article>

        <article>
            {" "}
            <div className="date">02-03-2022</div>
            <div className="hr">
              <hr />
            </div>
            <p>Radio New Babylon</p>
            <div className="col-lg-6">
            <div className="img-center">
              <a href="http://radionewbabylon.net" target="_blank">
                <OpacityImage imageUrl={mgbg_babylona} />
              </a>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="img-center">
              <a href="http://radionewbabylon.net" target="_blank">
                <OpacityImage imageUrl={mgbg_babylonb} />
              </a>
            </div>
            </div>
            <p>Radio New Babylon, initiated by Justin Bennett, is a collection of audio pieces by local and international artists made specifically to be listened to in and around the "New Babylon" office and apartment complex in Den Haag.</p>  <p>The artists and musicians were encouraged to think about the connections and discrepancies between the contemporary building and Constant Nieuwenhuys' visionary city of play. The pieces include ambient soundtracks, spoken-word podcasts, electronic experiments, field recordings from deep caves, reggae songs, insect songs, compositions for piano, organ, strings and percussion, instructions to the listener etc, etc.</p>
            <p>This is an ongoing project. So far, artists include Topp & Dubio, Fani Konstantinidou, David Helbich, Roel Meelkop, Johan Nystrom, Jad Saliba, Anthony Blokdijk, Flavien Gillié, Barbara Ellison, BMB con., Francisco Lopez, Hendrik Hohlfeld, Yota Morimoto, Scanner, Bjarni Gunnarsson, Marie Guilleray, Felix Kubin, Ji Youn Kang, Double-W and Section 28. The collection also includes two excerpts from Constant's own 1960's soundtracks for New Babylon.</p>
        </article>

          <article>
            {" "}
            <div className="date">29-11-2021</div>
            <div className="hr">
              <hr />
            </div>
            <p>Anticlines</p>
            <div className="row">
              <div className="col-lg-12">
                <div className="img-center">
                  <a href="https://bjarni.bandcamp.com" target="_blank">
                    <OpacityImage imageUrl={anticlines} />
                  </a>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="img-center">
                  <a href="https://bjarni.bandcamp.com" target="_blank">
                    <OpacityImage imageUrl={anticlines_blur} />
                  </a>
                </div>
              </div> */}


            </div>
            <p>
              'Anticlines' is released today on{" "}
              <a href="https://playneutral.bandcamp.com" target="_blank">
                {" "}
                Playneutral{" "}
              </a>
            </p>
            <p>
              Digital synthesis based on dynamic waveforms and atomic sound
              operations.
            </p>
            <p>
              Sound as behaviour, occurring through operations sequences and
              generative processes.
            </p>
            <p>
              <a href="https://bjarni.bandcamp.com" target="_blank">
                {" "}
                bjarni.bandcamp.com{" "}
              </a>
              <br />
            </p>
            <p>
              {" "}
              <a href="https://playneutral.bandcamp.com" target="_blank">
                {" "}
                playneutral.bandcamp.com{" "}
              </a>
            </p>
            <p>
              <a
                href="https://bjarni.bandcamp.com/album/anticlines"
                target="_blank"
              >
                {" "}
                bjarni.bandcamp.com/album/anticlines{" "}
              </a>
            </p>
            <p></p>
          </article>

          <article>
            {" "}
            <div className="date">15-11-2021</div>
            <div className="hr">
              <hr />
            </div>
            <p>Fracas</p>
            <div className="img-center">
              <a
                href="https://bjarni.bandcamp.com/album/fracas"
                target="_blank"
              >
                <OpacityImage imageUrl={fracas} />
              </a>
            </div>
            <p>
              'Fracas' is released today on{" "}
              <a href="https://superpang.bandcamp.com" target="_blank">
                {" "}
                Superpang{" "}
              </a>
            </p>
            <p>
              A 17-minute recorded improvisation and released as part of
              Superpang's a new series of exclusive one-off live sessions by
              members of their roster celebrating their 100th release.
            </p>
            <p>
              <a href="https://bjarni.bandcamp.com" target="_blank">
                {" "}
                bjarni.bandcamp.com{" "}
              </a>
              <br />
            </p>
            <p>
              {" "}
              <a href="https://superpang.bandcamp.com" target="_blank">
                {" "}
                superpang.bandcamp.com{" "}
              </a>
            </p>
            <p>
              <a
                href="https://bjarni.bandcamp.com/album/fracas"
                target="_blank"
              >
                {" "}
                bjarni.bandcamp.com/album/fracas{" "}
              </a>
            </p>
            <p></p>
          </article>

          <article>
            {" "}
            <div className="date">16-07-2021</div>
            <div className="hr">
              <hr />
            </div>
            <p>'Synthesis and Operation Flows' at xCoaX 2021.</p>
            <div className="img-center-noborder">
              <a href="https://2021.xcoax.org/#program">
                <OpacityImage imageUrl={xcoax} />
              </a>
            </div>
            <p>
              <strong>xCoAx 2021</strong> takes place this week exploring "the
              frontiers of digital art with a multidisciplinary investigation on
              aesthetics, computing, communication and the elusive X factor that
              connects them all."
              <a href="https://2021.xcoax.org/#program" target="_blank">
                {" "}
                xCoaX 2021{" "}
              </a>
            </p>
            <p>
              <strong>xCoAx 2021</strong> goes hybrid in Graz, Austria and is
              open and free to everyone online. I'm presenting my paper
              'Synthesis and Operation Flows' on the 16.07 at 14:00.
              <a href="https://2021.xcoax.org/papers2" target="_blank">
                {" "}
                Paper session 2{" "}
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=mIpAZS3bbPw"
                target="_blank"
              >
                {" "}
                Presentation{" "}
              </a>
            </p>
            <p>
              <a
                href="https://soundcloud.com/bjarni/sets/research"
                target="_blank"
              >
                {" "}
                Sounds{" "}
              </a>
            </p>
            <p>
              <a href="https://github.com/bjarnig/OF" target="_blank">
                {" "}
                Code{" "}
              </a>
            </p>
            <p>
              <a
                href="https://www.academia.edu/50027204/Synthesis_and_Operation_Flows"
                target="_blank"
              >
                {" "}
                Paper{" "}
              </a>
            </p>
          </article>

          <article>
            {" "}
            <div className="date">12-06-2021</div>
            <div className="hr">
              <hr />
            </div>
            <p>
              <a
                href="https://superpang.bandcamp.com/album/tour-mode"
                target="_blank"
              >
                FIFO
              </a>{" "}
              on 'Music for queuing at the supermarket'
            </p>
            <div className="img-center">
              <a
                href="https://sovnrecords.bandcamp.com/album/music-for-queuing-at-the-supermarket"
                target="_blank"
              >
                <OpacityImage imageUrl={queue} />
              </a>
            </div>
            <p>
              Celebrating their 30th release SØVN releases the compilation
              'Music for queuing at the supermarket'.{" "}
            </p>
            <p>It includes my piece 'FIFO'.</p>
            <p>
              <a
                href="https://sovnrecords.bandcamp.com/album/music-for-queuing-at-the-supermarket"
                target="_blank"
              >
                {" "}
                Music for queuing at the supermarket{" "}
              </a>
            </p>
            <p></p>
          </article>

          <article>
            {" "}
            <div className="date">01-01-2021</div>
            <div className="hr">
              <hr />
            </div>
            <p>
              Tour Mode on{" "}
              <a
                href="https://superpang.bandcamp.com/album/tour-mode"
                target="_blank"
              >
                Superpang
              </a>
            </p>
            <div className="img-center">
              <a
                href="https://superpang.bandcamp.com/album/tour-mode"
                target="_blank"
              >
                <OpacityImage imageUrl={sptour} />
              </a>
            </div>
            <p>
              The SUPERPANG compilation is out with a whole bunch of new music
              including my piece{" "}
              <a
                href="https://superpang.bandcamp.com/track/crest"
                target="_blank"
              >
                {" "}
                Crest{" "}
              </a>
            </p>
            <p>
              <a
                href="https://superpang.bandcamp.com/album/tour-mode"
                target="_blank"
              >
                {" "}
                https://superpang.bandcamp.com/album/tour-mode{" "}
              </a>
            </p>
          </article>

          <article>
            {" "}
            <div className="date">06-12-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>Festival Ecoutes</p>
            <div className="img-center">
              <a href="http://festivalecoute.org/">
                <OpacityImage imageUrl={festival_ecoutes} />
              </a>
            </div>
            <p>
              Binaural pieces will be featured in{" "}
              <a href="http://festivalecoute.org/">Festival Ecoute</a> including
              l'Imaginaire du parleur by me and Marie Guilleray. The binaural
              mix has been skillfully created by{" "}
              <a href="http://keestazelaar.com/"> Kees Tazelaar</a>. Many thanks
              for the effort.{" "}
            </p>
            <p>
              About the festival: Après l’intense alchimie d’écoute(s) diffusée
              hier soir sur les ondes, le Festival Ecoute.s. se poursuit cet
              après-midi avec une riche programmation de documentaires sonores.
              Sur le site internet du festival vous retrouverez également des
              podcasts et des contenus annexes, dont « Mondes Fragmentés », la
              sélection de pièces électroacoustiques en version binaurale que
              j’ai concoctée en complicité avec A P N É E S.
            </p>
            <p>Here on Soundcloud:</p>
            <p>
              <iframe
                width="100%"
                height="180"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/821805625&color=%234c4655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </p>
          </article>

          <article>
            <div className="date">06-11-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>'Cendres' on SØVN Records</p>
            <div className="img-center">
              <a href="https://sovnrecords.bandcamp.com/album/cendres">
                <OpacityImage imageUrl={cendres_sovn2} />
              </a>
            </div>

            <p>
              {" "}
              Released on the 18th of November.{" "}
              <a href="https://sovnrecords.bandcamp.com/album/cendres">
                {" "}
                Order here{" "}
              </a>
            </p>
            <p>
              Cendres consists of two electroacoustic compositions that have
              been performed in a multichannel setting: respectively, on the
              Acousmonium at GRM's Sonology concert in Paris in October 2019,
              and at the Institute of Sonology in The Hague in June 2018.{" "}
            </p>
            <p>
              Reworked here and extended in duration while reduced to a stereo
              format.
            </p>
          </article>

          <article>
            {" "}
            <div className="date">14-10-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>Audiosfera 1980-2020</p>
            <div className="img-center">
              <a href="https://www.museoreinasofia.es/en/exhibitions/audiosphere?fbclid=IwAR1zjs351-j-vaGF8GDuCTAcj1i2WZAg8OptU8lzyVtG1cFScyQc3OeFyxw">
                <OpacityImage imageUrl={audiosphere} />
              </a>
            </div>
            <p>
              <a href="https://www.museoreinasofia.es/en/exhibitions/audiosphere?fbclid=IwAR1zjs351-j-vaGF8GDuCTAcj1i2WZAg8OptU8lzyVtG1cFScyQc3OeFyxw">
                Audiosfera 1980-2020
              </a>{" "}
              is happening now in Museo Reina Sofía Madrid, Spain. Curated by
              Francisco Lopez. Many soundworks are featured including my piece
              'Fingrafjall'.
            </p>
          </article>

          <article>
            {" "}
            <div className="date">18-09-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>Volume & Void</p>
            <div className="img-center">
              <OpacityImage imageUrl={superpang} />
            </div>
            <p></p>
            <p>
              {" "}
              New release out on{" "}
              <a href="https://superpang.bandcamp.com/album/volume-void">
                {" "}
                Superpang{" "}
              </a>
            </p>
            <p>
              Composed through experimental scheduling algorithms that explore
              the duality of immediate, direct events with gradual and evolving
              processes.
              <br />
              <br />
              System and sounds created during the summer of 2020 in
              Scheveningen, The Hague.
              <br />
              <br />
              Design: Joe Gilmore
            </p>
          </article>

          <article>
            {" "}
            <div className="date">18-09-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>ATTN Compilation</p>
            <div className="img-center">
              <a href="https://attnspancompilation.bandcamp.com/album/attn-span">
                <OpacityImage imageUrl={attn} />
              </a>
            </div>
            <p></p>
            <p>
              {" "}
              New track on{" "}
              <a href="https://attnspancompilation.bandcamp.com/album/attn-span">
                {" "}
                ATTN{" "}
              </a>
            </p>
            <p>
              ATTN:SPAN compilation is out on Bandcamp. Every penny will be
              going to the charity Cool Earth, which works with local people to
              halt deforestation and climate change.
            </p>
          </article>

          <article>
            {" "}
            <div className="date">06-03-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>LKS</p>
            <p>
              <iframe
                width="100%"
                height="120"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbjarnig%2Fcyclic-executive%2F"
                frameborder="0"
              ></iframe>
            </p>
            <p> Mix / Music selection made for LKS podcast.</p>
          </article>

          <article>
            {" "}
            <div className="date">21-02-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>Sonix #9</p>
            <div className="img-center">
              <OpacityImage imageUrl={Sonix} />
            </div>
            <p>
              Ji Youn Kang (KR/NL)
              <br />
              Bjarni Gunnarson (IS/NL)
              <br />
              Amen Tma (SK)
              <br />
              Panáčik (SK/CZ)
              <br />
              Ramin Kuliev (AZ/CZ)
              <br />
              Rudolf Růžička (CZ)
              <br />
            </p>
            <p>
              Darkness and deep listening - an evening of international
              electroacoustic music working with both rich sound spectra and
              space, will present new compositions by composers from the
              Institute of Sonology (The Hague, NL), JAMU (Brno, CZ) and the
              surrounding area. The concert will be performed in darkness in 8
              channel surround sound. Dramaturgy and organization: Jiří
              Suchánek. Brno, Czech Republic.
            </p>
            <p>
              <a href="https://www.facebook.com/events/615517735902652/">
                {" "}
                Sonix #9{" "}
              </a>
            </p>
          </article>

          <article>
            {" "}
            <div className="date">29-01-2020</div>
            <div className="hr">
              <hr />
            </div>
            <p>Discussion Concert #3</p>
            <div className="img-center">
              <OpacityImage imageUrl={DC2020} />
            </div>
            <p>
              The third Sonology Discussion Concert of the Academic Year
              2019–2020 with participants from Czech Republic, Italy, Iran,
              Iceland, Germany and Syria.
            </p>
            <p>The concert will start at 19:30, please be on time.</p>
            <p>As usual, entrance and drinks are free.</p>
            <p>
              May we also have your attention for the Royal Conservatoire’s
              annual Open Day, which takes place on Saturday 25 January 2020
              from 10:00 until 17:30. Sonology’s studios will be open from 11
              and there is a Sonology concert presentation at 16:00. Please pass
              by when you are interested in one of our educational programmes or
              just would like to see what is going on in the studios.
            </p>
            <p>
              Last but not least: have a look at our new website
              www.sonology.org, which has a lot of additional information,
              including a calendar.
            </p>
            <p>
              <a href="http://www.sonology.org/"> sonology.org </a>
            </p>
          </article>

          <article>
            <div className="date">28-12-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>RASK #2</p>
            <div className="img-center">
              <OpacityImage imageUrl={Rask2} />
            </div>
            <p>
              RASK #2 is the second edition of event series promoting new media
              art and experimentation in Reykjavik. It is organised by a
              collective of young Icelandic artists working in the intersection
              of art and technology.{" "}
            </p>
            <p>
              EXHIBITION IN INGÓLFSSTRÆTI 6 - 14:00 - 19:00
              <br />
              Ásdís Birna Gylfadóttir & Ragnheiður Erla
              <br />
              Hákon Bragason
              <br />
              Logi Leó Gunnarsson
              <br />
              María Guðjohnsen
              <br />
              Rúnar Örn Marinósson
              <br />
              Kristín Helga Ríkharðsdóttir
            </p>

            <p>
              CODE CAFÉ AT LOFT HOSTEL - 15:00 - 17:00
              <br />
              Snæi Jack
              <br />
              Hexia (Ólöf Rún Benediktsdóttir)
              <br />
              Bjarni Gunnarsson
            </p>

            <p>
              LIVE PERFORMANCES IN MENGI - 19:30 - 22:30
              <br />
              Doors open 19:30, performances start at 20:00:
              <br />
              Kaðlín Sara Ólafsdóttir
              <br />
              Halldór Eldjárn & Sól Ey
              <br />
              Höskuldur Eiríksson & Ingibjörg Friðriksdóttir
              <br />
              Bjarni Gunnarsson & Marie Guilleray
            </p>
            <p>
              <a href="https://www.facebook.com/events/441285456536290/">
                {" "}
                Rask #2{" "}
              </a>
            </p>
          </article>
          <article>
            <div className="date">18-10-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>
              Akousma 18 Octobre 2019 / Mpaa Saint-germain. Sonologie @ GRM.
            </p>
            <div className="img-center">
              <OpacityImage imageUrl={multiphonies} />
            </div>
            <p>Concert Institut de Sonologie de La Haye</p>
            <p>
              L’Institut de Sonologie adopte une position claire concernant
              l’utilisation de la technologie en musique : la technologie n’est
              pas simplement un complément à la pratique musicale existante,
              mais doit être principalement utilisée pour explorer de nouvelles
              formes de composition et de présentation publique de la musique et
              de l’art. En même temps, la sonologie n’est liée à aucun dogme
              stylistique.
            </p>

            <p>
              <a href="https://inagrm.com/fr/showcase/open-agenda/3980622">
                {" "}
                Akousma{" "}
              </a>
            </p>
          </article>
          <article>
            <div className="date">01-07-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>CRXSSINGS (fundraiser for City Plaza)</p>
            <div className="img-center">
              <OpacityImage imageUrl={Crxssings} />
            </div>
            <p>
              CRXSSINGS is a compilation remix album as a fundraiser for Refugee
              Accommodation and Solidarity Space City Plaza. Almost four hours
              of music, with 34 artists, remixing each others tracks. It
              contains my rework of BJ Nilsen and his of mine.
            </p>
            <p>
              'Mass migration is one of the most pressing humanitarian and
              political topics we face today. Rutger Zuydervelt (a.k.a
              Machinefabriek) and Gabriel Saloman of Yellow Swans initiated the
              compilation CRXSSINGS as a means to support migrants and refugees
              in Europe. They called upon friends and colleagues from Europe,
              North America and Australia to get involved, the conceptual idea
              being that duos of two artists would collaborate and donate their
              exclusive tracks for CRXSSINGS.'
            </p>
            <p>
              'CRXSSINGS will be released digitally on July 1 via a special
              Bandcamp account for a donation of 10 €. All the funds generated
              will be donated to City Plaza Hotel, a squatted refuge in the
              heart of Athens, Greece organized for and by migrants from Africa
              and Asia, which was covered by The Guardian back in 2017.'
            </p>
            <p>
              <a href="https://crxssings.bandcamp.coms">
                {" "}
                https://crxssings.bandcamp.com{" "}
              </a>
            </p>
          </article>
          <article>
            <div className="date">22-05-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>Music, Humans and Machines (ODC 2019)</p>
            <div className="img-center">
              <OpacityImage imageUrl={OrpheusMachine} />
            </div>
            <p>
              'This conference explores musician’s long relationship with their
              instruments and instrumentalities, questioning issues of autonomy
              and agency in the apparent dichotomy between tools and musical
              expression.'
            </p>
            <p>
              'From the "mechane" of Greek theatres from which gods were
              suspended, to Mozart’s description of the Stein fortepiano’s
              knee-lever as “Die Maschine”, to the epoch-defining technologies
              of recording, sound synthesis, and algorithmic composition of more
              recent times, performers and composers have relied on mechanical
              means to create magic in their art.'
            </p>
            <p>
              I will perform a new piece:{" "}
              <strong>Translation, traces and intervention</strong>
            </p>
            <p>
              'Technical autonomy usually depends on abstraction or attempts to
              generalize behavior. Generalizing often involves a translation, a
              mapping between different modes of representations in order to
              simplify or combine. However, processes of abstraction can
              distantiate agency from its origin, sometimes introducing a
              by-product “a remainder, a set of discarded information—the
              différance, or the crucial distinction and deferral of meaning
              that goes on between the map and the territory. In ‘Translation,
              traces and intervention’ the idea is to explore the boundary of
              software abstractions and direct access to computer sound
              synthesis.'
            </p>
            <p>
              <a href="https://orpheusinstituut.be/en/news-and-events/music-humans-and-machines">
                {" "}
                Music, Humans and Machines (ODC 2019)
              </a>
            </p>
          </article>
          <article>
            <div className="date">13-04-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>
              Inspired by immersive artificial worlds, the idea of a Synthetic
              Environment refers to generated (usually quite detailed)
              surroundings or spaces of virtual worlds. Example of current work,
              now on Vimeo.
            </p>

            <p>
              <iframe
                src="https://player.vimeo.com/video/325550871?color=F27059&title=0&byline=0&portrait=0"
                width="100%"
                height="500"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </p>
            <p>
              The path one navigates within the environment determines the
              resulting algorithm of the produced sound. Such an environment
              functions as a map of the compositional space but also as a medium
              to continue interaction with generative activity.
            </p>
          </article>
          <article>
            <div className="date">21-03-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>
              Simulation and Computer Experimentation in Music and Sound Art
            </p>
            <div className="img-center">
              <OpacityImage imageUrl={orpheus} />
            </div>
            <p>
              'The seminar aims to bring together practitioners and scholars to
              discuss the wide-reaching implications of the ‘agential cut’
              (Barad) or ‘ontic cut’ (Rheinberger) – the separation between
              operationalised model or abstract theory and perceived or
              experimentally verified ‘reality’, the fissure already indicated
              by Husserl and realised in experimental computational systems.'
            </p>
            <p>
              These introduce a new type of interface between the machinery and
              what is implemented, allowing for the ongoing production of new
              data and going beyond the traditional atemporal theoretical
              models; crucially, simulations also allow new and mobile
              perspectives onto the ‘object’ modelled by tracing contingent,
              situated, multiple paths through what DeLanda describes as ‘a
              space of possibilities’ – alternative realities within a space
              that displays stability or consistency at another level. In
              Rheinberger’s words ‘it becomes urgent to ask whether computer
              simulations represent a new category of epistemic object
              altogether.’
            </p>
            <p>
              I will present my project 'Synthetic environments and
              compositional context'
            </p>
            <p>
              <a href="https://orpheusinstituut.be/en/news-and-events/simulation-and-computer-experimentation-in-music-and-sound-art">
                Simulation and Computer Experimentation in Music and Sound Art
              </a>
            </p>
          </article>
          <article>
            <div className="date">15-02-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>Publications on the Research Catalogue</p>
            <div className="img-center">
              <OpacityImage imageUrl={rc} />
            </div>
            <p>
              '... issues of algorithms, agency, proximity, context and the
              becoming of sound processes. It questions the scope and potential
              boundaries of an algorithm, the creative space relating
              compositional practice with computers and the idea of an
              algorithmic environment.'
            </p>
            <p>
              <a href="https://www.researchcatalogue.net/view/540350/540351">
                Context and Scope
              </a>
            </p>
            <p>
              '... how to represent a generative algorithm as distributed
              (open), with multiple entry points instead of being closed and
              result-oriented only. How to introduce dynamic modifications of
              goals (or heuristics) as a creative interaction mode or how the
              attitude of evolving criteria (variable intentions) can be made
              audible through the characteristics of the corresponding sound
              processes.'
            </p>
            <p>
              <a href="https://www.researchcatalogue.net/view/543155/543156">
                Interrupts and Intervention
              </a>
            </p>
          </article>
          <article>
            <div className="date">25-01-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>Lectorate Music, Education and Society - Festive Presentation</p>
            <div className="img-center">
              <OpacityImage imageUrl={lectoraat} />
            </div>
            <p>
              On 25 January, the Music, Education and Society lectorate, under
              the direction of lector Paul Craenen, will present its plans for
              the coming year. From the research group, three new research
              groups set to work with themes such as "Building Blocks of Musical
              Training", "Making in Music" and "Musical Curation and
              Engagement". They discuss their research plans and engage in
              dialogue with each other and the public.
            </p>
            <p>
              The event is also a closure for the research group of the past
              year. In short artistic interventions and a social interview, Joe
              Puglia (violin), Petra Somlai (fortepiano), Raviv Ganchrow
              (sonology), Patrick van Deurzen (music theory) and Bjarni
              Gunnarsson (sonology) will explain what research has done for
              their artistic practice. There is also a small exhibition in which
              the completed projects can be viewed at the Research Catalog.
            </p>
            <p>
              <a href="https://www.koncon.nl/agenda/lectorate-event">
                Royal Conservatory, The Hague
              </a>
            </p>
          </article>
          <article>
            <div className="date">15-01-2019</div>
            <div className="hr">
              <hr />
            </div>
            <p>ATTN, Crucial Listening interview</p>
            <div className="img-center">
              <OpacityImage imageUrl={crucial} />
            </div>
            <p>Discussion with Jack Chuter on ATTN Magazine</p>
            <p>
              'Energetic phenomena, Romanian spectral music, hidden pulsations.
              The Icelandic composer talks about three important albums.'
              <div>&nbsp;</div>
              <a href="https://www.attnmagazine.co.uk/features/13718">
                ATTN Magazine
              </a>
            </p>
          </article>
          <article>
            <div className="date">26-11-2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>New LP, Lueur released by Tartaruga records</p>
            <div className="img-center">
              <OpacityImage imageUrl={lueur1} />
            </div>
            <p>
              Lueur consists of four electroacoustic compositions; the product
              of unfolding and unpredictable generative processes spread across
              38 minutes. An exploration of process as much as tone and texture,
              the album takes shape through a series of ever-changing movements,
              interweaving dense low passages and abrupt changes of atmosphere
              and sound.
            </p>
            <p>
              <a href="https://www.tartaruga.co.uk/">Tartaruga publishing</a>
            </p>
          </article>
          <article>
            <div className="date">17-10-2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Sonology Concert 17 October 2018, Arnold Schoenbergzaal</p>
            <div className="img-center">
              <OpacityImage imageUrl={SonologyConcert17October2018} />
            </div>
            <p>Discussion Concert 1</p>
            <p>
              The concert will feature multi-channel fixed-media pieces by Laura
              Agnusdei, Marie Guilleray & Bjarni Gunnarsson, Cort Lippe and Kees
              Tazelaar. There will be a live performance by Instruments &
              Interfaces students Görkem Arikan and Slavo Krekovic, and an
              improvised music session with the Sonology Electroacoustic
              Ensemble.
            </p>
          </article>
          <article>
            <div className="date">21-09-2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Today's Art 2018</p>
            <div className="img-center">
              <OpacityImage imageUrl={todaysart2018} />
            </div>
            <p>
              Presenting a new live set as part of the great Azimuth program at
              TodaysArt 2018 next week.
              <div>&nbsp;</div>
              <a href="http://todaysart.nl/2018">Today's Art.</a>
            </p>
            <p>
              From a festival organization to an international platform for
              trans-disciplinary creativity: ever since the launch of its first
              edition in 2005, TodaysArt has been bringing artists, thinkers,
              and audiences together in an ever-changing, yet inspiring setting.
              <br />
              <br />
              Inspired by relevant political and artistic topics, TodaysArt
              aspires to promote and foster innovation and creativity as well as
              public interest for current developments within arts, culture, and
              society.
              <br />
              <br />
              The network specializes in the presentation and development of
              emerging digital culture and contemporary visual and performing
              arts. By doing so, TodaysArt connects local and international
              talent to established creators and pioneers to collectively
              explore new possibilities and forms of expression. The festival is
              known for its surprising settings: every year, the festival
              travels through the city of The Hague before temporarily finding
              its niche in a wide array of unconventional public spaces and
              venues.
              <br />
            </p>
          </article>
          <article>
            <div className="date">04-07.07.2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Sound and Music Computing 2018</p>
            <div className="img-center">
              <OpacityImage imageUrl={smc2018} />
            </div>
            <p>
              Presenting a poster (Block-based scheduling through interrupts and
              intervention) + piece (Prisme), at the Sound and Music Computing
              2018.
              <div>&nbsp;</div>
              <a href="http://smc2018.cut.ac.cy/">SMC2018.</a>
            </p>
            <p>
              The theme of the conference focuses on researching different
              approaches of computer music and interactive music systems and
              monitoring the impact of technology on composition, performance,
              musicology and education through a discussion around the wide
              concept of 'crossings'. A special focus will be given to sonic
              crossings in our mind, in our close environment, in our society,
              in our natural soundscape and in our imaginary landscapes of the
              ocean and the space searching the dream of the Varesian "deserts".{" "}
              <br /> <br /> A special tribute to commemorate the thirtieth year
              since the passing of Giacinto Scelsi, a composer who embodies the
              fluid border between sound and music, is also planned. Other areas
              of focus will be soundscape aesthetics, sound borders - which
              always broaden through technology - biotechnology issues, ethics
              of sound and music, virtual spatialisation and cultural heritage.
            </p>
          </article>
          <article>
            <div className="date">07.07.2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Frá Íslandi/ From Iceland/Uit IJsland</p>
            <div className="img-center">
              <OpacityImage imageUrl={fraislandi} />
            </div>
            <p>
              Participating in SCHIJNDEL - Frá Íslandi (From Iceland) a
              collective exhibition that opens on Saturday, July 4 in the KEG
              exhibition space in't Spectrum in Schijndelwas.
              <div>&nbsp;</div>
              <a href="https://www.kegschijndel.nl/">kegschijndel.nl.</a>
            </p>
            <p>
              Onder internationale kenners genieten IJslandse schrijvers,
              muzikanten, schilders en beeldhouwers grote faam – al zal die vaak
              het Europese publiek niet bereiken. Maar vanaf 7 juli hoeft u niet
              naar het afgelegen eiland om hun kunst te ontdekken - hedendaagse
              beeldende kunst uit IJsland is dan gewoon in de Keg Expo in
              Schijndel te zien.
            </p>
          </article>
          <article>
            <div className="date">02.07.2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>ARC kickoff event</p>
            <div className="img-center">
              <OpacityImage imageUrl={arc_power} />
            </div>
            <p>
              Presenting and performing live ('Command and Autonomy') at the{" "}
              <a href="https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach">
                {" "}
                ARC{" "}
              </a>{" "}
              (art_research_convergence) kick-off of the season 2018 (July 2,
              2018).
              <a href="http://smc2018.cut.ac.cy/">ARC.</a>
            </p>
            <p>
              P O W E R is the ability to act and have others act in particular
              ways. Now, since acting and causing others to act is precisely
              what puts society in motion, then social life must be about power
              too, that is, about acting in relation to one another. But is
              there anyone behind the wheel? Who are the players in the network
              of power that keeps the world turning? Different versions of these
              questions are explored by the artists-researchers featuring in
              this ARC session, the first one of the season 2018.
            </p>
            <p>
              Ingrid Verweijen- Audition Audition- performance
              <br />
              Lucy Cordes Engelman -Heresy of the free spirit- performative
              lecture
              <br />
              Bjarni Gunnarsson - Command and Autonomy - Algorithmic composition
              <br />
              GVN908- Guardians of Peace- performance
              <br />
            </p>
            <p>
              <a href="https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach/">
                https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach{" "}
              </a>
            </p>
          </article>
          <article>
            <div className="date">05.06.2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Hisolat - Various Artists One</p>
            <div className="img-center">
              <OpacityImage imageUrl={hisolat_k7} />
            </div>
            <p>
              <a href="https://hisolat.bandcamp.com/album/various-artists-one-2">
                'Various Artists One'
              </a>{" "}
              out now on Hisolat as Cassette + Digital Album, with Lea Bertucci,
              Kyle Eyre Clyd, Bjarni Gunnarsson, Marie Guilleray, David Fyans,
              Sayaka Botanic.
              <div>&nbsp;</div>
              <a href="https://hisolat.bandcamp.com/album/various-artists-one-2">
                https://hisolat.bandcamp.com/album/various-artists-one-2
              </a>
            </p>
            <p>
              <p>
                1. Lea Bertucci, Kyle Eyre Clyd 11:54
                <br />
                2. Bjarni Gunnarsson 16:24
                <br />
                3. Marie Guilleray 09:12
                <br />
                4. David Fyans 30:00
                <br />
                5. Sayaka Botanic 07:28
                <br />
              </p>
            </p>
          </article>
          <article>
            <div className="date">12.05.2018</div>
            <div className="hr">
              <hr />
            </div>
            <p>Sonology Discussion Concert 5</p>
            <div className="img-center">
              <OpacityImage imageUrl={sonologyConcert12May2018} />
            </div>
            <p>
              It is our pleasure to invite you for another Sonology Discussion
              Concert. This concert will feature our third Konrad Boehmer
              Visiting Professor Nicholas Collins, who will perform a solo work
              and will collaborate with the Sonology Electroacoustic Ensemble.
              Doors are open at 19:15, the concert starts at 19:30.
              <a href="http://www.sonology.org">www.sonology.org.</a>
            </p>
            <p>
              <p>I will diffuse a new piece 'Polytree' (2018)</p>
              <p>
                "Sound processes can be defined by the composition of relations
                and interconnected parts, where many levels form a greater
                coherence. Polytree explores how a certain focus on the singular
                (or local) can introduce movements in time and associations
                among different elements. Acting on objects that one does not
                clearly perceive, and their potential to generate new concepts
                reflects a creative situation in which musical materials are
                being produced according to their position within a specific
                context. Instead of autonomy, or isolation, such activity
                displays a tendency of becoming connected and to be able to
                adapt. It could be how things originate that gives them their
                place in time. Perhaps everything is a matter of details, of
                local conditions and context. Such a contextual based view is an
                important element of the piece. Polytree is composed in 2018 for
                an 8-channel immersive sound environment."
              </p>
            </p>
          </article>
          <article>
            <div className="date">23-24.03.2018</div>

            <div className="hr">
              <hr />
            </div>

            <p>Azimuth #6 Weekender</p>

            <div className="img-center">
              <OpacityImage imageUrl={azimuth_mgbg} />
            </div>

            <p>
              March 23-24, 2018
              <br />
              iii workspace at WD4X, Willem Dreespark 312, The Hague
              <br />
              Doors open at 20:00
              <br />
              Concerts start at 20:30
              <br />
              <br />
              Friday, March 23
              <br />
              Francisco López – NL Premiere Solo Performance
              <br />
              <br />
              Saturday, March 24
              <br />
              Erik Nyström (SE)
              <br />
              MGBG (Marie Guilleray (FR) en Bjarni Gunnarsson (IS)
              <br />
              Casper Schipper (NL)
              <br />
              Iannis Xenakis performed by Siamak Anvari (IR)
              <br />
              <br />
            </p>

            <p>
              <a href="https://www.azimuthfoundation.net">
                https://www.azimuthfoundation.net
              </a>
            </p>
          </article>

          <article>
           
            <div className="hr">
              <hr />
            </div>

            <div className="col-lg-5">  
            </div>


            <div className="col-lg-5">

            <p>
              <a href="/Past">
                - PAST - 
              </a>
            </p>

            </div>

            <div className="col-lg-5">
            </div>
              
           
          </article>

                 </div>

                 <div className="hr">
              <hr />
            </div>

          

         
      </div>
    );
  }
}

export default Current;
