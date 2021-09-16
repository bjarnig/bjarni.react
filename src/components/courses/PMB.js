import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

class Pmb extends Component {
  render() { return<div className="container">
      <div className="content">

      {/* <article>
        <div className="date"> 25.05.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 26, JS Examples</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 18.05.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 25, More JS</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 11.05.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 24, P5js</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 20.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 23, ToneJS & Exercises</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 13.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 22, ToneJS</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.zip" target="_blank">Download materials</a></p>
      </article>
      
      <article>
        <div className="date"> 06.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 21, JavaScript Workshop 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.pdf" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.pdf" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 30.03.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 20, JavaScript 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 16.03.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 19, JavaScript 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 16.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 18, Tidal Cycles</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 09.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 17, Spectromorphology</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 02.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 16, CDP</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 26.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 15, Examples</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 19.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 14, Analysis</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 12.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 13, Complexity 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.zip" target="_blank">Download materials</a></p>
      </article>


      <article>
        <div className="date"> 05.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 12, Workshop 3</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 01.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, Complexity 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.zip" target="_blank">Download materials</a></p>
        <p><a href="https://vimeo.com/489566375" target="_blank">Video 1</a></p>
        <p><a href="https://vimeo.com/489566220" target="_blank">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 01.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Chaos</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 24.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Grammars and Fractals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 17.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Workshop 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 10.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Live Coding 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 13.10.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Live Coding 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 06.10.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 05, Sonification</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb05.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb05.zip" target="_blank">Download materials</a></p>
      </article>

          <article>
            <div className="date"> 29.09.2020 </div>
            <div className="hr"><hr /></div>
            <h1>Class 04, Workshop 1</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb04.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb04.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2019-2020/pmb04.zip" target="_blank">Download materials</a></p>
          </article>

          <article>
            <div className="date"> 22.09.2020 </div>
            <div className="hr"><hr /></div>
            <h1>Class 03, Waveforms</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb03.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb03.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb03.zip" target="_blank">Download materials</a></p>
          </article>

         
 */}

<article>
<div className="date"> 14.09.2020 </div>
<div className="hr"><hr /></div>
<h1>Class 02, Granularity</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb02.zip" target="_blank">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb02.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb02.zip" target="_blank">Download materials</a></p>
</article>

<article>
<div className="date"> 07.09.2021 </div>
<div className="hr"><hr /></div>
<h1>Class 01, Programming and Music 2</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb01.zip" target="_blank">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb01.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pmb01.zip" target="_blank">Download materials</a></p>
</article>


      </div>
  </div>
  }
}

export default Pmb;
