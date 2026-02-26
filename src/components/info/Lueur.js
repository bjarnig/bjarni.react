import React from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const album  = imageurl + 'lueur-double.png';
const album1 = imageurl + 'lueur1.png';

function Paths() {
  const bandcampStyle = {
    border: '0',
    width: '100%',
    height: '950px'
  };
  const alignCenter = {
    'text-align': 'center'
  };

  return <div className="container">
      <div className="content">

        <div className="release">

            <div className="release-title">Lueur (2018)</div>

            <div className="hr"><hr /></div>

            <div className="release-info">TTRLP012, Tartaruga Records [Vinyl, Album]</div>

            <br />

              <div className="img-center">
                <OpacityImage imageUrl={album}/>
              </div>

              <p>Lueur  [Tartaruga Records 26.11.2018]</p>
              <p>
                01 - Prisme (12:25) <br />
                02 - Brackets (06:46) <br />
                03 - Epicycle (12:00)<br />
                04 - Aperture (05:51)<br /></p>
                <p>
                Music by Bjarni Gunnarsson<br />
                Mastering by Erik Nyström<br /><br />

                Artwork by Luke Twyman
              </p>

              <p style={alignCenter}>
              <strong><a href="https://www.tartaruga.co.uk/" style={alignCenter}>[ More info: Tartaruga Records ] </a></strong></p>
              <hr />

              <div className="bandcamp">

              <iframe title="Embedded content" style={bandcampStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1223447919/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/" seamless><a href="https://tartarugarecords.bandcamp.com/album/lueur">Lueur by Bjarni Gunnarsson</a></iframe>
              </div>
              <hr />

              <p>Lueur consists of four electroacoustic compositions; the product of unfolding and unpredictable generative processes spread across 38 minutes.</p>

              <p>An exploration of process as much as tone and texture, the album takes shape through a series of ever-changing movements, interweaving dense low passages and abrupt changes of atmosphere and sound. It is a record that rewards close and repeated listening. </p>

              <p>Mastered by Erik Nyström, the record is housed in a custom sleeve, screenprinted in two-colours with procedurally- generated artwork by Luke Twyman. Variations of each layer are combined to make 16 unique sleeve designs, with a further screenprint on the inner sleeve. </p>

              <p>Lueur is released in an edition of 200 copies.</p>

              <br />

              <p>The music is derived from generative processes that often appear directly entangled, that are set in motion and activated while maintaining their own degree of autonomy. It takes a certain time for a process to manifest itself. To express its time-varying qualities. </p>

              <p>How it unfolds resembles a certain kind of evolution, a becoming that does not have a clear goal but that is based on a constant renewal and recreation. The title refers to faint, quiet but unsteady light sources. Brightness that disperses and refracts at different angles and unfolds through a series of connected developments. Processes that continuously produce output implying a ‘tending towards’ characteristic where certain elements endure while others fade away. </p>

              <p>The idea is to uncover details, to introduce something very specific that expands and develops through two important layers of temporal experience, a very direct action-oriented perception and the slower experience of a past that folds into the present.</p>

              <hr />
              <p><a href="https://www.tartaruga.co.uk">tartaruga records</a></p>
              <p><a href="https://www.tartaruga.co.uk/product/lueur-by-bjarni-gunnarsson">tartaruga/lueur</a></p>
              <p><a href="http://www.bjarni-gunnarsson.net/lueur">bjarni-gunnarsson.net/lueur</a></p>
              <p><a href="http://soundcloud.com/bjarni">soundcloud.com/bjarni</a></p>
              <p><a href="https://tartarugarecords.bandcamp.com/album/lueur">tartarugarecords.bandcamp.com/album/lueur</a></p>
              <hr />
              <iframe title="Embedded content" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535356630&color=%234c4655&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              <br />
              <hr />
              <div className="img-center">
                <OpacityImage imageUrl={album1}/>
              </div>
              <br />
          </div>
      </div>
    </div>
}

export default Paths;
