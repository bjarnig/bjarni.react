import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import works from '../../data/works.json';

function Works() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const compositionsStyle = { float: 'right' };

  return (
      <div className="container">
        <SEO
          title="Catalog of Works - Bjarni Gunnarsson"
          description="Complete catalog of compositions, releases, writings, and performances by Bjarni Gunnarsson — process-based electronic music and algorithmic composition."
          path="/works"
        />
        <div className="content prose">
          <ul className="nav nav-pills">
            <li><Link to="/about">bio</Link></li>
            <li className="active"><Link to="/works">catalog</Link></li>
          </ul>
          <div className="hr"><hr /></div>

          <div className="row">
            <div className="col-lg-12">
              <div className="date" style={compositionsStyle}>Compositions</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Duration</th>
                    <th>Format (channels)</th>
                    <th>Release</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((w) => (
                    <tr key={w.slug}>
                      <td>
                        {w.link
                          ? <a href={w.link} target="_blank" rel="noopener noreferrer">{w.title}</a>
                          : w.title}
                        {w.collaborator && <span className="with"> with {w.collaborator}</span>}
                      </td>
                      <td>{w.year}</td>
                      <td>{w.duration}</td>
                      <td>{w.format}</td>
                      <td>
                        {w.release
                          ? (w.releaseLink
                              ? <a href={w.releaseLink} target="_blank" rel="noopener noreferrer">{w.release}</a>
                              : w.release)
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div><br />
      <div className="row">
          <div className="col-lg-12">
              <div className="date" style={compositionsStyle}>Releases</div>
              <table className="table">
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>Label</th>
                          <th>Date</th>
                          <th>Project</th>
                          <th>Format</th>
                      </tr>
                  </thead>
                  <tbody>
                  <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics"> UPICS</a></td>
                          <td> <a href="https://flagdayrecordings.bandcamp.com"> Flag Day Recordings </a></td>
                          <td>2023</td>
                          <td>Album</td>
                          <td>CD / Digital</td>
                      </tr>
                       <tr>
                          <td><a href="https://playneutral.bandcamp.com/album/ukraine-appeal"> Ukraine Appeal </a></td>
                          <td> <a href="https://playneutral.bandcamp.com"> PLAYNEUTRAL </a></td>
                          <td>2022</td>
                          <td>Compilation</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines"> Anticlines </a></td>
                          <td> <a href="https://playneutral.bandcamp.com"> PLAYNEUTRAL </a></td>
                          <td>2021</td>
                          <td>Album</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/album/fracas"> Fracas </a></td>
                          <td> <a href="https://superpang.bandcamp.com/"> SUPERPANG </a></td>
                          <td>2021</td>
                          <td>Album</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://sovnrecords.bandcamp.com/album/music-for-queuing-at-the-supermarket"> Music for queuing at the supermarket </a></td>
                          <td> <a href="https://sovnrecords.bandcamp.com"> SØVN </a></td>
                          <td>2021</td>
                          <td>Compilation</td>
                          <td>K7 / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://superpang.bandcamp.com/album/tour-mode"> Tour Mode </a></td>
                          <td> <a href="https://superpang.bandcamp.com"> SUPERPANG </a></td>
                          <td>2021</td>
                          <td>Solo</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://sovnrecords.bandcamp.com/album/cendres"> Cendres </a></td>
                          <td> <a href="https://sovnrecords.bandcamp.com"> SØVN </a></td>
                          <td>2020</td>
                          <td>Solo</td>
                          <td>K7 / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/album/volume-void"> Volume and Void </a></td>
                          <td> <a href="https://superpang.bandcamp.com"> SUPERPANG </a></td>
                          <td>2020</td>
                          <td>Solo</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://crxssings.bandcamp.com"> CRXSSINGS (fundraiser for City Plaza) </a></td>
                          <td>-</td>
                          <td>2019</td>
                          <td>Compilation</td>
                          <td>Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur</a></td>
                          <td><a href="https://tartarugarecords.bandcamp.com">Tartaruga Records</a></td>
                          <td>2018</td>
                          <td>Solo</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                    <tr>
                        <td><a href="https://hisolat.bandcamp.com/album/various-artists-one-2">Various Artists One</a></td>
                        <td><a href="https://hisolat.bandcamp.com">Hisolat Records</a></td>
                        <td>2018</td>
                        <td>Solo</td>
                        <td>K7 / Digital</td>
                    </tr>
                      <tr>
                          <td><Link to="/paths">Paths</Link></td>
                          <td><a href="http://www.grannyrecords.org">Granny Records</a></td>
                          <td>2016</td>
                          <td>Solo</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><Link to="/processes">Processes &amp; Potentials</Link></td>
                          <td><a href="https://www.3leaves-label.com">3 Leaves</a></td>
                          <td>2013</td>
                          <td>Solo</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006-2009</a></td>
                          <td><a href="https://www.discogs.com/label/115857-Lamadameaveclechien">LMALC</a></td>
                          <td>2010</td>
                          <td>Solo</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://mgbg.bandcamp.com">Korabie</a></td>
                          <td>-</td>
                          <td>2011</td>
                          <td>MGBG</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://ambientblog.bandcamp.com/album/rope-to-the-sky-anniversary-collection">Rope to the Sky</a></td>
                          <td>-</td>
                          <td>2015</td>
                          <td>Compilation</td>
                          <td>USB stick / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/lost-found">Lost &amp; Found</a></td>
                          <td><a href="http://shipwrec.org">ShipWrec</a></td>
                          <td>2011</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/tvenna">Tvenna</a></td>
                          <td><a href="https://www.discogs.com/label/115857-Lamadameaveclechien">LMALC</a></td>
                          <td>2010</td>
                          <td>Einóma</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/encam">Encam</a></td>
                          <td><a href="https://www.discogs.com/label/53763-Trachanik-Records">Trachanik</a></td>
                          <td>2006</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/milli-t-nverka">Milli Tónverka</a></td>
                          <td><a href="https://www.discogs.com/label/1626-Vertical-Form">Vertical Form</a></td>
                          <td>2003</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/undir-feiln-tum">Undir Feilnótum</a></td>
                          <td><a href="https://www.discogs.com/label/1626-Vertical-Form">Vertical Form</a></td>
                          <td>2002</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://einoma.bandcamp.com/album/floating-point-by-zero">Floating Point By Zero</a></td>
                          <td><a href="https://www.discogs.com/label/7287-Uniform-Recordings">Uni:form</a></td>
                          <td>2001</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="http://www.touchinbass.com/record-shop/rewire-part-a-tb046">Rewire</a></td>
                          <td><a href="http://www.touchinbass.com">Touchin'Bass</a></td>
                          <td>2015</td>
                          <td>Einóma</td>
                          <td>Vinyl / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://www.discogs.com/Various-42-More-Things-To-Do-In-Zero-Gravity-Part-One/release/92024">Various - 42 More Things To Do In Zero Gravity / Part One</a></td>
                          <td><a href="https://www.discogs.com/label/7287-Uniform-Recordings">Uni:form</a></td>
                          <td>2002</td>
                          <td>Einóma</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://lamadameaveclechien.bandcamp.com/album/dog010-soundtrack-to-the-end-of-the-world">Soundtrack To The End Of The World</a></td>
                          <td><a href="https://www.discogs.com/label/115857-Lamadameaveclechien">LMALC</a></td>
                          <td>2012</td>
                          <td>Einóma &amp; BG with Jaike Stambach</td>
                          <td>K7 / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="https://www.discogs.com/Traject-Strengir-Hrynja/master/92042">Traject ‎– Strengir Hrynja</a></td>
                          <td><a href="https://www.discogs.com/label/1626-Vertical-Form">Spezialmaterial</a></td>
                          <td>2004</td>
                          <td>Einóma</td>
                          <td>Vinyl &amp; CD</td>
                      </tr>
                      <tr>
                          <td><a href="https://www.discogs.com/Smyglyssna-We-Can-Fix-It-Remixes/master/33288">Smyglyssna ‎– We Can Fix It</a></td>
                          <td><a href="https://www.discogs.com/label/1626-Vertical-Form">Vertical Form</a></td>
                          <td>2003</td>
                          <td>Einóma</td>
                          <td>Vinyl &amp; CD</td>
                      </tr>
                      <tr>
                          <td><a href="https://www.discogs.com/Trabant-Enter-Spacebar-Remixes/release/109195">Trabant ‎– Enter Spacebar</a></td>
                          <td><a href="https://www.discogs.com/label/1800-TMT-Entertainment">TMT Entertainment</a></td>
                          <td>2001</td>
                          <td>Einóma</td>
                          <td>CD</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div><br />

      <div className="row">
          <div className="col-lg-12">
              <div className="date" style={compositionsStyle}>Writings</div><br /><br /><br />
              <table className="table">
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>Date</th>
                          <th>Publication</th>
                          <th>Research Catalogue</th>
                          <th>Link</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Selective Retention: Composing through Queries and Graphs</td>
                          <td>2025</td>
                          <td><a href="https://www.jar-online.net/en/issues/36">The Journal for Artistic Research (JAR), Issue 36</a></td>
                          <td><a href="https://www.researchcatalogue.net/view/2938321/3620117">RC</a></td>
                          <td><a href="https://www.jar-online.net/en/issues/36">JAR</a></td>
                      </tr>
                      <tr>
                          <td>Recomposing Data: Machine Learning As Compositional Process</td>
                          <td>2025</td>
                          <td><a href="https://researchplatform.art/people/bjarni-gunnarsson/">KC Research Group, 2025</a></td>
                          <td>-</td>
                          <td><a href="https://www.researchcatalogue.net/view/2532879/2532880">Research Catalogue</a></td>
                      </tr>
                      <tr>
                          <td>Balancing Behaviours</td>
                          <td>2023</td>
                          <td><a href="https://echo.orpheusinstituut.be/article/balancing-behaviours">ECHO journal by Orpheus Instituut</a></td>
                          <td>-</td>
                          <td><a href="https://echo.orpheusinstituut.be/article/balancing-behaviours">ECHO</a></td>
                      </tr>
                      <tr>
                          <td>Synthesis and Operation Flows</td>
                          <td>2021</td>
                          <td><a href="https://2021.xcoax.org/papers2/">xCoAx 2021 Proceedings, 2021</a></td>
                          <td>-</td>
                          <td><a href="https://www.academia.edu/50027204/Synthesis_and_Operation_Flows">Academia.edu</a></td>
                      </tr>
                      <tr>
                          <td>Implementing Koenig’s Project 2</td>
                          <td>2021</td>
                          <td><a href="https://www.koncon.nl/onderzoek/lectoraten">Koncon Lectorate and Research</a></td>
                          <td><a href="https://www.researchcatalogue.net/view/1081939/1081944">RC</a></td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>Context and Scope</td>
                          <td>2019</td>
                          <td><a href="https://www.koncon.nl/onderzoek/lectoraten">Koncon Lectorate and Research</a></td>
                          <td><a href="https://www.researchcatalogue.net/view/540350/540351">RC</a></td>
                          <td><a href="https://www.academia.edu/50027151/Context_and_Scope">Academia.edu</a></td>
                      </tr>
                      <tr>
                          <td>Interrupts and Intervention</td>
                          <td>2018</td>
                          <td><a href="http://cyprusconferences.org/smc2018/">SMC2018 Conference, Cyprus</a></td>
                          <td><a href="https://www.researchcatalogue.net/view/543155/543156">RC</a></td>
                          <td><a href="https://www.academia.edu/50026453/Interrupts_and_Intervention">Academia.edu</a></td>
                      </tr>
                      <tr>
                          <td>Processes and Potentials</td>
                          <td>2013</td>
                          <td><a href="http://sonology.org/">Institute of Sonology</a></td>
                          <td>-</td>
                          <td><a href="https://www.academia.edu/50016473/Processes_and_Potentials">Academia.edu</a></td>
                      </tr>
                </tbody>
                </table>
                </div>
      </div>
      <br />

      <div className="row">
          <div className="col-lg-12">
              <div className="date" style={compositionsStyle}>Selected Performances</div>
              <table className="table performances">
                  <thead>
                      <tr>
                          <th>Event</th>
                          <th>Venue</th>
                          <th>Location</th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="performance">Lectorate Presentation</td>
                          <td>Amare</td>
                          <td>Den Haag, Netherlands</td>
                          <td>07.02.2025</td>
                      </tr>
                      <tr>
                          <td className="performance">Live at De Keuken</td>
                          <td>De Keuken</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.01.2025</td>
                      </tr>
                      <tr>
                          <td className="performance">Joint Research Day 2024</td>
                          <td>Royal Academy of Art & Royal Conservatoire</td>
                          <td>Den Haag, Netherlands</td>
                          <td>22.11.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">The Hague International Sound Art Festival</td>
                          <td>Zaal3 / STUDIO LOOS</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.10.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Colloquium</td>
                          <td>Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>10.10.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">To Listen To festival</td>
                          <td>Festival of experimental listening</td>
                          <td>Turin, Italy</td>
                          <td>04.10.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">AIMC 2024</td>
                          <td>University of Oxford</td>
                          <td>Oxford, UK</td>
                          <td>09.09.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">Adela festival</td>
                          <td>Kino Šiška</td>
                          <td>Ljubljana, Slovenia</td>
                          <td>01.06.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Discussion Concert 4</td>
                          <td>Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>17.04.2024</td>
                      </tr>
                      <tr>
                          <td className="performance">IIL Open Lab</td>
                          <td>Intelligent Instruments Lab</td>
                          <td>Reykjavík, Iceland</td>
                          <td>03.11.2023</td>
                      </tr>
                      <tr>
                          <td className="performance">ICLC 2023</td>
                          <td>EKKO</td>
                          <td>Utrecht, Netherlands</td>
                          <td>20.04.2023</td>
                      </tr>
                      <tr>
                          <td className="performance">Moving Downstairs</td>
                          <td>The Grey Space</td>
                          <td>Den Haag, Netherlands</td>
                          <td>19.11.2022</td>
                      </tr>
                      <tr>
                          <td className="performance">WFS Festival</td>
                          <td>New Music Lab at Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>03.06.2022</td>
                      </tr>
                      <tr>
                          <td className="performance">xCoAx 2021</td>
                          <td>xCoAx Conference</td>
                          <td>Graz, Austria</td>
                          <td>16.07.2021</td>
                      </tr>
                      <tr>
                          <td className="performance">Puls binaural stream concerts</td>
                          <td>Electric Audio Unit & Audiorama</td>
                          <td>Online</td>
                          <td>22.08.2021</td>
                      </tr>
                      <tr>
                          <td className="performance">Tonband festival 2021</td>
                          <td>Electric Audio Unit</td>
                          <td>Gothenburg, Sweden</td>
                          <td>25.10.2021</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Staff Concert</td>
                          <td>Arnold Schoenbergzaal</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.12.2021</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonix #9</td>
                          <td>Sonix #9</td>
                          <td>Brno, Czech Republic</td>
                          <td>21.02.2020</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Concert #1</td>
                          <td>KC / Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>29.01.2020</td>
                      </tr>
                      <tr>
                          <td className="performance">RASK #2</td>
                          <td>Loft Hostel & Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>28.12.2019</td>
                      </tr>
                      <tr>
                          <td className="performance">Concert Institut de Sonologie de La Haye @ GRM</td>
                          <td>Akousma, Mpaa Saint-germain</td>
                          <td>Paris, France</td>
                          <td>18.10.2019</td>
                      </tr>
                      <tr>
                          <td className="performance">Music, Humans and Machines (ODC 2019)</td>
                          <td>Orpheus Institute</td>
                          <td>Ghent, Belgium</td>
                          <td>22.05.2019</td>
                      </tr>
                      <tr>
                          <td className="performance">Simulation and Computer Experimentation</td>
                          <td>Orpheus Institute</td>
                          <td>Ghent, Belgium</td>
                          <td>21.03.2019</td>
                      </tr>
                      <tr>
                          <td className="performance">Lectorate - Festive Presentation</td>
                          <td>Royal Conservatory, The Hague</td>
                          <td>Den Haag, Netherlands</td>
                          <td>25.01.2019</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Concert #1</td>
                          <td>KC / Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>21.09.2018</td>
                      </tr>
                    <tr>
                        <td className="performance">Sound and Music Computing 2018</td>
                        <td>SMC2018</td>
                        <td>Limasol, Cyprus</td>
                        <td>06.07.2018</td>
                    </tr>
                    <tr>
                        <td className="performance">ARC (art_research_convergence) kickoff</td>
                        <td>ARC kickoff</td>
                        <td>Den Haag, Netherlands</td>
                        <td>02.07.2018</td>
                    </tr>
                    <tr>
                        <td className="performance">Azimuth #6 Weekender</td>
                        <td>iii @WD4X</td>
                        <td>Den Haag, Netherlands</td>
                        <td>24.03.2018</td>
                    </tr>
                      <tr>
                          <td className="performance">Solo Live set at Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.11.2017</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology, discussion concert 4</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>22.03.2017</td>
                      </tr>
                      <tr>
                          <td className="performance">Vulkaanuitbarsting</td>
                          <td>Extrapool</td>
                          <td>Nijmegen, Netherlands</td>
                          <td>05.11.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">Forum of new music</td>
                          <td>Janáček Academy of Music and Performing Arts</td>
                          <td>Brno, Czech Republic</td>
                          <td>11.10.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology, first years festival</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.09.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> Côté court festival</td>
                          <td>CINÉ 104</td>
                          <td>Paris, France</td>
                          <td>20.06.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>09.06.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> Segnali Festival</td>
                          <td>Cinema PostModernissimo</td>
                          <td>Perugia, Italy.</td>
                          <td>07.05.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Showlab</td>
                          <td>De Vinger</td>
                          <td>Den Haag, Netherlands</td>
                          <td>26.03.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> Fluister</td>
                          <td>De Helling</td>
                          <td>Utrecht, Netherlands</td>
                          <td>21.02.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> Azimuth #0</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.02.2016</td>
                      </tr>
                      <tr>
                          <td className="performance"> MiniBEAST</td>
                          <td>Birmingham ElectroAcoustic Sound Theatre</td>
                          <td>Birmingham, UK</td>
                          <td>17.02.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">Live Ciné-Concert</td>
                          <td>Spoutnik Cinema</td>
                          <td>Genève, Switzerland</td>
                          <td>16.01.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">The San Francisco Tape Music Festival</td>
                          <td>SFTMC</td>
                          <td>San Francisco, USA</td>
                          <td>08.01.2016</td>
                      </tr>
                      <tr>
                          <td className="performance">Kraak Helder</td>
                          <td>Concertzender Nederland</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.11.2015</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG & Einóma</td>
                          <td>Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>08.11.2015</td>
                      </tr>
                      <tr>
                          <td className="performance">Rewire Festival</td>
                          <td>Korzo Theater</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.05.2015</td>
                      </tr>
                      <tr>
                          <td className="performance">Présences Électronique</td>
                          <td>Centquatre</td>
                          <td>Paris, France</td>
                          <td>07.03.2015</td>
                      </tr>
                      <tr>
                          <td className="performance">FALK new years concert</td>
                          <td>Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>30.12.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology at Volkspaleis</td>
                          <td>Volkspaleis</td>
                          <td>Den Haag, Netherlands</td>
                          <td>24.10.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.06.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">Tectonics</td>
                          <td>Harpa</td>
                          <td>Reykjavík, Ísland</td>
                          <td>12.04.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">bi.pola.re</td>
                          <td>Mix Arts Myrys</td>
                          <td>Toulouse, France</td>
                          <td>07.03.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">Sónar</td>
                          <td>Harpa</td>
                          <td>Reykjavík, Ísland</td>
                          <td>15.02.2014</td>
                      </tr>
                      <tr>
                          <td className="performance">Extreme Chill</td>
                          <td>Kafffibarinn</td>
                          <td>Reykjavík, Ísland</td>
                          <td>05.06.2013</td>
                      </tr>
                      <tr>
                          <td className="performance">Digital is dead</td>
                          <td>Gallery of modern art </td>
                          <td>Oxford, UK</td>
                          <td>03.05.2013</td>
                      </tr>
                      <tr>
                          <td className="performance">'Composing Spaces' symposium</td>
                          <td>Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>09.04.2013</td>
                      </tr>
                      <tr>
                          <td className="performance">LUFF</td>
                          <td>Cinéma Oblò</td>
                          <td>Lausanne, Switzerland</td>
                          <td>18.10.2012</td>
                      </tr>
                      
                      <tr>
                          <td className="performance">MGBG Residency Concert</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>04.10.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">Today's Art</td>
                          <td>TodaysArt</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.09.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">UNM 2012</td>
                          <td>LHÍ</td>
                          <td>Reykjavík, Ísland</td>
                          <td>28.10.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonar</td>
                          <td>MACBA</td>
                          <td>Barcelona, Spain</td>
                          <td>14.06.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">Final Concert</td>
                          <td>Korzo Theater </td>
                          <td>Den Haag, Netherlands</td>
                          <td>12.06.2012</td>
                      </tr>
                      <tr>
                          <td className="performance"> LMALC night</td>
                          <td>Les ateliers claus</td>
                          <td>Bruxelles, Belgium</td>
                          <td>11.05.2012</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>18.04.2012</td>
                      </tr>
                      <tr>
                          <td className="performance"> WFS concert</td>
                          <td>ANNA@KV20</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.03.2012</td>
                      </tr>
                      <tr>
                          <td className="performance"> Comme un lundi</td>
                          <td>Bar du matin</td>
                          <td>Bruxelles, Belgium</td>
                          <td>09.01.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">Freemote festival</td>
                          <td>Nudigital/Borndigital</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.12.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Freemote festival</td>
                          <td>Nudigital/Borndigital</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.12.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Sonology Concert</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>17.11.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.11.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG concert release</td>
                          <td>Souffle Continue</td>
                          <td>Paris, France</td>
                          <td>11.10.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG live</td>
                          <td>Gallery Abilene</td>
                          <td>Bruxelles, Berlgium</td>
                          <td>20.04.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">LIVEWIRE festival</td>
                          <td>University of Maryland</td>
                          <td>Baltimore, USA</td>
                          <td>09.10.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.10.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> Lost Theory festival</td>
                          <td>Deringaj</td>
                          <td>Croatia</td>
                          <td>17.08.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> ICMC </td>
                          <td>University of Huddersfield</td>
                          <td>Huddersfield, UK</td>
                          <td>01.08.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG live</td>
                          <td>After Mars der Beschaving</td>
                          <td>Den Haag, Netherlands</td>
                          <td>26.06.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>23.06.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> SSSP </td>
                          <td>De Montfort University</td>
                          <td>Leicester, UK</td>
                          <td>09.06.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>24.05.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG live</td>
                          <td>Trashvortex series</td>
                          <td>Paris, France</td>
                          <td>30.04.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> CASS Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>28.03.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> CCRMT </td>
                          <td>McGill University</td>
                          <td>Montreal, Canada</td>
                          <td>15.03.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>10.03.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> BEAST Festival </td>
                          <td>Birmingham University</td>
                          <td>Birmingham, UK</td>
                          <td>02.03.2011</td>
                      </tr>
                      <tr>
                          <td className="performance"> LMALC living room concerts</td>
                          <td>Rue Alphonse Hottat</td>
                          <td>Bruxelles, Belgium</td>
                          <td>22.02.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Monophonic</td>
                          <td>330 Live</td>
                          <td>Den Haag, Netherlands</td>
                          <td>18.02.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Icelandic Music Days</td>
                          <td>Zaal 100</td>
                          <td>Amsterdam, Netherlands</td>
                          <td>08.02.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>10.02.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">WFS Concert</td>
                          <td>Scheltema Complex</td>
                          <td>Leiden, Netherlands</td>
                          <td>10.02.2011</td>
                      </tr>
                      <tr>
                          <td className="performance">Einóma livet</td>
                          <td>Cramers</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.12.2012</td>
                      </tr>
                      <tr>
                          <td className="performance">STRP festival</td>
                          <td>STRP</td>
                          <td>Eindhoven, Netherlands</td>
                          <td>24.11.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">Einóma live </td>
                          <td>Pure magnetic</td>
                          <td>Den Haag, Netherlands</td>
                          <td>23.11.2010</td>
                      </tr>
                      <tr>
                          <td className="performance"> CASS Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>28.10.2010</td>
                      </tr>
                      <tr>
                          <td className="performance"> Z-zondag </td>
                          <td>Villa Ockenburgh</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.10.2010</td>
                      </tr>
                      <tr>
                          <td className="performance"> SuperCollider Symposium</td>
                          <td>TU Berlin</td>
                          <td>Berlin, Germany</td>
                          <td>22.09.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">MGBG live</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>22.09.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">Einóma live</td>
                          <td>Pipp</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.06.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">FESTIVAL 360</td>
                          <td> LILAS EN SCENE</td>
                          <td> Les Lilas, France</td>
                          <td>03.06.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">LMALC livingroom concerts</td>
                          <td>LMALC studios</td>
                          <td>Bruxelles, Belgium</td>
                          <td>06.04.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">Einóma live</td>
                          <td>Bazaar Club</td>
                          <td>Bruxelles, Belgium</td>
                          <td>03.04.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">Wonderwerp</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>05.03.2010</td>
                      </tr>
                      <tr>
                          <td className="performance">Wonderwerp</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>05.03.2010</td>
                      </tr>
                      <tr>
                          <td className="performance"> Sonology Concert</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>15.01.2010</td>
                      </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Works;
