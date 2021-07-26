import React, {Component} from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
import albumPaths from './../../assets/images/album-paths.jpg';
import albumProcesses from './../../assets/images/processes-potentials.jpg';
import albumProcessesInserts from './../../assets/images/inserts2.jpg';
import safn1 from './../../assets/images/safn1.JPEG';
import tvenna1 from './../../assets/images/tvenna1.JPEG';
import albumLueur from './../../assets/images/lueur1.png';
import superpang from './../../assets/images/superpang.jpg';
import cendres_sovn from './../../assets/images/cendres_sovn.jpg';

class Releases extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bandcampStyle: {
        border: '0',
        width: '100%',
        height: '307px'
      },
      bandcampStyleVV: {
        border: '0',
        width: '100%',
        height: '940px'
      },
      bandcampStyleCendres: {
        border: '0',
        width: '100%',
        height: '220px'
      },
      bandcampStyleTvenna: {
        border: '0', width: '100%', height: '1040px'}
    };
  }

  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">
      <div className="content">
        <ul className="nav nav-pills">
          <li className="active">
            <a href="/releases">info</a>
          </li>
          <li>
            <a href="/press">press</a>
          </li>
        </ul>

        <div className="hr"><hr/></div>
        <div className="release">
        <div className="release-title">Cendres (2020)</div>

        <div className="img-center">
          <a href="https://sovnrecords.bandcamp.com/album/cendres">
          <OpacityImage imageUrl= {cendres_sovn} />
          </a>
        </div>
        <p> Cendres released on <a href="https://sovnrecords.bandcamp.com/album/cendres"> SØVN </a></p>
        <p>
        This work contains outcomes of my recent research focusing on interrupts, intervention and dynamic algorithmic environments. It consists of two electroacoustic compositions that have previously been performed in a multichannel setting but since then extended and reworked to the stereo format found here.
        </p>
        <p>
        <strong>Cendres</strong> was premiered on the Acousmonium at GRM, Paris in October 2019. The work highlights the relation between high-level control processes and purely computer-synthesized sounds. 
        </p>
        <p>
        <strong>Polytree</strong> was first performed at the Institute of Sonology in June 2018. It is made through synthetic algorithms and extensive use of waveshaping processes. 
        </p>
        <p></p>
        <div className="bandcamp">
        <iframe style={this.state.bandcampStyleCendres} src="https://bandcamp.com/EmbeddedPlayer/album=3794325908/size=large/bgcol=ffffff/linkcol=f171a2/artwork=none/transparent=true/" seamless><a href="https://sovnrecords.bandcamp.com/album/cendres">Cendres by Bjarni Gunnarsson</a></iframe>
        </div>
        <p>The two pieces share an attitude of becoming through synthetic sound. They also both focus on the relations between the processes they consist of, and of the varying boundaries of what is caused by algorithms and what by manual intervention.</p>
        <br/>
        </div>

        <div className="hr"><hr/></div>
        <div className="release">

          <div className="release-title">Volume & Void (2020)</div>

        <div className="bandcamp">
              <iframe style={this.state.bandcampStyleVV} src="https://bandcamp.com/EmbeddedPlayer/album=1204087134/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://superpang.bandcamp.com/album/volume-void">Volume &amp; Void by Bjarni Gunnarsson</a></iframe>
          </div>
          <p> New release out on <a href="https://superpang.bandcamp.com/album/volume-void"> Superpang </a>
          </p>
          <p>
              Composed through experimental scheduling algorithms that explore the duality of immediate, direct events with gradual and evolving processes.<br /><br />
              System and sounds created during the summer of 2020 in Scheveningen, The Hague.<br /><br />
              Design: Joe Gilmore
          </p>
          <br/>

        </div>
        <div className="hr"><hr/></div>
        <div className="release">

          <div className="release-title">Lueur (2018)</div>

          <div className="img-center">
            <OpacityImage imageUrl={albumLueur}/>
          </div>

          <p>
            <a href="http://www.bjarni-gunnarsson.net/lueur">New LP on Tartaruga Records</a>
          </p>

          <p>Lueur consists of four electroacoustic compositions; the product of unfolding and unpredictable generative processes spread across 38 minutes.
          An exploration of process as much as tone and texture, the album takes shape through a series of ever-changing movements, interweaving dense low passages and abrupt changes of atmosphere and sound. </p>

          <div className="bandcamp">
              <iframe style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1223447919/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/" seamless="seamless">
                <a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur by Bjarni Gunnarsson</a>
              </iframe>
          </div>

          <p>
            <a href="https://www.tartaruga.co.uk/">www.tartaruga.co.uk</a>
          </p>
          <p>
            <a href="http://www.bjarni-gunnarsson.net/lueur">[ more info here ]</a>
          </p>

        </div>
        <div className="hr"><hr/></div>
          <div className="release">

            <div className="release-title">Paths (2016)</div>

            <div className="img-center">
              <OpacityImage imageUrl={albumPaths}/>
            </div>

            <p>
              <a href="http://www.bjarni-gunnarsson.net/paths">Album on Granny Records</a>
            </p>

            <p>Paths consists of five compositions forming a totality of 53 minutes. The music is derived from three multichannel pieces premiered at the Tectonics festival in Reykjavík (2014), the Ephémère series in The Hague (2014) and Présences électronique festival in Paris (2015). These have been further reduced, combined and rearranged resulting in the five compositions found on the album.</p>

            <div className="bandcamp">

              <iframe style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3447722096/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/" seamless="seamless">
                <a href="http://grannyrecords.bandcamp.com/album/paths">Paths by Bjarni Gunnarsson</a>
              </iframe>
            </div>

            <p>
              <a href="http://www.grannyrecords.org/releases/paths-cd-granny16">www.grannyrecords.org</a>
            </p>
            <p>
              <a href="http://www.bjarni-gunnarsson.net/paths">[ more info here ]</a>
            </p>

          </div>
          <div className="hr"><hr/></div>
        <div className="release">

          <div className="release-title">Processes & Potentials (2013)</div>

          <div className="img-center">
            <OpacityImage imageUrl={albumProcesses}/>
          </div>

          <p>
            <a href="processes.html">Album on 3LEAVES</a>
          </p>
          <p>Processes & Potentials consists of six pieces forming a totality of 48 minutes. The music is the outcome of my work during the past three years and represents my compositional preoccupations during this period of time.</p>

          <div className="bandcamp">
            <iframe style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1997432359/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/" seamless="seamless">
              <a href="http://bjarni.bandcamp.com/album/processes-potentials">Processes &amp; Potentials by Bjarni Gunnarsson</a>
            </iframe>
          </div>

          <p>
            <a href="http://www.3leaves-label.com/">www.3leaves-label.com</a>
          </p>
          <p>
            <a href="http://www.bjarni-gunnarsson.net/processes">[ more info here ]</a>
          </p>

          <div className="img-center">
            <OpacityImage imageUrl={albumProcessesInserts}/>
          </div>
        </div>
        <div className="hr"><hr/></div>
        <div className="release">
            <div className="release-title">Safn 2006 - 2009 (2010)</div>
            <div className="img-center">
              <OpacityImage imageUrl={safn1}/>
            </div>
            <p>
            Safn 2006-2009 was released by
            <a href="http://lamadameaveclechien.com/"><strong>Lamadameaveclechien</strong></a>
            in January 2010. The album is a collection of pieces I composed from late 2006
            to early 2009. In September 2006 I left Iceland for Paris where I lived for a year. After living there I moved to Berlin where I stayed for two years until I went to Holland where I live now.
            The record "Safn 2006-2009" compiles pieces I composed during my time in France and Germany and that I found completed each other as a whole.<br/><br/>
            "...The seven compositions found on this CD share an organic and convolving character which develops in both a very continuous and dramatic way. The sound material varies from voices, violins and percussive sounds, treated in a such a way to give a big impression of a haunting tension and suspense. The intricate proceedings of the flow of sound, rich multi-layered textures and energetic percussive gestures gives the album an unheard quality which has to be experienced sonically to be fully understood. The CD comes in a wonderful organic grey handmade tissue."
            </p>
            <p>
            Limited to 333 copies<br/>
            Handmade tissue sleeve + black and white cardboard<br/><br/>
            Written and produced by <strong>Bjarni Gunnarsson</strong><br/>
            Mastering by<strong> Pascal Demez/Herrmutt Lobby</strong><br/>
            Layout by <strong>Patrice Lambenne</strong><br/><br/>
            You can order it <a href="http://lamadameaveclechien.com/releases/dog06cd/release.html"><strong>here</strong></a> from
            <a href="http://lamadameaveclechien.com/"><strong>Lamadameaveclechien</strong></a>, <a href="http://www.juno.co.uk/ppps/products/384554-01.htm">here from Juno Records</a>
            , or on Bandcamp <a href="http://lamadameaveclechien.bandcamp.com/album/dog006-safn-2006-2009"><strong>here</strong></a>
        </p>
          <div className="bandcamp">
            <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=1642249120/size=large/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://bjarni.bandcamp.com/album/safn-2006-2009">Safn 2006-2009 by Bjarni Gunnarsson</a></iframe>
          </div>
            <p>
            We are also doing a <a href="http://lamadameaveclechien.com/releases/dog0506/release.html"><strong>special edition</strong></a> which includes the new <a href="http://myspace.com/einoma"><strong>Einóma</strong></a> 12", 'Tvenna'.
            For this special edition the <a href="http://myspace.com/einoma"><strong>Einóma</strong></a> EP is pressed on white vinyl and my album has a different color tissue.
            It comes in a transparent sleeve with sticker and is limited to 111 copies.
            </p>

            <div className="img-center">
              <OpacityImage imageUrl={tvenna1}/>
            </div>
        </div>
        <div className="hr"><hr/></div>
        <div className="release">
            <div className="release-title">MGBG - Korabie</div>
            <div className="bandcamp">
            <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=2529408612/size=large/bgcol=ffffff/linkcol=111111/transparent=true/" seamless><a href="http://mgbg.bandcamp.com/album/korabie">Korabie by mgbg</a></iframe>
            </div>
            <p>Korabie contains six new pieces purely composed or created around improvisations during 2009-2001. The main focus is the exploration of the combination between voice and electronics. On Korabie a dense fabric of sound is brought to existence where voices and vocal manipulations meet drones and microsounds. The music seems to be coming from multiple sources. Dynamic forms emerge and spaces appear from the intimate relationship of the human voice and electronics.</p>
            <p>
              "it’s the crafting of subtle interactions that stand out on this body of work. At times almost silent and alien in construction, voices — both treated and untreated — subliminally reveal themselves as loosened strands forming a web above the uneven electrical landscape. A warm hum of analog synths bend and contort in the most serene patterns as if naturally expelled from the center of the cosmos. Eerie at times, Korabie also blends microscopic audio slivers through a maze of hiccuped vocal stretches. Often crumpled at the edges, these pulses of articulated eruptions ebb and flow delivering soundtrack inspired layers that will either pull you into its disjointed textural hub or deter you from entering altogether. Either way, Korabie is a sublime collision between organic and inorganic ingredients meant for 3am listening."
              <br/><strong>Igloomag.com</strong>
            </p>
            <p>Released 26 October 2011 <br/>
            Music by Marie Guilleray and Bjarni Gunnarsson <br/>
            Design by Karl Ingi Karlsson</p>
        </div>

        <div className="hr"><hr></hr></div>
        <div className="release">
            <div className="release-title">Einóma - Lost & Found</div>
            <div className="bandcamp">
              <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=3023602503/size=large/bgcol=ffffff/linkcol=111111/transparent=true/" seamless><a href="http://einoma.bandcamp.com/album/lost-found">Lost &amp; Found by Einóma</a></iframe>
            </div>

            <p>'Lost & Found' is Einóma's new EP, released on Shipwrec records (NL) in 2011 on 12 inch vinyl. </p><p> The record features one long new track on the A-side as well as two older and previously unreleased pieces for the B-side. The main track, 'Bla' was conceived after editing real-time and live sessions made for gigs after the release of last years 'Tvenna' EP.The sound material 'Bla' was initially made from was quite old and the idea and title of the EP, 'Lost and found' came about, reworking of older ideas in a new setting. The A-side demonstretes the more dancefloor sides of Einóma while the B-side explores the more dark and dense regions Einóma have become more known for. </p>

            <p>"Freaky Techno and electronic beats by former Vertical Form contributors, Einóma. The Icelandic duo have been off the radar since 2009s 'Tvenna' EP, whose recording sessions provided the raw material for the tracks on 'Lost & Found'. Conceived through real-time editing and live sessions, 'Bla' pitches and twists through an intricate and organic 4/4 techno matrix, stretched between dense thickets of noise and sparse, hallucinatory drum patterns. Both 'BF' and 'LF' on the flip are more mutant, HipHop-tempo electronica, amorphous, sinister and slithering. Appears in hand silk-screened sleeves with unique download code redeemable from the label. Limited to 300 copies."<br/>
            <strong>Boomkat.com</strong>
            </p>

          <div className="hr"><hr></hr></div>
          <div className="release">

              <div className="release-title"> Encam</div>

                <div className="bandcamp">
               <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=1431377201/size=large/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://einoma.bandcamp.com/album/encam">Encam by Einóma</a></iframe>
              </div>

              <p>
              Released on Trachanik Records in 2006 on 12'"' vinyl.  </p>
              <p>
              "Einóma's (Icelandic electronic duo Bjarni Thor Gunnarsson and Steindór Kristinsson) ice-cold, ethereal brand of IDM-funk gets a dramatic workout on Encam, the group's four-track follow-up to its 2003 Mille Tónverka album. Despite the passage of four years, the group's severe sound remains as intricate and obsessive as ever; though machine-generated, it's also rather tribal in character. The title cut's a brooding epic that pairs a vaguely hip-hop influenced lurch with choral shouts that echo across the snow-covered tundra; in his remix, kindred spirit and Spezial Material artist Traject (Gísli Þór Guðmundsson) intensifies the dark spirit of the original by deepening its choral dimension and plunging it even further into a nightmarish zone. The remaining cuts uphold the EP's brooding character with spectral turbulence (“Viðveran”) and an atmospheric evocation of an underground pool that's so still, stalactites' drips shatter the silence like gunshots (“Truflun”)." <br/>
              <strong>Textura.org </strong>
              </p>
              </div>

          <div className="hr"><hr></hr></div>
          <div className="release">
              <div className="release-title"> Milli Tónverka</div>
                <div className="bandcamp">
                <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=4183570667/size=large/bgcol=ffffff/linkcol=111111/notracklist=false/transparent=true/" seamless=""><a href="http://einoma.bandcamp.com/album/milli-t-nverka">Milli Tónverka by Einóma</a></iframe>
              </div>
              <p>
              Released on Vertical Form (UK) in 2003 on CD and vinyl LP. </p>
              <p>
              "This is music created with the heart of high technology and the soul of a spirit world not usually seen with human eyes. The songs here create an emotional resonance that goes beyond just saying they make haunting music. Instead, they offer a fleeting glimpse of the other, the in-between. A presence that makes itself felt with every listen. Special things happen when the lights go dim. Welcome the darkness and let the magic begin. Highly Recommended." <br/>
              <strong>BBC review</strong>
              </p>
          </div>

          <div className="hr"><hr></hr></div>
          <div className="release">
              <div className="release-title">Undir Feilnótum</div>
              <div className="bandcamp">
                <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=124760611/size=large/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://einoma.bandcamp.com/album/undir-feiln-tum">Undir Feilnótum by Einóma</a></iframe>
              </div>
              <p>
              Released on Vertical Form (UK) in 2002 on CD and 2x12'"' vinyl.</p>
              <p>
              "It may all sound cliched, but never has it sounded better. it's almost a summary of all that's happened in the genre. the mind-twisting sounds, the punkish attitude represented by glitch and distortion, the clever melodies that's present in all great techno.... there are times when something comes along to reaffirm everything you knew about the genre. this is one of those times; a classic and future benchmark." <br/>
              <strong>Absorb.org</strong> review for Undir Feilnótum, album of the month.
              </p>
          </div>

          <div className="hr"><hr></hr></div>
          <div className="release">
          <div className="release-title"> Floating Point by Zero</div>
            <div className="bandcamp">
              <iframe style={this.state.bandcampStyleTvenna} src="https://bandcamp.com/EmbeddedPlayer/album=727902579/size=large/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="http://einoma.bandcamp.com/album/floating-point-by-zero">Floating Point By Zero by Einóma</a></iframe>
            </div>

            <p>
            Released on Uni:form Recordings (IS) in 2001 on 12'"' vinyl.</p>

           </div>

      </div>
      </div>
    </div>

  }
}

export default Releases;
