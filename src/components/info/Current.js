import React, {Component} from 'react';

// Styles
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
import smc2018 from './../../assets/images/smc2018.jpg';
import todaysart2018 from './../../assets/images/todaysart2018.jpg';
import fraislandi from './../../assets/images/fraislandi.jpg';
import arc_power from './../../assets/images/arc-power.jpg';
import hisolat_k7 from './../../assets/images/hisolat-k7.jpg';
import sonologyConcert12May2018 from './../../assets/images/SonologyConcert12May2018.jpg';
import azimuth_mgbg from './../../assets/images/azimuth-mgbg.jpeg';
import vecer from './../../assets/images/vecer.jpg';
import granny_ephemere from './../../assets/images/granny-ephemere.jpg';
import extrapol from './../../assets/images/extrapol.jpg';
import brno from './../../assets/images/brno.jpg';
import audiodh from './../../assets/images/audiodh.jpg';
import sonoconcert from './../../assets/images/sonoconcert.jpg';
import cotecourt from './../../assets/images/cotecourt.png';
import ephemere2016 from './../../assets/images/ephemere2016.jpg';
import sonocd from './../../assets/images/sonocd.jpg';
import SEG2016_bozza from './../../assets/images/SEG2016_bozza_20-4-16-7.jpg';
import L025_Inserts13 from './../../assets/images/3L025_Inserts13.jpg';
import Secret_Thirteen_Mix from './../../assets/images/Secret-Thirteen-Mix-096-Einoma.jpg';
import einoma_kaffibarinn from './../../assets/images/einoma-kaffibarinn.jpg';
import paths_photo1 from './../../assets/images/paths-photo1.jpg';
import easter_debug from './../../assets/images/easter-debug.jpg';
import fluister from './../../assets/images/fluister.jpg';
import azimuth from './../../assets/images/azimuth.jpg';
import MiniBEAST_CC from './../../assets/images/MiniBEAST-CC.jpg';
import spoutnik from './../../assets/images/spoutnik.png';
import sanfrantape from './../../assets/images/sanfrantape.jpg';
import sftape from './../../assets/images/sftape.png';
import ambaniv from './../../assets/images/ambaniv.jpg';
import concertzender from './../../assets/images/concertzender.jpg';
import Ship_04_details02_studio_another_day from './../../assets/images/Ship_04_details02_studio-another-day.png';
import mgbg4 from './../../assets/images/mgbg4.jpg';
import journalb from './../../assets/images/journalb.png';
import journal from './../../assets/images/journal.png';
import rewire from './../../assets/images/rewire.png';
import ina_grm from './../../assets/images/ina-grm.png';
import mengi from './../../assets/images/mengi.jpg';
import volkspaleis from './../../assets/images/volkspaleis.jpg';
import rewire_andrea from './../../assets/images/rewire-andrea.png';
import ephemere_series from './../../assets/images/ephemere-series.jpg';
import tectonics from './../../assets/images/tectonics.jpg';
import bipolare from './../../assets/images/bipolare.jpg';
import harpa from './../../assets/images/harpa.jpg';
import inserts from './../../assets/images/inserts.jpg';
import digitalisdead from './../../assets/images/digitalisdead.jpg';
import dia_de_mucho from './../../assets/images/dia_de_mucho.jpg';
import composingSpaces from './../../assets/images/composingSpaces.jpg';
import gsluff from './../../assets/images/gsluff.jpg';
import Sonogram from './../../assets/images/Sonogram.png';
import mgbgResidency from './../../assets/images/mgbgResidency.jpg';
import todaysart from './../../assets/images/todaysart.jpg';
import unm from './../../assets/images/unm.jpg';
import destellos from './../../assets/images/destellos.jpg';
import cheryl from './../../assets/images/cheryl.jpg';
import osal from './../../assets/images/osal.png';
import wfsSonar from './../../assets/images/wfsSonar.jpg';
import crucial from './../../assets/images/crucial.png';
import lectoraat from './../../assets/images/lectoraat.jpg';
import orpheus from './../../assets/images/bg-orpheus.png';
import rc from './../../assets/images/rc.jpg';
import SonologyConcert17October2018 from './../../assets/images/SonologyConcert17October2018.jpg';
import OrpheusMachine from './../../assets/images/orpheus-machines.jpeg';
import lueur1 from './../../assets/images/lueura.png';
import multiphonies from './../../assets/images/grm_multiphonies2019-20.jpg';
import Crxssings from './../../assets/images/CRXSSINGS.jpg';
import Rask2 from './../../assets/images/rask2poster2.jpg';
import Sonix from './../../assets/images/sonix.jpg';
import DC2020 from './../../assets/images/discussion-concert-jan2020.jpg';
import superpang from './../../assets/images/superpang.jpg';
import cendres_sovn2 from './../../assets/images/cendres_sovn2.jpg';
import xcoax from './../../assets/images/xcoax.png';
import queue from './../../assets/images/queue.jpeg';
import sptour from './../../assets/images/sptour.jpeg';
import audiosphere from './../../assets/images/audiosphere.png';
import festival_ecoutes from './../../assets/images/festival-ecoutes.png';
import attn from './../../assets/images/attn.jpeg';

class Current extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bandcampStyle: {
        position: 'relative', display: 'block', width: '400px', height: '100px'
      },
      noBorder: {
        border: '0px'
      },
    };
  }

  componentDidMount() { window.scrollTo(0, 0) };

  render() {
    return <div className="container">
      <div className="content">

      <article > <div className="date">16-07-2021</div>
      <div className="hr"><hr/></div>
      <p>
          'Synthesis and Operation Flows' at xCoaX 2021.
      </p>
      <div className="img-center-noborder">
        <a href="https://2021.xcoax.org/#program">
        <OpacityImage imageUrl= {xcoax} />
        </a>
      </div>
      <p>
        <strong>xCoAx 2021</strong> takes place this week exploring "the frontiers of digital art with a multidisciplinary investigation on aesthetics, computing, communication and the elusive X factor that connects them all." 
        <a href="https://2021.xcoax.org/#program" target="_blank"> xCoaX 2021 </a>
      </p>
      <p>
        <strong>xCoAx 2021</strong> goes hybrid in Graz, Austria and is open and free to everyone online. I'm presenting my paper 'Synthesis and Operation Flows' on the 16.07 at 14:00.
        <a href="https://2021.xcoax.org/papers2" target="_blank"> Paper session 2 </a>
      </p>
      <p>
      <a href="https://www.youtube.com/watch?v=mIpAZS3bbPw" target="_blank"> Presentation </a>
      </p>
      <p>
      <a href="https://soundcloud.com/bjarni/sets/research" target="_blank"> Sounds </a>
      </p>
      <p>
      <a href="https://github.com/bjarnig/OF" target="_blank"> Code </a>
      </p>
      <p>
      <a href="https://www.academia.edu/50027204/Synthesis_and_Operation_Flows" target="_blank"> Paper </a>
      </p>
      
      </article>

      <article > <div className="date">12-06-2021</div>
      <div className="hr"><hr/></div>
      <p>
      <a href="https://superpang.bandcamp.com/album/tour-mode" target="_blank">FIFO</a> on 'Music for queuing at the supermarket'
      </p>
      <div className="img-center">
      <a href="https://sovnrecords.bandcamp.com/album/music-for-queuing-at-the-supermarket" target="_blank">
        <OpacityImage imageUrl= {queue} />
        </a>
      </div>
      <p>
           Celebrating their 30th release SØVN releases the compilation 'Music for queuing at the supermarket'. </p>
           <p>It includes my piece 'FIFO'.</p>
      <p>
          <a href="https://sovnrecords.bandcamp.com/album/music-for-queuing-at-the-supermarket" target="_blank"> Music for queuing at the supermarket </a>
      </p>
      <p>
      </p>
      </article>

      <article > <div className="date">01-01-2021</div>
      <div className="hr"><hr/></div>
      <p>
         Tour Mode on <a href="https://superpang.bandcamp.com/album/tour-mode" target="_blank">Superpang</a>
      </p>
      <div className="img-center">
      <a href="https://superpang.bandcamp.com/album/tour-mode" target="_blank">
        <OpacityImage imageUrl= {sptour} />
        </a>
      </div>
      <p>
        The SUPERPANG compilation is out with a whole bunch of new music including my piece <a href="https://superpang.bandcamp.com/track/crest" target="_blank"> Crest </a> 
    </p>
      <p>
          <a href="https://superpang.bandcamp.com/album/tour-mode" target="_blank"> https://superpang.bandcamp.com/album/tour-mode </a>
      </p>
      </article>

      <article > <div className="date">06-12-2020</div>
      <div className="hr"><hr/></div>
      <p>
      Festival Ecoutes
      </p>
      <div className="img-center">
        <a href="http://festivalecoute.org/">
        <OpacityImage imageUrl= {festival_ecoutes} />
        </a>
      </div>
      <p>Binaural pieces will be featured in  <a href="http://festivalecoute.org/">Festival Ecoute</a> including l'Imaginaire du parleur by me and Marie Guilleray. The binaural mix has been skillfully created by <a href="http://keestazelaar.com/"> Kees Tazelaar</a>. Many thanks for the effort. </p>
      <p>
      About the festival: Après l’intense alchimie d’écoute(s) diffusée hier soir sur les ondes, le Festival Ecoute.s. se poursuit cet après-midi avec une riche programmation de documentaires sonores.
      Sur le site internet du festival vous retrouverez également des podcasts et des contenus annexes, dont « Mondes Fragmentés », la sélection de pièces électroacoustiques en version binaurale que j’ai concoctée en complicité avec A P N É E S.
      </p>
      <p>Here on Soundcloud:</p>
      <p>
      <iframe width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/821805625&color=%234c4655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </p>
      </article>

      <article> 
      <div className="date">06-11-2020</div>
      <div className="hr"><hr/></div>
      <p>
          'Cendres' on SØVN Records
      </p>
      <div className="img-center">
        <a href="https://sovnrecords.bandcamp.com/album/cendres">
        <OpacityImage imageUrl= {cendres_sovn2} />
        </a>
      </div>

      <p> Released on the 18th of November. <a href="https://sovnrecords.bandcamp.com/album/cendres"> Order here </a></p>
      <p>Cendres consists of two electroacoustic compositions that have been performed in a multichannel setting: respectively, on the Acousmonium at GRM's Sonology concert in Paris in October 2019, and at the Institute of Sonology in The Hague in June 2018. </p>
      <p>Reworked here and extended in duration while reduced to a stereo format.</p>
      
      </article>

      <article > <div className="date">14-10-2020</div>
      <div className="hr"><hr/></div>
      <p>
      Audiosfera 1980-2020
      </p>
      <div className="img-center">
        <a href="https://www.museoreinasofia.es/en/exhibitions/audiosphere?fbclid=IwAR1zjs351-j-vaGF8GDuCTAcj1i2WZAg8OptU8lzyVtG1cFScyQc3OeFyxw">
        <OpacityImage imageUrl= {audiosphere} />
        </a>
      </div>
      <p>
      <a href="https://www.museoreinasofia.es/en/exhibitions/audiosphere?fbclid=IwAR1zjs351-j-vaGF8GDuCTAcj1i2WZAg8OptU8lzyVtG1cFScyQc3OeFyxw">Audiosfera 1980-2020</a> is happening now in Museo Reina Sofía Madrid, Spain. Curated by Francisco Lopez. Many soundworks are featured including my piece 'Fingrafjall'.
      </p>
      </article>

      <article > <div className="date">18-09-2020</div>
      <div className="hr"><hr/></div>
      <p>
          Volume & Void
      </p>
      <div className="img-center">
        <OpacityImage imageUrl= {superpang} />
      </div>
      <p>

      </p>
      <p> New release out on <a href="https://superpang.bandcamp.com/album/volume-void"> Superpang </a>
      </p>
      <p>
          Composed through experimental scheduling algorithms that explore the duality of immediate, direct events with gradual and evolving processes.<br /><br />
          System and sounds created during the summer of 2020 in Scheveningen, The Hague.<br /><br />
          Design: Joe Gilmore
      </p>
      </article>

      <article > <div className="date">18-09-2020</div>
      <div className="hr"><hr/></div>
      <p>
          ATTN Compilation
      </p>
      <div className="img-center">
      <a href="https://attnspancompilation.bandcamp.com/album/attn-span">
        <OpacityImage imageUrl= {attn} />
        </a>
      </div>
      <p>

      </p>
      <p> New track on <a href="https://attnspancompilation.bandcamp.com/album/attn-span"> ATTN </a>
      </p>
      <p>
      ATTN:SPAN compilation is out on Bandcamp. Every penny will be going to the charity Cool Earth, which works with local people to halt deforestation and climate change.
      </p>
      </article>

        <article > <div className="date">06-03-2020</div>
        <div className="hr"><hr/></div>
        <p>
            LKS
        </p>
        <p>
        <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbjarnig%2Fcyclic-executive%2F" frameborder="0" ></iframe>
        </p>
        <p> Mix / Music selection made for LKS podcast.
        </p>
        </article>

        <article > <div className="date">21-02-2020</div>
        <div className="hr"><hr/></div>
        <p>
            Sonix #9
        </p>
        <div className="img-center">
          <OpacityImage imageUrl= {Sonix} />
        </div>
        <p>
            Ji Youn Kang (KR/NL)<br />
            Bjarni Gunnarson (IS/NL)<br />
            Amen Tma (SK)<br />
            Panáčik (SK/CZ)<br />
            Ramin Kuliev (AZ/CZ)<br />
            Rudolf Růžička (CZ)<br />
        </p>
        <p>
        Darkness and deep listening - an evening of international electroacoustic music working with both rich sound spectra and space, will present new compositions by composers from the Institute of Sonology (The Hague, NL), JAMU (Brno, CZ) and the surrounding area.
        The concert will be performed in darkness in 8 channel surround sound.
        Dramaturgy and organization: Jiří Suchánek. Brno, Czech Republic.
        </p>
        <p><a href="https://www.facebook.com/events/615517735902652/"> Sonix #9 </a></p>
        </article>

        <article > <div className="date">29-01-2020</div>
        <div className="hr"><hr/></div>
        <p>
            Discussion Concert #3
        </p>
        <div className="img-center">
          <OpacityImage imageUrl= {DC2020} />
        </div>
        <p>The third Sonology Discussion Concert of the Academic Year 2019–2020 with participants from Czech Republic, Italy, Iran, Iceland, Germany and Syria.</p>
<p>The concert will start at 19:30, please be on time.</p>
<p>As usual, entrance and drinks are free.</p>
<p>May we also have your attention for the Royal Conservatoire’s annual Open Day, which takes place on Saturday 25 January 2020 from 10:00 until 17:30. Sonology’s studios will be open from 11 and there is a Sonology concert presentation at 16:00. Please pass by when you are interested in one of our educational programmes or just would like to see what is going on in the studios.</p>
<p>Last but not least: have a look at our new website www.sonology.org, which has a lot of additional information, including a calendar.</p>
<p><a href="http://www.sonology.org/"> sonology.org </a></p>
        </article>

        <article>
          <div className="date">28-12-2019</div>
          <div className="hr"><hr/></div>
          <p>
            RASK #2
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {Rask2} />
          </div>
          <p>RASK #2 is the second edition of event series promoting new media art and experimentation in Reykjavik. It is organised by a collective of young Icelandic artists working in the intersection of art and technology. </p>
          <p>EXHIBITION IN INGÓLFSSTRÆTI 6 - 14:00 - 19:00<br />
            Ásdís Birna Gylfadóttir & Ragnheiður Erla<br />
            Hákon Bragason<br />
            Logi Leó Gunnarsson<br />
            María Guðjohnsen<br />
            Rúnar Örn Marinósson<br />
            Kristín Helga Ríkharðsdóttir</p>

            <p>CODE CAFÉ AT LOFT HOSTEL - 15:00 - 17:00<br />
            Snæi Jack<br />
            Hexia (Ólöf Rún Benediktsdóttir)<br />
            Bjarni Gunnarsson</p>

            <p>LIVE PERFORMANCES IN MENGI - 19:30 - 22:30<br />
            Doors open 19:30, performances start at 20:00:<br />
            Kaðlín Sara Ólafsdóttir<br />
            Halldór Eldjárn & Sól Ey<br />
            Höskuldur Eiríksson & Ingibjörg Friðriksdóttir<br />
            Bjarni Gunnarsson & Marie Guilleray</p>
              <p><a href="https://www.facebook.com/events/441285456536290/"> Rask #2 </a></p>

        </article>
        <article>
          <div className="date">18-10-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Akousma 18 Octobre 2019 / Mpaa Saint-germain. Sonologie @ GRM.
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {multiphonies} />
          </div>
          <p>Concert Institut de Sonologie de La Haye</p>
          <p>L’Institut de Sonologie adopte une position claire concernant l’utilisation de la
technologie en musique : la technologie n’est pas simplement un complément à la
pratique musicale existante, mais doit être principalement utilisée pour explorer de
nouvelles formes de composition et de présentation publique de la musique et de
l’art. En même temps, la sonologie n’est liée à aucun dogme stylistique.</p>

        <p><a href="https://inagrm.com/fr/showcase/open-agenda/3980622"> Akousma </a></p>
        </article>
        <article>
          <div className="date">01-07-2019</div>
          <div className="hr"><hr/></div>
          <p>
            CRXSSINGS (fundraiser for City Plaza)
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {Crxssings} />
          </div>
          <p>CRXSSINGS is a compilation remix album as a fundraiser for Refugee Accommodation and Solidarity Space City Plaza. Almost four hours of music, with 34 artists, remixing each others tracks. It contains my rework of BJ Nilsen and his of mine.</p>
          <p>'Mass migration is one of the most pressing humanitarian and political topics we face today. Rutger Zuydervelt (a.k.a Machinefabriek) and Gabriel Saloman of Yellow Swans initiated the compilation CRXSSINGS as a means to support migrants and refugees in Europe. They called upon friends and colleagues from Europe, North America and Australia to get involved, the conceptual idea being that duos of two artists would collaborate and donate their exclusive tracks for CRXSSINGS.'</p>
          <p>'CRXSSINGS will be released digitally on July 1 via a special Bandcamp account for a donation of 10 €. All the funds generated will be donated to City Plaza Hotel, a squatted refuge in the heart of Athens, Greece organized for and by migrants from Africa and Asia, which was covered by The Guardian back in 2017.'</p>
          <p><a href="https://crxssings.bandcamp.coms"> https://crxssings.bandcamp.com </a></p>
        </article>
        <article>
          <div className="date">22-05-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Music, Humans and Machines (ODC 2019)
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {OrpheusMachine} />
          </div>
          <p>'This conference explores musician’s long relationship with their instruments and instrumentalities, questioning issues of autonomy and agency in the apparent dichotomy between tools and musical expression.'</p>
          <p>'From the "mechane" of Greek theatres from which gods were suspended, to Mozart’s description of the Stein fortepiano’s knee-lever as “Die Maschine”, to the epoch-defining technologies of recording, sound synthesis, and algorithmic composition of more recent times, performers and composers have relied on mechanical means to create magic in their art.'</p>
          <p>I will perform a new piece: <strong>Translation, traces and intervention</strong></p>
          <p>'Technical autonomy usually depends on abstraction or attempts to generalize behavior. Generalizing often involves a translation, a mapping between different modes of representations in order to simplify or combine. However, processes of abstraction can distantiate agency from its origin, sometimes introducing a by-product “a remainder, a set of discarded information—the différance, or the crucial distinction and deferral of meaning that goes on between the map and the territory.  In ‘Translation, traces and intervention’ the idea is to explore the boundary of software abstractions and direct access to computer sound synthesis.'</p>
          <p><a href="https://orpheusinstituut.be/en/news-and-events/music-humans-and-machines"> Music, Humans and Machines (ODC 2019)</a></p>
        </article>
        <article>
          <div className="date">13-04-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Inspired by immersive artificial worlds, the idea of a Synthetic Environment refers to generated (usually quite detailed) surroundings or spaces of virtual worlds. Example of current work, now on Vimeo.
          </p>

          <p>
            <iframe src="https://player.vimeo.com/video/325550871?color=F27059&title=0&byline=0&portrait=0" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </p>
          <p>

            The path one navigates within the environment determines the resulting algorithm of the produced sound. Such an environment functions as a map of the compositional space but also as a medium to continue interaction with generative activity.
          </p>
        </article>
        <article>
          <div className="date">21-03-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Simulation and Computer Experimentation in Music and Sound Art
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {orpheus} />
          </div>
          <p>'The seminar aims to bring together practitioners and scholars to discuss the wide-reaching implications of the ‘agential cut’ (Barad) or ‘ontic cut’ (Rheinberger) – the separation between operationalised model or abstract theory and perceived or experimentally verified ‘reality’, the fissure already indicated by Husserl and realised in experimental computational systems.'</p>
          <p>These introduce a new type of interface between the machinery and what is implemented, allowing for the ongoing production of new data and going beyond the traditional atemporal theoretical models; crucially, simulations also allow new and mobile perspectives onto the ‘object’ modelled by tracing contingent, situated, multiple paths through what DeLanda describes as ‘a space of possibilities’ – alternative realities within a space that displays stability or consistency at another level. In Rheinberger’s words ‘it becomes urgent to ask whether computer simulations represent a new category of epistemic object altogether.’</p>
          <p>I will present my project 'Synthetic environments and compositional context'</p>
          <p>
            <a href="https://orpheusinstituut.be/en/news-and-events/simulation-and-computer-experimentation-in-music-and-sound-art">
              Simulation and Computer Experimentation in Music and Sound Art</a>
          </p>
        </article>
        <article>
          <div className="date">15-02-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Publications on the Research Catalogue
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {rc} />
          </div>
          <p>'... issues of algorithms, agency, proximity, context and the becoming of sound processes. It questions the scope and potential boundaries of an algorithm, the creative space relating compositional practice with computers and the idea of an algorithmic environment.'</p>
          <p>
            <a href="https://www.researchcatalogue.net/view/540350/540351">Context and Scope</a>
          </p>
          <p>'... how to represent a generative algorithm as distributed (open), with multiple entry points instead of being closed and result-oriented only. How to introduce dynamic modifications of goals (or heuristics) as a creative interaction mode or how the attitude of evolving criteria (variable intentions) can be made audible through the characteristics of the corresponding sound processes.'</p>
          <p>
            <a href="https://www.researchcatalogue.net/view/543155/543156">Interrupts and Intervention</a>
          </p>
        </article>
        <article>
          <div className="date">25-01-2019</div>
          <div className="hr"><hr/></div>
          <p>
            Lectorate Music, Education and Society - Festive Presentation
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {lectoraat} />
          </div>
          <p>On 25 January, the Music, Education and Society lectorate, under the direction of lector Paul Craenen, will present its plans for the coming year. From the research group, three new research groups set to work with themes such as "Building Blocks of Musical Training", "Making in Music" and "Musical Curation and Engagement". They discuss their research plans and engage in dialogue with each other and the public.</p>
          <p>The event is also a closure for the research group of the past year. In short artistic interventions and a social interview, Joe Puglia (violin), Petra Somlai (fortepiano), Raviv Ganchrow (sonology), Patrick van Deurzen (music theory) and Bjarni Gunnarsson (sonology) will explain what research has done for their artistic practice. There is also a small exhibition in which the completed projects can be viewed at the Research Catalog.</p>
          <p>
            <a href="https://www.koncon.nl/agenda/lectorate-event">
              Royal Conservatory, The Hague</a>
          </p>
        </article>
        <article>
          <div className="date">15-01-2019</div>
          <div className="hr"><hr/></div>
          <p>
            ATTN, Crucial Listening interview
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {crucial} />
          </div>
          <p>Discussion with Jack Chuter on ATTN Magazine</p>
          <p>
            'Energetic phenomena, Romanian spectral music, hidden pulsations. The Icelandic composer talks about three important albums.'
            <div>&nbsp;</div>
            <a href="https://www.attnmagazine.co.uk/features/13718">
              ATTN Magazine</a>
          </p>
        </article>
        <article>
          <div className="date">26-11-2018</div>
          <div className="hr"><hr/></div>
          <p>
            New LP, Lueur released by Tartaruga records
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {lueur1} />
          </div>
          <p>Lueur consists of four electroacoustic compositions; the product of unfolding and unpredictable generative processes spread across 38 minutes. An exploration of process as much as tone and texture, the album takes shape through a series of ever-changing movements, interweaving dense low passages and abrupt changes of atmosphere and sound.</p>
          <p>
            <a href="https://www.tartaruga.co.uk/">
              Tartaruga publishing</a>
          </p>
        </article>
        <article>
          <div className="date">17-10-2018</div>
          <div className="hr"><hr/></div>
          <p>
            Sonology Concert 17 October 2018, Arnold Schoenbergzaal
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {SonologyConcert17October2018} />
          </div>
          <p>Discussion Concert 1</p>
          <p>
            The concert will feature multi-channel fixed-media pieces by Laura Agnusdei, Marie Guilleray & Bjarni Gunnarsson, Cort Lippe and Kees Tazelaar.
            There will be a live performance by Instruments & Interfaces students Görkem Arikan and Slavo Krekovic, and an improvised music session with the Sonology Electroacoustic Ensemble.
          </p>
        </article>
        <article>
          <div className="date">21-09-2018</div>
          <div className="hr"><hr/></div>
          <p>
            Today's Art 2018
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {todaysart2018} />
          </div>
          <p>
            Presenting a new live set as part of the great Azimuth program at TodaysArt 2018 next week.
            <div>&nbsp;</div>
            <a href="http://todaysart.nl/2018">
              Today's Art.</a>
          </p>
          <p>
            From a festival organization to an international platform for trans-disciplinary creativity: ever since the launch of its first edition in 2005, TodaysArt has been bringing artists, thinkers, and audiences together in an ever-changing, yet inspiring setting.
            <br /><br />
            Inspired by relevant political and artistic topics, TodaysArt aspires to promote and foster innovation and creativity as well as public interest for current developments within arts, culture, and society.
            <br /><br />
            The network specializes in the presentation and development of emerging digital culture and contemporary visual and performing arts. By doing so, TodaysArt connects local and international talent to established creators and pioneers to collectively explore new possibilities and forms of expression. The festival is known for its surprising settings: every year, the festival travels through the city of The Hague before temporarily finding its niche in a wide array of unconventional public spaces and venues.
            <br />
          </p>
        </article>
        <article>
          <div className="date">04-07.07.2018</div>
          <div className="hr"><hr/></div>
          <p>
            Sound and Music Computing 2018
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {smc2018} />
          </div>
          <p>
            Presenting a poster (Block-based scheduling through interrupts and intervention) + piece (Prisme), at the Sound and Music Computing 2018.
            <div>&nbsp;</div>
            <a href="http://smc2018.cut.ac.cy/">
              SMC2018.</a>
          </p>
          <p>
            The theme of the conference focuses on researching different approaches of computer music and interactive music systems and monitoring the impact of technology on composition, performance, musicology and education through a discussion around the
                wide concept of 'crossings'. A special focus will be given to sonic crossings in our mind, in our close environment, in our society, in our natural soundscape and in our imaginary landscapes of the ocean and the space searching the dream of the
                Varesian "deserts". <br /> <br /> A special tribute to commemorate the thirtieth year since the passing of Giacinto Scelsi, a composer who embodies the fluid border between sound and music, is also planned. Other areas of focus will be soundscape aesthetics,
                sound borders - which always broaden through technology - biotechnology issues, ethics of sound and music, virtual spatialisation and cultural heritage.
          </p>
        </article>
        <article>
          <div className="date">07.07.2018</div>
          <div className="hr"><hr/></div>
          <p>
            Frá Íslandi/ From Iceland/Uit IJsland
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {fraislandi} />
          </div>
          <p>
            Participating in SCHIJNDEL - Frá Íslandi (From Iceland) a collective exhibition that opens on Saturday, July 4 in the KEG exhibition space in't Spectrum in Schijndelwas.
            <div>&nbsp;</div>
            <a href="https://www.kegschijndel.nl/">
              kegschijndel.nl.</a>
          </p>
          <p>Onder internationale kenners genieten IJslandse schrijvers, muzikanten, schilders en beeldhouwers grote faam – al zal die vaak het Europese publiek niet bereiken. Maar vanaf 7 juli hoeft u niet naar het afgelegen eiland om hun kunst te ontdekken
              - hedendaagse beeldende kunst uit IJsland is dan gewoon in de Keg Expo in Schijndel te zien.</p>
        </article>
        <article>
          <div className="date">02.07.2018</div>
          <div className="hr"><hr/></div>
          <p>
            ARC kickoff event
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {arc_power} />
          </div>
          <p>
            Presenting and performing live ('Command and Autonomy') at the <a href="https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach"> ARC </a> (art_research_convergence) kick-off of the season 2018 (July 2,
                2018).
            <a href="http://smc2018.cut.ac.cy/">
              ARC.</a>
          </p>
          <p>P O W E R is the ability to act and have others act in particular ways. Now, since acting and causing others to act is precisely what puts society in motion, then social life must be about power too, that is, about acting in relation to one another.
              But is there anyone behind the wheel? Who are the players in the network of power that keeps the world turning? Different versions of these questions are explored by the artists-researchers featuring in this ARC session, the first one of the season
              2018.
          </p>
          <p>Ingrid Verweijen- Audition Audition- performance<br />Lucy Cordes Engelman -Heresy of the free spirit- performative lecture<br/>Bjarni Gunnarsson - Command and Autonomy - Algorithmic composition<br/>GVN908- Guardians of Peace- performance<br /></p>
          <p><a href="https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach/">https://www.universiteitleiden.nl/en/humanities/academy-of-creative-and-performing-arts/acpa-outreach </a>
          </p>
        </article>
        <article>
          <div className="date">05.06.2018</div>
          <div className="hr"><hr/></div>
          <p>
            Hisolat - Various Artists One
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {hisolat_k7} />
          </div>
          <p>
            <a href="https://hisolat.bandcamp.com/album/various-artists-one-2">'Various Artists One'</a> out now on Hisolat as Cassette + Digital Album, with Lea Bertucci, Kyle Eyre Clyd, Bjarni Gunnarsson, Marie Guilleray, David Fyans, Sayaka Botanic.
            <div>&nbsp;</div>
            <a href="https://hisolat.bandcamp.com/album/various-artists-one-2">
              https://hisolat.bandcamp.com/album/various-artists-one-2</a>
          </p>
          <p>
            <p>1. Lea Bertucci, Kyle Eyre Clyd 11:54<br/>2. Bjarni Gunnarsson 16:24<br/>3. Marie Guilleray 09:12<br/>4. David Fyans 30:00<br/>5. Sayaka Botanic 07:28<br/></p>
          </p>
        </article>
        <article>
          <div className="date">12.05.2018</div>
          <div className="hr"><hr/></div>
          <p>
            Sonology Discussion Concert 5
          </p>
          <div className="img-center">
            <OpacityImage imageUrl= {sonologyConcert12May2018} />
          </div>
          <p>
            It is our pleasure to invite you for another Sonology Discussion Concert. This concert will feature our third Konrad Boehmer Visiting Professor Nicholas Collins, who will perform a solo work and will collaborate with the Sonology Electroacoustic Ensemble.
                Doors are open at 19:15, the concert starts at 19:30.
            <a href="http://www.sonology.org">
              www.sonology.org.</a>
          </p>
          <p>
            <p>I will diffuse a new piece 'Polytree' (2018)</p>
            <p>"Sound processes can be defined by the composition of relations and interconnected parts, where many levels form a greater coherence. Polytree explores how a certain focus on the singular (or local) can introduce movements in time and associations among different elements. Acting on objects that one does not clearly perceive, and their potential to generate new concepts reflects a creative situation in which musical materials are being produced according to their position within a specific context. Instead of autonomy, or isolation, such activity displays a tendency of becoming connected and to be able to adapt. It could be how things originate that gives them their place in time. Perhaps everything is a matter of details, of local conditions and context. Such a contextual based view is an important element of the piece. Polytree is composed in 2018 for an 8-channel immersive sound environment."</p>
          </p>
        </article>
        <article>

          <div className="date">23-24.03.2018</div>

          <div className="hr"><hr /></div>

          <p>
          Azimuth #6 Weekender
          </p>

          <div className="img-center">
          <OpacityImage imageUrl= {azimuth_mgbg} /></div>

          <p>
          March 23-24, 2018<br />
          iii workspace at WD4X, Willem Dreespark 312, The Hague<br />
          Doors open at 20:00<br />
          Concerts start at 20:30<br /><br />
          Friday, March 23<br />
          Francisco López – NL Premiere Solo Performance<br /><br />

          Saturday, March 24<br />
          Erik Nyström (SE)<br />
          MGBG (Marie Guilleray (FR) en Bjarni Gunnarsson (IS)<br />
          Casper Schipper (NL)<br />
          Iannis Xenakis performed by Siamak Anvari (IR)<br /><br />

          </p>

          <p><a href="https://www.azimuthfoundation.net">https://www.azimuthfoundation.net</a></p>

        </article>

        <article>

        <div className="date">07.01.2018</div>

        <div className="hr"><hr /></div>

        <p>
        Sonix - evening of acousmatic music
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {vecer} /></div>
        <p>
        The first concert of the planned series of listening evenings of international acousmatic music, will feature next to each other the compositions of well known composers, students and pedagogues of contemporary electroacoustic music and will use the surround sound as an integral means of expression. The project is being developed with the collaboration of the famous Institute of Sonology from The Hague and the Multimedia Composition of HF JAMU. Come to immerse yourself into a deep, concentrated, composed density of frequencies and sonic processes. The concert is concieved as pure listening of fixed media pieces, without a visual component, in the dark. Most of the the compositions are mixed and composed for 8-channel surround sound. The concert will take place in the main hall of the Theater in Orlí, Brno, Czech Republic.
        </p>

        <p>
        Kees Tazelaar (NL) <br />
        Bjarni Gunnarsson (NL/IS) <br />
        Dan Dlouhý (CZ) <br />
        Miša Skalskis (LT) <br />
        Julio Molina Moya (E) <br />
        Jiří Suchánek (CZ) <br />
        </p>

        </article>

        <article>

        <div className="date">08.11.2017</div>

        <div className="hr"><hr /></div>

        <p>
        Solo Live set at Ephémère, Studio Loos.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {granny_ephemere} /></div>

        <p>
        'Vicinity pulse' is an interactive electroacoustic composition that concerns scope, influence and fluidity of sonic events. It represents in some sense a simplification. Processes that focus on pulsations, clear events and straight synthetic pitches. It brings forward a certain view of mutual influence. How to engage with a running process, but also to let it evolve and be open to its influences?
        <br /><br />
        It always takes a certain time to perceive important characteristics of a sound process. These boundaries and the ways of interacting with a changing development is an important element of the piece. 'Vicinity pulse' is composed in 2017 for a 4-channel environment.</p>
        <p>
        <a href="https://www.facebook.com/events/723139061217173/">Ephémère November 2017</a>
        </p>

        </article>

        <article>


        <div className="date">05.11.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Live set MGBG (me and Marie Guilleray) at Extrapol, Nijmegen.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {extrapol} /></div>

        <p>
        'Ulkaanuitbarsting is onderdeel van een tweedelige serie over performancekunst. Wat kan een artiest in het moment neerzetten? Hoe kan hij de ruimte transformeren met zijn aanwezigheid, het publiek overdonderen, zo niet volledig van de sokken blazen? Vulkaanuitbarsting is het moment waarop alles uit elkaar knalt.</p>
        <p>Zowel performers pur sang die zich specialiseren in vlugge, directe acties als muzikanten en geluidskunstenaars die werk maken met een performatieve inslag worden uitgenodigd. De opbouw van de avond is een performancefestival in het klein: er treden meerdere artiesten op die het publiek moeten overdonderen. Het centrale gegeven van Vulkaanuitbarsting is het uitdagen van de kunstenaar om het publiek op indringende wijze te verrassen in een korte actie waarin beeld en geluid samenkomen.'</p>
        <p>
        <a href="http://www.extrapool.nl/">Extrapool</a>
        </p>

        </article>

        <article>

        <div className="date">11.10.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Spatial Electroacoustic Music in Brno (curated by Kees Tazelaar).
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {brno} /></div>

        <p>
        Opening concert of the 19th annual international music festival of contemporary acoustic and electronic music and multimedia projects. <br /><br />The festival is part of the FORUM OF NEW MUSIC.
        </p>
        <p>
        - Programme: - <br />
        L’imaginaire du parleur by Marie Guilleray and Bjarni Gunnarsson <br />
        Stroma by Jaap Vink <br />
        Sterne Vielleicht (?)! by  Marianne Dekker (video) and Kees Tazelaar (music) <br />
        Debris[2] by Darien Brito <br />
        EQUALE by Richard Barrett and Kees Tazelaar <br />
        </p>
        <p>
        <a href="http://divadlonaorli.jamu.cz/index.php?a=archiv-aktualit/kees-tazelaar-setkavani-nove-hudby-plus-2016">Janáček Academy of Music and Performing Arts in Brno</a>
        </p>
        </article>

        <article>

        <div className="date">22.09.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Audio-DH.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {audiodh} /></div>

        <p>
        Conceived and directed by Francisco López audio-DH is a collaborative project of epic proportions that weaves the sounds of 250 of The Hague’s creative minds into an exploration of the city’s vibrant sonic tapestry. </p>

        <p>With the help of fellow composer Barbara Ellison and the artist platform iii, 50 curators were invited to rally the city's creative community, gathering contributions from composers, experimental musicians, noise makers, sound artists etc.. in the broadest and most inclusive definition of contemporary sonic creativity. The response was outstanding, resulting in a collection of 195 tracks by 250 artists. </p>

        <p>On September 22nd at Korzo theatre, in collaboration with TodaysArt, iii has the pleasure to make the outcome of the project public. </p>
        <p> The physical and online editions collecting the gathered materials will be presented during the opening reception. This will be followed by a performance in which HARING (Humanless Audio Recombinator for Infinite Novelty Generation), an especially designed software created by Francisco Lopez together with Andrea Vogrig and Darien Brito, will recombine the contributions from each participant artist in a dense sound mass generating a momentary collective identity of makers and listeners.
        </p>

        <p>
        <a href="http://audiodh.nl/">audiodh.nl</a> / <a href="http://iiinitiative.org/">iii collective</a>
        </p>
        <p>
        <a href="http://www.franciscolopez.net/">Francisco López </a> / <a href="http://www.barbaraellison.com/Barbara_Ellison/Home.html">Barbara Ellison</a>
        </p>
        <p>
        <a href="http://darienbrito.com/">Darien Brito</a> / <a href="http://typedef.altervista.org/?doing_wp_cron=1477239719.4276690483093261718750">Andrea Vogrig</a>
        </p>

        </article>

        <article>

        <div className="date">08.09.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Sonology, opening of the academic year.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {sonoconcert} /></div>

        <p>
        8 September 2016, 19:30, Arnold Schoenbergzaal: opening of the academic year concert with multi-channel electroacoustic music and live performances.</p>
        <p>Pieces/Music by me, Justin Bennet, Siamak Anvari, Kees Tazelaar and the Sonology Electroacoustic Ensemble. </p>
        <p>
        <a href="http://www.sonology.org/">Institute of Sonology</a>
        </p>
        </article>

        <article>

        <div className="date">20.06.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Audio-visual set with Cedric Dupire at Côté court festival, Paris.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {cotecourt} /></div>

        <p>
        À l'origine, une envie d'échange et des territoires communs : les matières, les textures et le mouvement. Un mouvement organique qui travaille le son granulaire et le grain de la pellicule. Un mouvement temporel qui s'affranchit des mesures et des cadences d'obturation. </p> <p>
        Les images et la musique dialoguent, les projets se succèdent, initiés par l'un ou par l'autre : Dried up, O Sal Da Lua a outra experiencia, Grey Seeds ou Journal afghan. Les jouer en « live », c'est maintenir coûte que coûte ce mouvement.</p>
        <p>
        <a href="http://www.cotecourt.org/">Côté court</a>
        </p>
        </article>

        <article>

        <div className="date">09.06.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Solo set at the last Ephémère of the year.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {ephemere2016} /></div>

        <p>
        A live take on ideas from my recent album ´Paths´
        </p>

        <p>
        Other artists performing are Semay Wu, Jihae Ko & Kay Patru and Ilya Ziblat/Germaine Sijstermans/Ziv Taubenfeld.
        </p>

        <a href="https://www.facebook.com/events/1213120252031594/">Ephémère June 2016</a>

        </article>

        <article>

        <div className="date">01.06.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Post Scriptum, 3 CD Set
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {sonocd} /></div>

        <p>
        A new 3CD release from the Institute of Sonology, featuring music by Sonology faculty members past and present: Richard Barrett, Gottfried Michael Koenig, Gabriel Paiuk, Jaap Vink, Joel Ryan, Marie Guilleray, Johan van Kreij, Bjarni Gunnarsson, Kees Tazelaar, Paul Berg, Barbara Ellison, Raviv Ganchrow, Justin Bennett and Konrad Boehmer, featuring electronic compositions and performances by Milana Zaric, Teodora Stepančić, Ekkehard Windrich, Evan Parker and the Sonology Electroacoustic Ensemble.
        </p>

        <p>
        <a href="http://www.sonology.org">Institute of Sonology</a>
        </p>

        </article>

        <article>

        <div className="date">07.05.2016</div>

        <div className="hr"><hr /></div>

        <p>
        Performance and masterclass at the Segnali 2016 festival in Perugia, Italy.
        </p>

        <div className="img-center">
        <OpacityImage imageUrl= {SEG2016_bozza} /></div>

        <p>
        A live audio-visual performance with Cedric Dupire along with a masterclass and presentation at the Perugia Conservatorio.
        </p>

        <p>
        <a href="https://www.facebook.com/Segnali.Perugia/">Segnali 2016</a>
        </p>

        </article>

        <article>

          <div className="date">01.05.2016</div>

          <div className="hr"><hr /></div>



        <div className="img-center">
        <OpacityImage imageUrl= {paths_photo1} /></div>

        <p>
        New Album 'Paths' will be released on Granny Records in May 2016. More info soon.
        </p>
        <br />
        </article>

        <article>

          <div className="date">26.03.2016</div>

          <div className="hr"><hr /></div>

          <h1>Live, The Ester Debug</h1>

          <div className="img-center">
            <a href="https://www.facebook.com/events/1550928841871490">
          <OpacityImage imageUrl= {easter_debug} /></a>
          </div>

          <p>Sonology ShowLab presents: The Easter Debug!<br />
          <br />
          ◉͛ Bᴊᴀʀɴɪ Gᴜɴɴᴀʀssᴏɴ ◉͛ <br />
          www.bjarni-gunnarsson.net <br /> <br />

          ◉͛ Kᴀɴɢ ◉͛ <br />
          www.jiyounkang.com <br /> <br />

          ◉͛ Cᴛʀʟ Fʀᴇᴇǫ ◉͛ <br />
          'Y DIY?' <br />
          https://vimeo.com/kacperziemianin/videos <br /> <br />

          ◉͛ Dᴀʀɪᴇɴ Bʀɪᴛᴏ ◉͛ <br />
          Live Generated AudioVisual performance <br />
          www.darienbrito.com <br /> <br />

          DJs: <br />
          ◉̶ Lᴏᴍʙʀᴏsᴏ ◉̶ <br /> <br />

          ◉̶ Tsᴇʀɪɴɢ ◉̶ <br /> <br />

          ◉̶ Yᴏʀʀɪᴛ Bʟɪɴɢ ◉̶ <br /> <br />

          ◉̶ Pɪᴇᴛ (TNT Sᴏᴜɴᴅ Sʏsᴛᴇᴍ) ◉̶ <br /> <br />

          doors open 21:00 <br />
          music starts 21:30  <br />
        </p>

          <a href="https://www.facebook.com/events/1550928841871490">Easter debug</a>

        </article>

          <article>

          <div className="date">21.02.2016</div>

          <div className="hr"><hr /></div>

          <h1>Live, Fluister @ De Helling, Utrecht </h1>

          <div className="img-center">
            <a href="http://www.fluister.org/event/marsen-jules-bjarni-gunnarsson-anne-chris-bakker/">
          <OpacityImage imageUrl= {fluister} /></a>

          <p>An afternoon with drones and soundscapes together. Jules marches, Bjarni Gunnarsson Anne and Chris Baker will take you to another dimension, where your senses are stimulated. Please feel self pads or mats with you so you an overnight determines how you take the music to you.<br />
          <br />
          The concert will feature works by:<br />
          <br />
          Marsen Jules <br />
          Bjarni Gunnarsson<br />
          Anne Chris Bakker<br />
          <br />
          De Helling, 15:00, 21.02.2016.</p>
          </div>

          <a href="http://www.fluister.org/event/marsen-jules-bjarni-gunnarsson-anne-chris-bakker/">Fluister</a>

        </article>

        <article>

          <div className="date">20.02.2016</div>

          <div className="hr"><hr /></div>

          <h1>Azimuth #0</h1>

          <div className="img-center">
            <a href="https://www.facebook.com/events/932206666887000/">
          <OpacityImage imageUrl= {azimuth} /></a>

          <p>Azimuth #0 concert on the 20th of February in Studio LOOS. This event emphasizes on utilizing spatial (multichannel) location-specific system for performing electroacoustic music. The composers are invited to create or adapt their composition for this system.<br />
          <br />
          The concert will feature works by:<br />
          <br />
          Siamak Anvari<br />
          Peter van Bergen & Johan van Kreij<br />
          Bjarni Gunnarsson<br />
          Theo Horsmeier<br />
          Kees Tazelaar<br />
          <br />
          Studio Loos on the 20th of February at 20:30.</p>
          </div>

          <a href="https://www.facebook.com/events/932206666887000/">Azimuth #0</a>

        </article>

        <article>

          <div className="date">17.02.2016</div>

          <div className="hr"><hr /></div>

          <h1>MiniBEAST, BEASTdome Birmingham ElectroAcoustic Sound Theatre</h1>

          <div className="img-center">
            <a href="http://www.beast.bham.ac.uk/events/minibeast-2-2016-02-17">
          <OpacityImage imageUrl= {MiniBEAST_CC} /></a>

          <p>Erik Nyström curates a miniBEAST session with electronic music projected over the BEASTdome multichannel system. The programme, which features new work by Bjarni Gunnarsson, Erik Nyström, and Lee Fraser, explores sonic and spatial aesthetics beyond received electroacoustic and computer music traditions</p>
          </div>

          <a href="http://www.beast.bham.ac.uk/events/minibeast-2-2016-02-17">miniBEAST</a>

        </article>

          <article>

          <div className="date">16.01.2016</div>

          <div className="hr"><hr /></div>

          <h1>Live Ciné-Concert at Spoutnik Cinema, Genève</h1>

          <div className="img-center">
            <a href="http://spoutnik.info/film/cine-concert-bjarni-gunnarsson-joue-sur-les-courts-metrages-de-cedric-dupire/">
          <OpacityImage imageUrl= {spoutnik} /></a>
          <p>Multichannel, audio-visual performance in with Cedric Dupire at Spoutnik Cinema, Genève</p>

          <p>"Notre collaboration a commencé il y a plusieurs années. À l’origine, une envie d’échange et des territoires communs : les matières, les textures et le mouvement. Un mouvement organique qui travaille le son granulaire et le grain de la pellicule. Un mouvement temporel qui s’affranchit des mesures et des cadences d’obturation.</p>
        <p>Les images et la musique dialoguent, les projets se succèdent, initiés par l’un ou par l’autre : Dried up, O Sal Da Lua a outra experience, Grey Seeds ou Journal Afghan. Les jouer en “live”, c’est maintenir coûte que coûte ce mouvement."</p>
          </div>

          <a hreaf="http://spoutnik.info/film/cine-concert-bjarni-gunnarsson-joue-sur-les-courts-metrages-de-cedric-dupire/">Spoutnik cinema</a>

        </article>

          <article>

          <div className="date">08.01.2016</div>

          <div className="hr"><hr /></div>

          <h1>The San Francisco Tape Music Festival</h1>

          <div className="img-center">
            <a href="http://sfsound.org/tape/">
          <OpacityImage imageUrl= {sanfrantape} /></a>

          <p>Ubieties will be included in the 2016 edition of the The San Francisco Tape Music Festival.</p>

          <p>"America's only festival devoted to the performance of audio works projected in three-dimensional space, The San Francisco Tape Music Festival features four distinct concerts of classic audio art and new fixed media compositions by 32 local and international composers. Hear members of the SF Tape Music Collective, along with guest composers, shape the sound live over a pristine surround system (24 high-end loudspeakers) with the audience seated in complete darkness. It's a unique opportunity to experience music forming - literally - around you."</p>
          </div>
          <div className="img-center">
            <a href="http://sfsound.org/tape/">
          <OpacityImage imageUrl= {sftape} /></a>

         </div>

        </article>

        <article>

          <div className="date">16.12.2015</div>

          <div className="hr"><hr /></div>

          <h1>Rope to the Sky (Anniversary Collection)</h1>

          <div className="img-center">
          <a href="https://ambientblog.bandcamp.com/album/rope-to-the-sky-anniversary-collection">
          <OpacityImage imageUrl= {ambaniv} /></a>
          <p>A new piece 'Series' is included on the Ambientblog anniversary collection.</p>
          <p>The album is a collection of exclusive tracks compiled and mixed on occasion of the 10th anniversary of Ambientblog.net. </p><p>The compilation is released on a limited edition credit card USB. It also exists as a digital release. It contains music by me, Yann Novak, Machinefabriek, Lawrence English, Monty Adkins, Janek Schaefer and many others.</p>
          </div>

        </article>

        <article>

          <div className="date">08.11.2015</div>

          <div className="hr"><hr /></div>

          <h1>Live set at Concertzender Nederland</h1>

            <div className="img-center">
              <a href="http://www.concertzender.nl/kraak-helder-bjarni-gunnarsson/?Voorpagina=true">
          <OpacityImage imageUrl= {concertzender} /></a>
        <p>Kraak Helder LIVE is a special radio-programme dedicated to the top-notch in experimental, electro-acoustic and electronic composers and sound-artists. In 60 minutes, the guests will explore their influences in music and sound in an interview with host Martijn Comes, after which they will do a 40 minute live performance.</p> <p>You are able to attend the show in Utrecht, there are very limited seats available. Please contact martijn.comes@concertzender.nl for reservations.
        http://www.concertzender.nl/ plus on cable in the Netherlands.</p>

          </div>


        </article>

        <article>

          <div className="date">24.10.2015</div>

          <div className="hr"><hr /></div>

          <h1>MGBG and Einóma at Mengi</h1>

           <div className="img-center">
          <OpacityImage imageUrl= {Ship_04_details02_studio_another_day} />
        </div>

         <p>MGBG and Einóma will perform at Mengi on Saturday October 24th.</p>
            <p>The concert will contain one long continous performance featuring both projects as well as solo sections.</p>


            <div className="img-center">
              <a href="http://www.mengi.net">
          <OpacityImage imageUrl= {mgbg4} /></a>

          </div>


        </article>

          <article>

          <div className="date">18.10.2015</div>

          <div className="hr"><hr /></div>

          <h1>Journal Afghan</h1>

            <div className="img-center">

          <a href="http://www.nouveaucinema.ca/fr/films/journal-afghan">
          <OpacityImage imageUrl= {journalb} /></a>

          </div>


          <p>'Journal Afghan' will be premiered at 'Festival Nouveau Cinéma à Montréal' October 18, Montreal, Canada. </p>

          <p>The film is direceted by <a href="http://www.studio-shaiprod.com/blog/">Cédric Dupire</a> and the music composed by me.</p>
          <p>  <a href="http://www.nouveaucinema.ca/fr/films/journal-afghan">Festival Nouveau Cinéma</a></p>


                    <div className="img-center">

          <a href="http://www.nouveaucinema.ca/fr/films/journal-afghan">
          <OpacityImage imageUrl= {journal} /></a>

          </div>

        </article>

        <article>

          <div className="date">01.05.2015</div>

          <div className="hr"><hr /></div>

          <h1>Rewire Festival</h1>

            <div className="img-center">

          <a href="http://www.rewirefestival.nl">
          <OpacityImage imageUrl= {rewire} /></a>

          </div>

          <p>MGBG (Me and Marie Guilleray) will play this years Rewire Festival on the 1+2 March 2015</p>

          <p>Our set will take place at 22:30 on the Friday at the Korzo theater. Other artists performing at the festival include Godspeed You! Black Emperor, Holly Herndon, Grouper, Thomas Ankersmit, Sima Kim, Oren Ambarchi, Stoka Ensemble, Alessandro Cortini, Omer Eilam and many others.</p>
          <p>  <a href="http://www.rewirefestival.nl">Rewire</a></p>

        </article>

        <article>

          <div className="date">07.03.2015</div>

          <div className="hr"><hr /></div>

          <h1>GRM, Présences Électronique</h1>

            <div className="img-center">

          <a href="http://www.inagrm.com/accueil/concerts/pr%C3%A9sences-%C3%A9lectronique">
          <OpacityImage imageUrl= {ina_grm} /></a>

          </div>

          <p>I will play a solo set at this Présences Électronique, organized by GRM and Radio France at le CENTQUATRE on the 6+7+8 March 2015</p>

          <p>My set will feature a new multichannel piece for live electronics and will be performed on the Saturday the 7th. The concert will also feature music by Bernard Parmegiani (1927-2013), Ilpo Väisänen from Pan Sonic and Holly Herndon. Other artists performing at the festival include Antoine Chessex, Pete Swanson, Keith Fullerton Whitman, Esther Venrooy and many others.</p>
          <p>  <a href="http://www.inagrm.com/accueil/concerts/pr%C3%A9sences-%C3%A9lectronique">Présences Électronique</a></p>

        </article>

        <article>

          <div className="date">30.12.2014</div>

          <div className="hr"><hr /></div>

          <h1> MGBG at FALK new years concert </h1>

          <div className="img-center">

          <a href="https://www.facebook.com/events/753077058118135">
          <OpacityImage imageUrl= {mengi} /></a>

          </div> <br />

          <p>Marie Guilleray and me are playing as part of the FALK new years concert on the 30.12. at Mengi, Reykjavík</p>

          <p>
            "MGBG is a duo of voice & electronics which operates in fixed-media electronic music, improvised performances, site specific,
            field-recordings, sound walks."</p>
           <p>  <a href="http://mgbg.net">mgbg.net</a></p>

          <p>"AMFJ is a a one-man power-electronics/industrial noise project from Reykjavík, Iceland.Whether fast and furious, or calm and
          pensive, all shows have intensity in common."</p>

          <p> <a href="amfj1.bandcamp.com">amfj1.bandcamp.com</a></p>

          <p>"KRAKKKBOTs music is an ever evolving beast, incorporating metal, hip hop, diy electronics, feedback systems and pure frequencies in a sludgy dreamscape of nightmare dimensions."</p>

          <p> <a href="krakkkbot.bandcamp.com">krakkkbot.bandcamp.com</a></p>

        </article>

        <article>

          <div className="date">24.10.2014</div>

          <div className="hr"><hr /></div>

          <h1> Sonology at Volkspaleis </h1>

          <div className="img-center">

          <a href="http://www.volkspaleis.org/2014/en#program/sonology">
          <OpacityImage imageUrl= {volkspaleis} /></a>

          </div> <br />

          <p>I will be playing as part of the Sonology programn at the Volkspaleis in Scheveningen on the 24.10.</p>

          <p>
            "The Institute of Sonology at the Royal Conservatoire will present three 45-minute blocks of multi-channel electronic music, ranging from radiophonic work, live electronics, field recordings, improvised music and fixed media compositions.
          </p>
          <p>
             The concert will include works by a.o. Jan Boerman, Raviv Ganchrow, Bjarni Gunnarsson, Marie Guilleray, Johan van Kreij, Visa Kuoppala, Kees Tazelaar,  Gabriel Paiuk and Kacper Ziemianin, The keyword is ‘listening’."
          </p>
            <p>
              <a href="http://www.volkspaleis.org/2014/en#program/sonology">More information here</a>
          </p>

        </article>

        <article>

          <div className="date">18.09.2014</div>

          <div className="hr"><hr /></div>

          <h1> Rewire </h1>

          <div className="img-center">

        <a href="https://www.kickstarter.com/projects/1864803801/rewire-art-x-audio-exhibition-book-and-vinyl-box-s">
          <OpacityImage imageUrl= {rewire_andrea} /></a>

          </div> <br />

          <p>Einóma will be taking part in Andrea Parker's exciting rewire project.</p>

          <p>
            "For 60+ years art has adorned the sleeves of records, a visual expression of what's inside. We're about to Rewire this relationship."
          </p>
          <p>
            Other artists include Cristian Vogel, Luke Vibert, Mike Ladd, Clatterbox, Andrea Parker and many others.
          </p>
            <p>
              <a href="https://www.kickstarter.com/projects/1864803801/rewire-art-x-audio-exhibition-book-and-vinyl-box-s">More information here</a>
          </p>

        </article>

         <article>

          <div className="date">13.06.2014</div>

          <div className="hr"><hr /></div>

          <h1>Audio visual piece at Ephémère</h1>

          <div className="img-center">

          <a href="http://www.tectonicsfestival.com/reykjavik"><OpacityImage imageUrl= {ephemere_series} /></a>

          </div> <br />

          <p>Me and Cedric Dupire will perform a new audio visual piece for the June edition of Ephémère.</p>
          <p>This will be last edition of this years Ephémère series.</p>
          <p>
              <a href="http://www.studioloos.com/category/ephemere">More information here</a>
          </p>

        </article>


        <article>

          <div className="date">12.04.2014</div>

          <div className="hr"><hr /></div>

          <h1>Verlat at Tectonics</h1>

          <a href="http://www.tectonicsfestival.com/reykjavik"><OpacityImage imageUrl= {tectonics} /></a>

          <p>
              I will diffuse a new 8-channel piece, 'Verlat' at the Tectonics festival in Reykjavík. I will be playing on the Saturday evening. Other artists include Alvin Lucier, Dumitrescu/Avram, Grouper and many others.
          </p>
          <p>"Verlat is a 22 minute electroacoustic piece reflecting on different relationships of whole to part. It is composed in 2014 for an 8-channel immersive sound environment."</p>
          <p>
              <a href="http://www.tectonicsfestival.com/reykjavik/about">More information here</a>
          </p>

        </article>

        <article>

          <div className="date">07.03.2014</div>

          <div className="hr"><hr /></div>

          <h1>Einóma at bi.pola.re</h1>

          <a href="http://bi.pola.re"><OpacityImage imageUrl= {bipolare} /></a>

          <p>
              Einóma will be playing at bi.pola.re festival in Toulouse, France. The performance will be in 6 channels with and features a great deal of new material.
          </p>
          <p>Einóma est une collaboration entre deux musiciens et compositeurs islandais, Bjarni Gunnarsson et Steindór Kristinsson . Après avoir sorti deux albums acclamés ainsi que divers 12, remixes et compilation, le duo a récemment mis l'accent sur le live , la création musicale dont les premières impressions peuvent être trouvées sur les dernières releases 'Tvenna ' et Lost & Found. <br />
          Einóma fera un live en spatialisation sonore</p>
          <p>
              <a href="http://bi.pola.re">More information here</a>
          </p>

        </article>

         <article>

          <div className="date">01.03.2014</div>

          <div className="hr"><hr /></div>

          <h1>Processes & Potentials, media</h1>

          <div className="img-center">
          <OpacityImage imageUrl= {L025_Inserts13} />
          </div>

          <p>
         'Processes & Potentials' has been featured in various publications and programs.
          </p>

          <p> Some reviews: </p>

          <p>
          <a href="http://jimmy2hats.wordpress.com/2013/10/21/bjarni-gunnarsson-processes-potentials-2013">Fouter & Swick</a><br />
           <a href="http://www.textura.org/reviews/gunnarsson_mufire.htm">Textura</a><br />
          <a href="http://acloserlisten.com/2013/10/16/bjarni-gunnarsson-processes-potentials">A Closer Listen</a><br />
          <a href="http://thefieldreporter.wordpress.com/2013/10/08/312/">The Field Reporter</a><br />
          <a href="http://nordische-musik.de/4076-Bjarni-Gunnarsson.html">Nordische Musik</a><br />
          <a href="http://www.compulsiononline.com/BjarniGunnarsson_Processes.htm">Compulsion</a><br />
          <a href="http://www.ambientblog.net/blog/2013-10-05/bjarni-gunnarsson-processes-and-potentials#body-anchor">Ambientblog.net</a><br />
            <a href="http://darage-bang.com/bjarni-gunnarsson-processes-potentials/ambient_drone_experimental_chillout_music_reports">Darage-bang.com</a><br />
            <a href="http://www.raftonar.is/bjarni-gunnarsson-processes-potentials">Raftónar</a><br />
            <a href="https://makeyourowntaste.wordpress.com/2013/09">Make Your Own Taste</a><br />
          <a href="http://peterwullen.blogspot.nl/2013/09/bjarni-gunnarsson-processes-and.html">Peter Wullen</a><br />
          </p>

          <p> Radio/Podcasts:</p>

          <p>
          <a href="http://www.mixcloud.com/resonanceghent/resonancefm-cycle/">Resonance.fm</a><br />
          <a href="http://theantidotepodcast.com/2013/11/12/episode-17-rainforest-spiritual-enslavement-mohammad-and-bjarni-gunnarsson/">Theantidotepodcast</a><br />
          <a href="http://media.radio-libertaire.org/php/grille.basic.php?wk=01">Epsilonia</a><br />
          <a href="http://www.francemusique.fr/emission/electrain-de-nuit/2013-2014/electrain-de-nuit-10-20-2013-00-00">Electrain de nuit, France Musique</a><br />
          <a href="http://www.radiocampus.be/playlists/secret-brussels-carte-blanche-la-playlist-16643">Secret Brussels</a><br />
          <a href="http://cod.ckcufm.com/programs/46/14954.html">Acoustic Frontiers</a><br />
          </p>

          <p> It was also among one <a href="http://nordische-musik.de/jahrescharts_autor.php?id_autoren=37&jahr=2013"> of the 'album of the year' entries on NM</a></p>

        </article>

        <article>

          <div className="date">15.02.2014</div>

          <div className="hr"><hr /></div>

          <h1>Einóma at Sónar Reykjavík</h1>

          <a href="http://www.sonarreykjavik.com/en/2014/"><OpacityImage imageUrl= {harpa} /></a>

          <p>
              Einóma will be playing at Sónar Reykjavík. The festival is on the 13th.14th.15th February 2014. We will play late evening on the 15th. Other artists include James Holden, Jon Hopkins, Sachiko M, Ryuichi Sakamoto & Taylor Deupree + many more.
          </p>
          <p>Sónar Reykjavík takes place at one of Europe's most unique concert venues: Harpa.</p>
          <p>
              <a href="http://www.sonarreykjavik.com/en/2014/">More information here</a>
          </p>

        </article>

         <article>

          <div className="date">19.11.2013</div>

          <div className="hr"><hr /></div>

          <h1>Einóma mix on Secret Thirteen</h1>

          <div className="img-center">
          <a href="http://secretthirteen.org/secret-thirteen-mix-096-einoma/"><OpacityImage imageUrl= {Secret_Thirteen_Mix} /></a>
          </div>

          <p>
             “Secret Thirteen Mix 096” is a many-layer and flexible audio collage that smoothly creates a continuous listening experience. The mix contains 43 magnificent pieces released between 1963 and 2012. These tracks influenced Einóma’s past production and indirectly shows their present musical intentions. The fact that such large amount of tracks are played in 1 hour perspective is quite impressive. According to the authors, there are parts where even 3-4 tracks are playing at the time and occasionally creating a sense that you hear semi-remixes, as when different compositions are merged together they slightly change their initial tonality, frequency and consistency. How tracks are thoughtfully stretched or compressed, cut, manipulated and synchronized together to form completely new sound architectures also could be heard."</p><p>"The way how Einóma develops recording’s tension, obscure emotional background’s aura and collision between sometimes even eclectic works is more than striking and clearly shows their longevous musical knowledge and experience. The basis of this mobile mix stands on the cathedral ambiance, cinematic melodic arrangements, pulsatory and very embossed rhythm layers that are related to techno and glitch music styles. A great pleiad of such notable artists as Ryoji Ikeda, Plastikman, Pan Sonic, Bohren & der Club of Gore, KTL, Senking and such authoritative composers as Bernard Parmegiani, Luigi Nono, Giacinto Scelsi, Karlheinz Stockhausen should immediately direct each inquisitive listener to what this mix should be all about: timeless expression of style, sophistication, tradition and progress. Einóma’s previously unreleased music fragments and solo works were also used in this mix."
          </p><br />

          <p><a href="http://secretthirteen.org/secret-thirteen-mix-096-einoma/">Secret-Thirteen-Mix-096-Einoma</a></p>

        </article>

        <article>

          <div className="date">01.10.2013</div>

          <div className="hr"><hr /></div>

          <h1>New album, 'Processes & Potentials'</h1>

          <OpacityImage imageUrl= {inserts} />

          <p>
          Out on <a href="http://3leaves-label.com">3LEAVES</a> on the 01.10.2013.
          </p>

           <p>Processes & Potentials  [3LEAVES 01.10.2013]</p>
            <p>
              01 - Aukera <br />
              02 - Portholes<br />
              03 - Momentaries<br />
              04 - Signac<br />
              05 - Concomittance<br />
              06 - Pedicel<br /></p>
              <p>
              Music by Bjarni Gunnarsson<br />
              Mastering by Erik Nyström<br /><br />

              Images by Cedric Dupire, taken from the book "génocide de fourmis" published by "éditions sans permission" in 2012<br />
              Artwork by Ákos Garai
            </p>

            <p>
            <strong><a href="http://3leaves-label.com/store/index.php?main_page=product_info&cPath=0&products_id=34">[ ORDER ] </a></strong></p>

        </article>

        <article>

          <div className="date">05.06.2013</div>

          <div className="hr"><hr /></div>

          <h1>Einóma will be playing at Kaffibarinn, at the Extreme Chill night on the 05.06.2013</h1>

          <div className="img-center"><OpacityImage imageUrl= {einoma_kaffibarinn} /></div>

        </article>

         <article>

          <div className="date">03.05.2013</div>

          <div className="hr"><hr /></div>

          <h1>Live performance at the 'digital is dead' festival.</h1>

          <OpacityImage imageUrl= {digitalisdead} />

          <p>
            A live set in the gallery of modern art in Oxford, UK.
          </p>

          <p>
          May 2nd 8pm<br />
          Mountains, US // Thrill Jockey<br />
          Tim Hecker, CA // Kranky<br /><br />

          May 3rd 8pm <br />
          Bjarni Gunnarsson, IS // lamadameaveclechien<br />
          BJ Nilsen, SE // Touch<br /><br />

          May 4th 1pm<br />
          Oval lecture & in conversation with Anne Hilde Neset @ Ertegun House<br /><br />

          May 4th 8pm<br />
          Simon Scott, UK // 12K<br />
          Ex-Easter Island Head, UK // Low Point<br />
          Oval, DE // Mille Plateaux<br />

          </p>

          <p>
          More info here <a href="http://digitalisdead.org/">http://digitalisdead.org/</a>
          </p>

        </article>

        <article>

          <div className="date">16.04.2013</div>

          <div className="hr"><hr /></div>

          <h1>'Día de mucho, víspera de nada', version radiophonic on France Culture</h1>

          <div className="img-center"><OpacityImage imageUrl= {dia_de_mucho} /></div>

          <p>Listen direct : http://www.franceculture.fr/player<br />
          Podcast : http://www.franceculture.fr/emission-l-atelier-de-la-creation-dia-de-mucho-vispera-de-nada-2013-04-16</p>

          <p>Réalisation : Isabelle Yhuel<br />
          Direction artistique : Céleste Germe<br />
          Texte : Jacques Albert<br />
          Avec les voix de Maëlys Ricordeau et Jacques Albert<br />
          Composition sonore : Jacob Stambach et Bjarni Gunnarsson<br />
          Prise de son et mixage : Philippe Palarès<br /><br />

        “Le vent est tombé, je crie Hélène je continue à crier pendant une bonne dizaine de minutes sans m’interrompre pour reprendre mon souffle, une sirène un phare un point de ralliement une ancre une alarme”
        Laponie suédoise. On marche pour le plaisir avec des skis et une pulka. Hélène et Jean s’aiment et se le montrent. Puis, le monde s’éloigne, s’estompe, dans le blanc du blizzard et dans la tempête, dans la folie.
        Avec Día de mucho, víspera de nada, Das Plateau - collectif de théâtre contemporain - propose une divagation sonore, une zone de doute ou de frottement, entre fiction dramatique et abstraction lyrique.
          </p>

        </article>

        <article>

          <div className="date">09.04.2013</div>

          <div className="hr"><hr /></div>

          <h1>Fallacies at 'Composing Spaces' symposium</h1>

          <OpacityImage imageUrl= {composingSpaces} />

          <p>
          "Music for loudspeakers in the concert hall will be covered during a five-day symposium at the Institute of Sonology with lectures, discussions, workshops and concerts. A number of different systems for spatial reproduction of electro-acoustic music such as the WFS system from The Game of Life, and the Acousmonium from GRM will be set up in the in de Arnold Schönbergzaal. As well as fixed media and live compositions, sound art and field recordings by students and componisers of the present generation, there will be works including those of Jan Boerman, Luigi Nono and Iannis Xenakis on the programme."
          </p>

          <p>My piece 'Fallacies' with Miguel Negrão will be diffused in the WFS system on the Thursday night.</p>

        </article>

        <article>

          <div className="date">18.10.2012</div>

          <div className="hr"><hr /></div>

          <h1>Grey Seeds at LUFF</h1>

          <OpacityImage imageUrl= {gsluff} />

            <span class="quote">"The physical imprint of nature in images and sound provides an astonishing microcosm."</span>

            <p>
            The film 'Grey Seeds' by Cédric Dupire and me will be presented at <a class="bgLink" href="http://www.luff.ch/fr/2012/programme/"> LUFF, the Lausanne underground film & music festival</a>.<br /><br /> It will take part in the short film competition and shown in Cinéma Oblò at 18:10 and 20.10 on the 18th of October.<br /><br />LUFF, is a film festival and music festival devoted to underground film and music. It is held each year in Lausanne, Switzerland. The festival rests on a not-for-profit group with an artistic mission. The primary goal of the LUFF is to present films that are generally unknown to the mainstream public, often experimental films. Films are screened during the day and evening, followed by live events featuring experimental music at night.
            </p>

        </article>

        <article>

          <div className="date">16.10.2012</div>

          <div className="hr"><hr /></div>

          <h1>Acoustic Aclhemy in London</h1>

          <OpacityImage imageUrl= {Sonogram} />

            <p>
              Acousmatic concert at <a class="bgLink" href="http://www.city.ac.uk/events/2012/october/acousmatic-concert-alchemy-and-the-transmutation-of-sonic-matter">City University</a><br /><br />
              Bernard Parmegiani - 'La Roue Ferris' (10’40’’)<br />
              Marie Guilleray & Bjarni Gunnarsson - 'L'imaginaire du Parleur' (8 channels, 12’36’’)<br />
              Erik Nyström - 'Lucent Voids' (8 channels, 20'00")<br /><br />

              -Interval-<br /><br />

              Georgia Rodgers - 'Make it Snappy' (6'30")<br />
              Peiman Khosravi - 'Vertex' (6 channels, 15'00")<br /><br />

              Performance Space, College Building, City University London, St John Street, EC1V 4PB<br />
            </p>

        </article>

        <article>

          <div className="date">04.10.2012</div>

          <div className="hr"><hr /></div>

          <h1>MGBG Studio Loos presentation</h1>

          <OpacityImage imageUrl= {mgbgResidency} />

          <p>
              Presentation of work made during a week-long residency at Loos where the idea was to explore a live aspect of our collaboration with voice and electronics but also in other configurations. <br /><br />
              Some music of our recent album Korabie will also be featured as well as solo work from both created especially for this occasion.<br /><br />
              <a class="bgLink" href="http://www.studioloos.com/residencies">Studio Loos Residencies</a>
          </p>

        </article>

        <article>

          <div className="date">20.09.2012</div>

          <div className="hr"><hr /></div>

          <h1>Einóma @ Todays Art</h1>

          <OpacityImage imageUrl= {todaysart} />

          <p>
            Einóma will play at the <a class="bgLink" href="http://todaysart.org/2012/"> Todays Art festival</a> on Saturday 22 September at 01:15~02:15 in the Lucent Danstheater, Den Haag.<br /><br />
            TodaysArt is a festival concept that revolves around the presentation and development of adventurous contemporary visual and performing arts.<br /><br /> "On 21 and 22 September, over 100 international acts and artists will converge in the city center of The Hague to treat the visitors to large-scale projects, world premieres and compelling acts and exhibitions that will flow together into an adventurous and unforgettable experience. From electronic music and club nights to interactive installations, from audiovisual modern dance to neo-classical concerts, from contemporary media art from Turkey to a 3-day symposium on art and society, TodaysArt is all about a voyage of discovery through the latest work and thoughts of groundbreaking contemporary thinkers."
          </p>

        </article>

        <article>

          <div className="date">28.10.2012</div>

          <div className="hr"><hr /></div>

          <h1>Lecture at UNM 2012</h1>

          <OpacityImage imageUrl= {unm} />

          <p>
          I will be giving a lecture at the <a class="bgLink" href="http://unm.is/">UNM music festival</a>, a festival of young Nordic composers which will be held in Reykjavík 28th of August – 1st of September 2012. <br /><br />
          This year’s festival is dedicated to Music Innovation where Lectures and Workshops on the topic of innovation in instrumentation and performance are held during the festival.
          <br /><br />
          My talk will focus on strategies for composing real-time electronic music. It is motivated by an interest in problems concerning the interaction and relationships between materials and processes and their influence on development and form. Different  processes  create  musical  compositions  and  an  associative approach will be discussed where the aim is to relate these various aspects. A compositional environment implementing these ideas will be introduced along with a discussion of  music inspired by them.
          </p>

        </article>

        <article>

          <div className="date">10.08.2012</div>

          <div className="hr"><hr /></div>

          <h1>Competition Destellos</h1>

          <OpacityImage imageUrl= {destellos} />

          <p>
          My piece 'Aukera' has been nominated by the Grand Jury of the <a class="bgLink" href="http://www.fundestellos.org/pageone.htm">Competition Destellos 2012.</a><br /><br />
          The competition, created by initiative of Dr. Elsa Justel, has as main objectives to stimulate creators and promote one of the most representative musical expressions of our time. <br /><br />
          The members of the jury were: Trevor Wishart (UK), Luigi Ceccarelli (it), Elizabeth Hoffman (UE), Luis Naon (AR-fr), José Manuel Berenguer (Spain), Eric Broitman and Vincent Laubeuf (Motus-France).
          </p>

        </article>

        <article>

          <div className="date">14.06.2012</div>

          <div className="hr"><hr /></div>

          <h1>LMALC compilation</h1>

          <OpacityImage imageUrl= {cheryl} />

          <p>New LMALC compilation released with works by Me & Jaike Stambach, Einóma and many others.<br /><br />
          </p>
          <p>
            "After 2 years of obscure activity, Belgiums Lamadameaveclechien imprint is back with an outstanding compilation of rather gloomy tracks from former LMALC artists and new projects that emerged around the same people. Most of the tracks are choosen and compiled out of older material which has been sent to the label between 2002 and 2011.
            Stricly limited to 225 copies with unique handmade artwork, the tape comes along with a download voucher."<br /><br />
            <iframe width="400" height="100" style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/v=2/track=2886677352/size=venti/bgcol=333333/linkcol=FFFFFF/" allowtransparency="true" frameborder="0"><a href="http://lamadameaveclechien.bandcamp.com/track/wall">Wall by Bjarni Gunnarsson &amp; Jaike Stambach</a></iframe>
            <br /><br />
            <iframe width="400" height="100" style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/v=2/track=3021810076/size=venti/bgcol=333333/linkcol=FFFFFF/" allowtransparency="true" frameborder="0"><a href="http://lamadameaveclechien.bandcamp.com/track/orgel">Orgel by Einóma</a></iframe>
            <br />
            <a class="bgLink" href="http://www.lamadameaveclechien.com/Joomla/index.php?option=com_content&view=article&id=87%3Adog010&catid=36%3Apages-releases&Itemid=2">
            DOG010 / V.A. - Soundtrack to the End of the World</a>
          </p>

        </article>

        <article>

          <div className="date">22.05.2012</div>

          <div className="hr"><hr /></div>

          <h1>'O Sal Da Lua' at the Côté court festival</h1>

          <div className="img-center"><OpacityImage imageUrl= {osal} /></div>

          <p>
          The film 'O Sal Da Lua, A outra experiência' by Cédric Dupire and Cristiana Miranda will be screened at the <a class="bgLink" href="http://www.cotecourt.org/">Côté court festival</a> in the competition of 'Expérimental – Essai – Art vidéo'.
          <br /><br />
          The music in the film was composed by me and has been nominated for the SACEM price for the best original soundtrack.
          <br /><br />
          The festival will take place at the Ciné 104 space in Pantin et en Seine-Saint-Denis, Paris from the 6 to 16 of June.
          </p>

        </article>

        <article>

          <div className="date">14.06.2012</div>

          <div className="hr"><hr /></div>

          <h1>'Fallacies' in Sonar, Barcelona</h1>

          <div className="img-center"><OpacityImage imageUrl= {wfsSonar} /></div>

          <p>The Wave Field Synthesis system will be shown in the 2012 <a class="bgLink" href="http://www.sonar.es">Sonar Festival</a> in Barcelona from the 14th to 16th of June. <br /><br /> It will reside at the MACBA museum during Sonar. The piece 'Fallacies' by me and Miguel Negrão will be played as well as pieces by Trevor Wishart, Ji Youn Kang, Erik Nystrom, Barbara Ellison, Iannis Xenakis and others.
          </p>

        </article>

      </div>
    </div>

  }
}

export default Current;
