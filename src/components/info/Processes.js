import React, {Component} from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
import Inserts from './../../assets/images/inserts.jpg';
import Inserts2 from './../../assets/images/inserts2.jpg';
import Processes_potentials from './../../assets/images/processes-potentials.jpg';

class Processes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bandcampStyle: {
        border: '0',
        width: '100%',
        height: '307px'
      },
      alignCenter : {
        'text-align': 'center'
      }
  }}

  render() {
    return <div className="container">
      <div className="content">

        <div className="release">

          <div className="release-title">Processes & Potentials </div>

          <div className="hr"><hr /></div>

          <div className="release-info">(2013) 3L025, 3LEAVES [CD, Album]</div>
          <br />

          <div className="img-center">
            <OpacityImage imageUrl={Inserts}/>
          </div>

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

          <p style={this.state.alignCenter}>
            <strong><a href="http://3leaves-label.com/store/index.php?main_page=product_info&cPath=0&products_id=34" style={this.state.alignCenter}>[ ORDER NOW! ] </a></strong>
          </p>

            <div className="img-center">
              <OpacityImage imageUrl={Processes_potentials}/>
            </div>
          <p>
            So much music claims to capture the moment. But as Processes and Potentials proves, in-the-momentness can be a malleable concept. The result of three years of studio work, the album sees Bjarni Gunnarsson following his longstanding interest in exploring liquid states, transformational activities and the complex relationships between cause and effect. It is music which behaves differently, unexpectedly, veering off into surprising directions and never staying in one place for too long – it is certainly no coincidence that one of the pieces here is called "Momentaries". The reason for this fluid, intuitive development is Gunnarrson's conviction that it is infinitely more exciting to follow and shape the path of his materials as it is unfolding rather than mapping out the trajectory in full from the outset: "One should not constantly think of a final result while creating", as he puts it, "Rather, it is important to engage in the process and its becoming."<br/><br />

            Processes and Potentials is, undoubtedly, an uncompromising work in its austere sonic design, crackling rhythmical pulses dancing on top of monochrome tectonics and convoluting sounds. But at the same time, it is one of the few sound art releases that gets the adrenalin pumping as well, with each of these six piece seamlessly passing through a variety of concise scenes, ranging from the pastoral and serene to the delirious and confronting. Applying layman's psychology, it would be easy to explain this approach by Gunnarsson's curiosity and wandering spirit, by his moves from Iceland to Paris, Berlin and The Hague. More to the point, however, he never ceases to be fascinated by the undiscovered potentials of creativity and what it is, exactly, that defines the resulting sound processes. It may lead some listeners outside their comfort zone for the album's 47 minutes. But then again, it makes each single moment contained within them feel a lot more precious.<br /><br />
        </p>

            <strong>Tobias Fischer </strong><p/>

              <div className="img-center">
                <OpacityImage imageUrl={Inserts2}/>
              </div>

            <p>Processes & Potentials consists of six pieces forming a totality of 48 minutes. The music is the outcome of my work during the past three years and represents my compositional preoccupations during this period of time.</p>

            <p><a href="http://www.3leaves-label.com/">3leaves-label.com</a></p>
            <p><a href="http://bjarni-gunnarsson.net/processes.html">bjarni-gunnarsson.net/processes</a></p>
            <p><a href="http://3leaves-label.com/releases.html">3leaves-label.com/releases.html</a></p>
            <p><a href="http://soundcloud.com/3leaves/bjarni-gunnarsson-processes">soundcloud.com/3leaves/bjarni-gunnarsson-processes</a></p>
            <p><a href="http://soundcloud.com/bjarni">soundcloud.com/bjarni</a></p>
            <br />

            <p>
            Processes are defined by the way they do things instead of what they are. On this album it is important how sound processes behave, how they relate and how they occur. The seemingly organic sound-world of the work is all created from ideas that favor process-based approach to sound and composition.<br /><br />
            The album proposes a set of 6 pieces that do not necessarily need to be experienced in a linear succession. Ideas flow between them and related situations are experienced. Each of them still has its particularity and its perceivable identity. However, they could also be seen as momentary events, originating from a more continuous stream in which their relationships exist in different ways. We can think of the world as being made of actual ‘occasions’. These occasions arise from potentialities created by prior actual occasions. The actual occasions are occurrences emerging from practical events, each of which comes into being and then disappears, only to be replaced by a successor. If these experiences form the basic realities of nature then in my opinion this is also a very realistic description of this album. It consists not of things, but of events, and as such is best understood as being a process. As such, it exists as a continuously changing flow which creates actual experience out of potential one. This was an important factor during the creation of the album and hopefully a perceivable one.
            </p>
            <br /><br />
            <hr />
            <div className="bandcamp">
            <iframe style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1997432359/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://bjarni.bandcamp.com/album/processes-potentials">Processes &amp; Potentials by Bjarni Gunnarsson</a></iframe></div>
            <hr />
            <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F108329364&amp;color=333333&amp;auto_play=false&amp;show_artwork=true"></iframe>
            <br /><br />

        </div>

      </div>
    </div>

  }
}

export default Processes;
