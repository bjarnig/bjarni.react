import React, { Component } from 'react';

class Works extends Component {

  constructor(props) {
    super(props);
    this.state = { compositionsStyle:{ float: 'right' } };
  }

  componentDidMount() { window.scrollTo(0, 0) };

  render() {
    return (
      <div className="container">
        <div className="content">
          <ul className="nav nav-pills">
            <li><a href="/about">bio</a></li>
            <li className="active"><a href="/works">catalog</a></li>
          </ul>
          <div className="hr"><hr /></div>

          <div className="row">
            <div className="col-lg-12">
              <div className="date" style={this.state.compositionsStyle}>Compositions</div>
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
                  <tr>
                    <td><a href="https://www.researchcatalogue.net/view/2532879/2532880">Wither</a></td>
                    <td>2025</td>
                    <td>11:15</td>
                    <td>4</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.researchcatalogue.net/view/2532879/2532880">Interstice</a></td>
                    <td>2025</td>
                    <td>09:14</td>
                    <td>2</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.youtube.com/watch?v=QQ9tnpmB_Ok">Streamlines</a></td>
                    <td>2024</td>
                    <td>16:02</td>
                    <td>8</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.youtube.com/watch?v=WBoomju6l-o">Ever-Present Change</a></td>
                    <td>2024</td>
                    <td>22:28</td>
                    <td>8</td>
                    <td>-</td>
                </tr>
                  <tr>
                    <td><a href="https://soundcloud.com/bjarni/blocking-behaviours-iclc-example">Blocking Behaviours</a></td>
                    <td>2023</td>
                    <td>25:00</td>
                    <td>4</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td><a href="https://flagdayrecordings.bandcamp.com/track/vacuum">Vacuum</a></td>
                    <td>2023</td>
                    <td>08:08</td>
                    <td>2</td>
                    <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                  </tr>
                       <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/track/distant">Distant</a></td>
                          <td>2023</td>
                          <td>07:54</td>
                          <td>2</td>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                       </tr>
                       <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/track/pice">Pice</a></td>
                          <td>2023</td>
                          <td>07:25</td>
                          <td>2</td>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                       </tr>
                       <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/track/fog">Fog</a></td>
                          <td>2023</td>
                          <td>07:44</td>
                          <td>2</td>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                       </tr>
                       <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/track/sun">Sun</a></td>
                          <td>2023</td>
                          <td>12:56</td>
                          <td>2</td>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                       </tr>
                       <tr>
                          <td><a href="https://flagdayrecordings.bandcamp.com/track/micro">Micro</a></td>
                          <td>2023</td>
                          <td>11:04</td>
                          <td>2</td>
                          <td><a href="https://flagdayrecordings.bandcamp.com/album/upics">UPICS</a></td>
                       </tr>
                       <tr>
                          <td>Wildfires</td>
                          <td>2022</td>
                          <td>12:10</td>
                          <td>192 (WFS)</td>
                          <td>-</td>
                      </tr>
                       <tr>
                          <td><a href="https://playneutral.bandcamp.com/track/bjarni-gunnarsson-costest">Costest</a></td>
                          <td>2022</td>
                          <td>12:00</td>
                          <td>2</td>
                          <td><a href="https://playneutral.bandcamp.com/album/ukraine-appeal">Ukraine Appeal</a></td>
                      </tr>
                      <tr>
                          <td>Judder</td>
                          <td>2021</td>
                          <td>11:42</td>
                          <td>8</td>
                          <td>-</td>
                      </tr>
                       <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/devise">Devise</a></td>
                          <td>2021</td>
                          <td>05:08</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines">Anticlines</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/adopt">Adopt</a></td>
                          <td>2021</td>
                          <td>06:12</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines">Anticlines</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/sustain">Sustain</a></td>
                          <td>2021</td>
                          <td>05:56</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines">Anticlines</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/resist">Resist</a></td>
                          <td>2021</td>
                          <td>07:02</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines">Anticlines</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/pursue">Pursue</a></td>
                          <td>2021</td>
                          <td>06:54</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/anticlines">Anticlines</a></td>
                      </tr>

                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/album/fracas">Fracas</a></td>
                          <td>2021</td>
                          <td>17:14</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/fracas">Fracas</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/heap">Heap</a></td>
                          <td>2020</td>
                          <td>05:30</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/volume-void">Volume and Void</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/wreck">Wreck</a></td>
                          <td>2020</td>
                          <td>09:38</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/volume-void">Volume and Void</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/blur">Blur</a></td>
                          <td>2020</td>
                          <td>06:41</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/volume-void">Volume and Void</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/stash">Stash</a></td>
                          <td>2020</td>
                          <td>06:41</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/volume-void">Volume and Void</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://sovnrecords.bandcamp.com/track/cendres">Cendres</a></td>
                          <td>2020</td>
                          <td>22:14</td>
                          <td>8</td>
                          <td><a href="https://sovnrecords.bandcamp.com/album/cendres">Cendres</a></td>
                      </tr>
                    <tr>
                        <td><a href="https://www.researchcatalogue.net/view/540350/540351#becoming">Copaline</a></td>
                        <td>2019</td>
                        <td>13:02</td>
                        <td>4</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td><a href="https://soundcloud.com/bjarni/polytree">Polytree</a></td>
                        <td>2019</td>
                        <td>21:07</td>
                        <td>8</td>
                        <td><a href="https://sovnrecords.bandcamp.com/album/cendres">Cendres</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://soundcloud.com/mgbg/la-philosophie-du-langage">La Philosophie du Language*</a></td>
                        <td>2018</td>
                        <td>15:48</td>
                        <td>32</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Vicinity Pulse</td>
                        <td>2018</td>
                        <td>25-20</td>
                        <td>4</td>
                        <td>-</td>
                    </tr>
                      <tr>
                          <td><a href="https://tartarugarecords.bandcamp.com/track/prisme">Prisme</a></td>
                          <td>2017</td>
                          <td>12:23</td>
                          <td>8 &amp; 2</td>
                          <td><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://tartarugarecords.bandcamp.com/track/epicycle">Epicycle</a></td>
                          <td>2017</td>
                          <td>12:00</td>
                          <td>8 &amp; 2</td>
                          <td><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://tartarugarecords.bandcamp.com/track/brackets">Brackets</a></td>
                          <td>2017</td>
                          <td>06:47</td>
                          <td>2</td>
                          <td><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://tartarugarecords.bandcamp.com/track/aperture">Aperture</a></td>
                          <td>2017</td>
                          <td>05:51</td>
                          <td>2</td>
                          <td><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://grannyrecords.bandcamp.com/track/mecolico">Mecolico</a></td>
                          <td>2016</td>
                          <td>10:45</td>
                          <td>4 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://grannyrecords.bandcamp.com/track/pulsatiles">Pulsatiles</a></td>
                          <td>2016</td>
                          <td>08:46</td>
                          <td>2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://grannyrecords.bandcamp.com/track/gallivant">Gallivant</a></td>
                          <td>2016</td>
                          <td>06:40</td>
                          <td>2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/ubieties">Ubieties</a></td>
                          <td>2015</td>
                          <td>11:38</td>
                          <td>8 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://grannyrecords.bandcamp.com/track/verlat">Verlat</a></td>
                          <td>2014</td>
                          <td>15:04</td>
                          <td>8 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://vimeo.com/152695407">Journal Afghan</a></td>
                          <td>2014</td>
                          <td>38:45</td>
                          <td>Film</td>
                          <td><a href="http://www.studio-shaiprod.com">Studio Shaiprod</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://grannyrecords.bandcamp.com/track/aukera">Aukera</a></td>
                          <td>2013</td>
                          <td>09:38</td>
                          <td>4 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/portholes">Portholes</a></td>
                          <td>2012</td>
                          <td>08:56</td>
                          <td>8 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/momentaries">Momentaries</a></td>
                          <td>2012</td>
                          <td>06:21</td>
                          <td>8 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/signac">Signac</a></td>
                          <td>2012</td>
                          <td>07:19</td>
                          <td>8 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/concomitance">Concomittance</a></td>
                          <td>2012</td>
                          <td>07:21</td>
                          <td>4 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/pedicel">Pedicel</a></td>
                          <td>2012</td>
                          <td>08:19</td>
                          <td>4 &amp; 2</td>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/pedicel">Boundary Particulars</a></td>
                          <td>2012</td>
                          <td>35:11</td>
                          <td>4 &amp; 2</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td>Beryl</td>
                          <td>2012</td>
                          <td>08:30</td>
                          <td>2</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/fallacies">Fallacies**</a></td>
                          <td>2011</td>
                          <td>24:33</td>
                          <td> 192 & 832 (WFS)</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://vimeo.com/76064055">O Sal Da Lua</a></td>
                          <td>2011</td>
                          <td>07:48</td>
                          <td>Film</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/mgbg/limaginaire-du-parleur">L'imaginaire du parleur*</a></td>
                          <td>2011</td>
                          <td>12:36</td>
                          <td>8 & 2</td>
                          <td><a href="https://sonology.bandcamp.com/releases">Post Scriptum</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/grey-seeds">Grey Seeds</a></td>
                          <td>2010</td>
                          <td>10:20</td>
                          <td>4 &amp; 2</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="http://www.franceculture.fr/emission-l-atelier-de-la-creation-dia-de-mucho-vispera-de-nada-2013-04-16">Día de mucho, víspera de nada***</a></td>
                          <td>2010</td>
                          <td>60:01</td>
                          <td>Radiophonic</td>
                          <td><a href="http://www.franceculture.fr/emission-l-atelier-de-la-creation-dia-de-mucho-vispera-de-nada-2013-04-16">France Culture</a></td>
                      </tr>
                      <tr>
                          <td>Windveine</td>
                          <td>2010</td>
                          <td>09:43</td>
                          <td>192 (WFS)</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/angst">Angst</a></td>
                          <td>2010</td>
                          <td>12:02</td>
                          <td>8 &amp; 2</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://vimeo.com/8825907">Timeless</a></td>
                          <td>2010</td>
                          <td>09:12</td>
                          <td>Film</td>
                          <td>-</td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/dried-up">Dried up</a></td>
                          <td>2009</td>
                          <td>07:02</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/fingrafjall">Fingrafjall</a></td>
                          <td>2009</td>
                          <td>08:33</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/aftur">Aftur</a></td>
                          <td>2008</td>
                          <td>06:27</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/detta-saman">Detta saman</a></td>
                          <td>2008</td>
                          <td>06:14</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/timeout">Timeout</a></td>
                          <td>2008</td>
                          <td>06:27</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/undrun">Undrun</a></td>
                          <td>2007</td>
                          <td>06:17</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://bjarni.bandcamp.com/track/blindni">Blindi</a></td>
                          <td>2006</td>
                          <td>08:27</td>
                          <td>2</td>
                          <td><a href="https://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006​-​2009</a></td>
                      </tr>
                      <tr>
                          <td><a href="https://soundcloud.com/bjarni/samt-mis">Samtímis</a></td>
                          <td>2006</td>
                          <td>10:27</td>
                          <td>2</td>
                          <td>-</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div><br />
      <div className="row">
          <div className="col-lg-12">
              * With Marie Guilleray
          </div>
          <div className="col-lg-12">
              ** With Miguel Negrão
          </div>
          <div className="col-lg-12">
              *** With Jacob Stambach
          </div>
      </div>
    
      <div className="row">
          <div className="col-lg-12">
              <div className="date" style={this.state.compositionsStyle}>Releases</div>
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
                          <td>EP</td>
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
                          <td><a href="http://www.bjarni-gunnarsson.net/paths">Paths</a></td>
                          <td><a href="http://www.grannyrecords.org">Granny Records</a></td>
                          <td>2016</td>
                          <td>Solo</td>
                          <td>CD / Digital</td>
                      </tr>
                      <tr>
                          <td><a href="http://www.bjarni-gunnarsson.net/processes">Processes &amp; Potentials</a></td>
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
              <div className="date" style={this.state.compositionsStyle}>Writings</div><br /><br /><br />
              <table class="table">
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
              <div className="date" style={this.state.compositionsStyle}>Selected Performances</div>
              <table className="table">
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
                          <td class="performance">Sonology Concert #1</td>
                          <td>KC / Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>29.01.2020</td>
                      </tr>
                      <tr>
                          <td class="performance">RASK #2</td>
                          <td>Loft Hostel & Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>28.12.2019</td>
                      </tr>
                      <tr>
                          <td class="performance">Concert Institut de Sonologie de La Haye @ GRM</td>
                          <td>Akousma, Mpaa Saint-germain</td>
                          <td>Paris, France</td>
                          <td>18.10.2019</td>
                      </tr>
                      <tr>
                          <td class="performance">Music, Humans and Machines (ODC 2019)</td>
                          <td>Orpheus Institute</td>
                          <td>Ghent, Belgium</td>
                          <td>22.05.2019</td>
                      </tr>
                      <tr>
                          <td class="performance">Simulation and Computer Experimentation</td>
                          <td>Orpheus Institute</td>
                          <td>Ghent, Belgium</td>
                          <td>21.03.2019</td>
                      </tr>
                      <tr>
                          <td class="performance">Lectorate - Festive Presentation</td>
                          <td>Royal Conservatory, The Hague</td>
                          <td>Den Haag, Netherlands</td>
                          <td>25.01.2019</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonology Concert #1</td>
                          <td>KC / Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>21.09.2018</td>
                      </tr>
                    <tr>
                        <td class="performance">Sound and Music Computing 2018</td>
                        <td>SMC2018</td>
                        <td>Limasol, Cyprus</td>
                        <td>06.07.2018</td>
                    </tr>
                    <tr>
                        <td class="performance">ARC (art_research_convergence) kickoff</td>
                        <td>ARC kickoff</td>
                        <td>Den Haag, Netherlands</td>
                        <td>02.07.2018</td>
                    </tr>
                    <tr>
                        <td class="performance">Azimuth #6 Weekender</td>
                        <td>iii @WD4X</td>
                        <td>Den Haag, Netherlands</td>
                        <td>24.03.2018</td>
                    </tr>
                      <tr>
                          <td class="performance">Solo Live set at Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.11.2017</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonology, discussion concert 4</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>22.03.2017</td>
                      </tr>
                      <tr>
                          <td class="performance">Vulkaanuitbarsting</td>
                          <td>Extrapool</td>
                          <td>Nijmegen, Netherlands</td>
                          <td>05.11.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">Forum of new music</td>
                          <td>Janáček Academy of Music and Performing Arts</td>
                          <td>Brno, Czech Republic</td>
                          <td>11.10.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonology, first years festival</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.09.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> Côté court festival</td>
                          <td>CINÉ 104</td>
                          <td>Paris, France</td>
                          <td>20.06.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>09.06.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> Segnali Festival</td>
                          <td>Cinema PostModernissimo</td>
                          <td>Perugia, Italy.</td>
                          <td>07.05.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Showlab</td>
                          <td>De Vinger</td>
                          <td>Den Haag, Netherlands</td>
                          <td>26.03.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> Fluister</td>
                          <td>De Helling</td>
                          <td>Utrecht, Netherlands</td>
                          <td>21.02.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> Azimuth #0</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.02.2016</td>
                      </tr>
                      <tr>
                          <td class="performance"> MiniBEAST</td>
                          <td>Birmingham ElectroAcoustic Sound Theatre</td>
                          <td>Birmingham, UK</td>
                          <td>17.02.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">Live Ciné-Concert</td>
                          <td>Spoutnik Cinema</td>
                          <td>Genève, Switzerland</td>
                          <td>16.01.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">The San Francisco Tape Music Festival</td>
                          <td>SFTMC</td>
                          <td>San Francisco, USA</td>
                          <td>08.01.2016</td>
                      </tr>
                      <tr>
                          <td class="performance">Kraak Helder</td>
                          <td>Concertzender Nederland</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.11.2015</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG & Einóma</td>
                          <td>Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>08.11.2015</td>
                      </tr>
                      <tr>
                          <td class="performance">Rewire Festival</td>
                          <td>Korzo Theater</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.05.2015</td>
                      </tr>
                      <tr>
                          <td class="performance">Présences Électronique</td>
                          <td>Centquatre</td>
                          <td>Paris, France</td>
                          <td>07.03.2015</td>
                      </tr>
                      <tr>
                          <td class="performance">FALK new years concert</td>
                          <td>Mengi</td>
                          <td>Reykjavík, Ísland</td>
                          <td>30.12.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonology at Volkspaleis</td>
                          <td>Volkspaleis</td>
                          <td>Den Haag, Netherlands</td>
                          <td>24.10.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.06.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">Tectonics</td>
                          <td>Harpa</td>
                          <td>Reykjavík, Ísland</td>
                          <td>12.04.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">bi.pola.re</td>
                          <td>Mix Arts Myrys</td>
                          <td>Toulouse, France</td>
                          <td>07.03.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">Sónar</td>
                          <td>Harpa</td>
                          <td>Reykjavík, Ísland</td>
                          <td>15.02.2014</td>
                      </tr>
                      <tr>
                          <td class="performance">Extreme Chill</td>
                          <td>Kafffibarinn</td>
                          <td>Reykjavík, Ísland</td>
                          <td>05.06.2013</td>
                      </tr>
                      <tr>
                          <td class="performance">Digital is dead</td>
                          <td>Gallery of modern art </td>
                          <td>Oxford, UK</td>
                          <td>03.05.2013</td>
                      </tr>
                      <tr>
                          <td class="performance">'Composing Spaces' symposium</td>
                          <td>Institute of Sonology</td>
                          <td>Den Haag, Netherlands</td>
                          <td>09.04.2013</td>
                      </tr>
                      <tr>
                          <td class="performance">LUFF</td>
                          <td>Cinéma Oblò</td>
                          <td>Lausanne, Switzerland</td>
                          <td>18.10.2012</td>
                      </tr>
                      
                      <tr>
                          <td class="performance">MGBG Residency Concert</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>04.10.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">Today's Art</td>
                          <td>TodaysArt</td>
                          <td>Den Haag, Netherlands</td>
                          <td>20.09.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">UNM 2012</td>
                          <td>LHÍ</td>
                          <td>Reykjavík, Ísland</td>
                          <td>28.10.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonar</td>
                          <td>MACBA</td>
                          <td>Barcelona, Spain</td>
                          <td>14.06.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">Final Concert</td>
                          <td>Korzo Theater </td>
                          <td>Den Haag, Netherlands</td>
                          <td>12.06.2012</td>
                      </tr>
                      <tr>
                          <td class="performance"> LMALC night</td>
                          <td>Les ateliers claus</td>
                          <td>Bruxelles, Belgium</td>
                          <td>11.05.2012</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>18.04.2012</td>
                      </tr>
                      <tr>
                          <td class="performance"> WFS concert</td>
                          <td>ANNA@KV20</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.03.2012</td>
                      </tr>
                      <tr>
                          <td class="performance"> Comme un lundi</td>
                          <td>Bar du matin</td>
                          <td>Bruxelles, Belgium</td>
                          <td>09.01.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">Freemote festival</td>
                          <td>Nudigital/Borndigital</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.12.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Freemote festival</td>
                          <td>Nudigital/Borndigital</td>
                          <td>Utrecht, Netherlands</td>
                          <td>08.12.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Sonology Concert</td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>17.11.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.11.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG concert release</td>
                          <td>Souffle Continue</td>
                          <td>Paris, France</td>
                          <td>11.10.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG live</td>
                          <td>Gallery Abilene</td>
                          <td>Bruxelles, Berlgium</td>
                          <td>20.04.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">LIVEWIRE festival</td>
                          <td>University of Maryland</td>
                          <td>Baltimore, USA</td>
                          <td>09.10.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>13.10.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> Lost Theory festival</td>
                          <td>Deringaj</td>
                          <td>Croatia</td>
                          <td>17.08.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> ICMC </td>
                          <td>University of Huddersfield</td>
                          <td>Huddersfield, UK</td>
                          <td>01.08.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG live</td>
                          <td>After Mars der Beschaving</td>
                          <td>Den Haag, Netherlands</td>
                          <td>26.06.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>23.06.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> SSSP </td>
                          <td>De Montfort University</td>
                          <td>Leicester, UK</td>
                          <td>09.06.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>24.05.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG live</td>
                          <td>Trashvortex series</td>
                          <td>Paris, France</td>
                          <td>30.04.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> CASS Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>28.03.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> CCRMT </td>
                          <td>McGill University</td>
                          <td>Montreal, Canada</td>
                          <td>15.03.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>10.03.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> BEAST Festival </td>
                          <td>Birmingham University</td>
                          <td>Birmingham, UK</td>
                          <td>02.03.2011</td>
                      </tr>
                      <tr>
                          <td class="performance"> LMALC living room concerts</td>
                          <td>Rue Alphonse Hottat</td>
                          <td>Bruxelles, Belgium</td>
                          <td>22.02.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Monophonic</td>
                          <td>330 Live</td>
                          <td>Den Haag, Netherlands</td>
                          <td>18.02.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Icelandic Music Days</td>
                          <td>Zaal 100</td>
                          <td>Amsterdam, Netherlands</td>
                          <td>08.02.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Ephémère</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>10.02.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">WFS Concert</td>
                          <td>Scheltema Complex</td>
                          <td>Leiden, Netherlands</td>
                          <td>10.02.2011</td>
                      </tr>
                      <tr>
                          <td class="performance">Einóma livet</td>
                          <td>Cramers</td>
                          <td>Den Haag, Netherlands</td>
                          <td>08.12.2012</td>
                      </tr>
                      <tr>
                          <td class="performance">STRP festival</td>
                          <td>STRP</td>
                          <td>Eindhoven, Netherlands</td>
                          <td>24.11.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">Einóma live </td>
                          <td>Pure magnetic</td>
                          <td>Den Haag, Netherlands</td>
                          <td>23.11.2010</td>
                      </tr>
                      <tr>
                          <td class="performance"> CASS Concert </td>
                          <td>Royal Conservatory</td>
                          <td>Den Haag, Netherlands</td>
                          <td>28.10.2010</td>
                      </tr>
                      <tr>
                          <td class="performance"> Z-zondag </td>
                          <td>Villa Ockenburgh</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.10.2010</td>
                      </tr>
                      <tr>
                          <td class="performance"> SuperCollider Symposium</td>
                          <td>TU Berlin</td>
                          <td>Berlin, Germany</td>
                          <td>22.09.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">MGBG live</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>22.09.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">Einóma live</td>
                          <td>Pipp</td>
                          <td>Den Haag, Netherlands</td>
                          <td>01.06.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">FESTIVAL 360</td>
                          <td> LILAS EN SCENE</td>
                          <td> Les Lilas, France</td>
                          <td>03.06.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">LMALC livingroom concerts</td>
                          <td>LMALC studios</td>
                          <td>Bruxelles, Belgium</td>
                          <td>06.04.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">Einóma live</td>
                          <td>Bazaar Club</td>
                          <td>Bruxelles, Belgium</td>
                          <td>03.04.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">Wonderwerp</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>05.03.2010</td>
                      </tr>
                      <tr>
                          <td class="performance">Wonderwerp</td>
                          <td>Studio Loos</td>
                          <td>Den Haag, Netherlands</td>
                          <td>05.03.2010</td>
                      </tr>
                      <tr>
                          <td class="performance"> Sonology Concert</td>
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
}

export default Works;
