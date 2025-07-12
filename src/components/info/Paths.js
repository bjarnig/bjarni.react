import React, {Component} from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const albumPaths = imageurl + 'album-paths.jpg';

class Paths extends Component {

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

            <div className="release-title">Paths (2016)</div>

            <div className="hr"><hr /></div>

            <div className="release-info">Granny 16, Granny Records [CD, Album]</div>

            <br />

              <div className="img-center">
                <OpacityImage imageUrl={albumPaths}/>
              </div>

              <p>Paths  [Granny Records 01.05.2016]</p>
              <p>
                01 - Ubieties (11:39) <br />
                02 - Mecolico (10:46) <br />
                03 - Pulsatiles (08:46)<br />
                04 - Verlat (15:05)<br />
                05 - Gallivant (06:40)<br /></p>
                <p>
                Music by Bjarni Gunnarsson<br />
                Mastering by Erik Nyström<br /><br />

                Artwork by Yorgos Vourlidas
              </p>

              <p style={this.state.alignCenter}>
              <strong><a href="http://www.grannyrecords.org" style={this.state.alignCenter}>[ More info: Granny Records ] </a></strong></p>
              <hr />

              <div className="bandcamp">
              <iframe title="Embedded content" style={this.state.bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3447722096/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="http://grannyrecords.bandcamp.com/album/paths">Paths by Bjarni Gunnarsson</a></iframe>
              </div>
              <hr />

              <br />
              <p>Paths consists of five compositions forming a totality of 53 minutes. The music is derived from three multichannel pieces premiered at the Tectonics festival in Reykjavík (2014), the Ephémère series in The Hague (2014) and Présences électronique festival in Paris (2015). These have been further reduced, combined and rearranged resulting in the five compositions found on the album.</p>

              <p>'We may think of music as navigating between different moments of continuous change. One chooses a starting point and from there tries to reach other positions. The way a contact between these occurs is however always different and depends on the engagement with previous points of encounter. Even very static situations create perceptual illusions of development, producing prolonged and continuous experience. It could be how things change that creates the feeling of time. Perhaps all development is a matter of process, of activity, of change. We have difficulties apprehending what we are but little difficulty experiencing what we do. This behaviour based view is an important aspect of the album that explores previously experienced musical situations, different points of contact, paths through musical material.'<br /><br /></p>

              <hr />

              <p><a href="http://www.grannyrecords.org">granny records</a></p>
              <p><a href="http://bjarni-gunnarsson.net/paths">bjarni-gunnarsson.net/paths</a></p>
              <p><a href="http://soundcloud.com/bjarni">soundcloud.com/bjarni</a></p>
              <p><a href="https://soundcloud.com/grannyrecords">soundcloud.com/grannyrecords</a></p>


              <hr />
                <br />

              <iframe title="Embedded content" width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259066161&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
              <br />
              <hr />

              <p><a href="https://boomkat.com/products/paths-896db88a-f389-4541-8fc0-cfe98bf7da59">Paths on Boomkat</a></p>
              <p><a href="https://open.spotify.com/artist/3ZGl3TecRchhDkSRi5Cg2c">Paths on Spotify</a></p>
              <p><a href="https://grannyrecords.bandcamp.com/album/paths">Paths on Bandcamp</a></p>
              <hr />

          </div>
      </div>
    </div>

  }
}

export default Paths;
