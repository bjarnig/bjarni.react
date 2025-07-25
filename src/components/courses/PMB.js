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
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb26.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 18.05.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 25, More JS</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb25.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 11.05.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 24, P5js</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb24.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 20.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 23, ToneJS & Exercises</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb23.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 13.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 22, ToneJS</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb22.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>
      
      <article>
        <div className="date"> 06.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 21, JavaScript Workshop 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.pdf" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb21.pdf" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 30.03.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 20, JavaScript 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb20.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 16.03.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 19, JavaScript 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb19.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 16.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 18, Tidal Cycles</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb18.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 09.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 17, Spectromorphology</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb17.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 02.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 16, CDP</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb16.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 26.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 15, Examples</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb15.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 19.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 14, Analysis</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb14.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 12.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 13, Complexity 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb13.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>


      <article>
        <div className="date"> 05.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 12, Workshop 3</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb12.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 01.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, Complexity 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb11.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
        <p><a href="https://vimeo.com/489566375" target="_blank" rel="noopener noreferrer">Video 1</a></p>
        <p><a href="https://vimeo.com/489566220" target="_blank" rel="noopener noreferrer">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

      <article>
        <div className="date"> 01.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Chaos</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb10.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 24.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Grammars and Fractals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb09.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 17.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Workshop 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb07.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 10.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Live Coding 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb06.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 13.10.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Live Coding 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pmb05.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>
         
 */}

{/* <article>
  <div className="date"> 07.06.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Javascript 4, Examples</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 17.05.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Javascript 3, ToneJS and P5.js</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 03.05.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Javascript 2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 19.04.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Javascript 1</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>
 */}


{/* 

<article>
  <div className="date"> 29.03.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Tidal Cycles</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 22.02.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Live Coding 2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 15.02.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Live Coding</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 06.02.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Spectromorphology</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 01.02.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Analysis & CDP2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 25.01.2022 </div>
  <div className="hr"><hr /></div>
  <h1>CDP</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb13.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb13.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb13.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 11.01.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 12, CA + Genetic Algorithm</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
        <div className="date"> 06.12.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, OOP</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
        <p><a href="https://vimeo.com/660936533" target="_blank" rel="noopener noreferrer">Video</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

<article>
        <div className="date"> 30.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Complexity</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
        <div className="date"> 23.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Workshop 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
        <div className="date"> 16.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Chaos</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
        <div className="date"> 09.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Grammars and Fractals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
        <div className="date"> 02.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Micro-Examples</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.png" />
        </a>
        <p><a href="https://www.youtube.com/watch?v=VaVWoq0F1VA" target="_blank" rel="noopener noreferrer">View the class</a></p>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>
*/}
{/* 
<article>
    <div className="date"> 30.05.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 24, Machine Learning 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb24.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb24.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb24.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
    <div className="date"> 23.05.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 23, Machine Learning</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb23.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb23.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb23.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
    <div className="date"> 15.05.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 22, Evolution</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb22.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
    <div className="date"> 02.05.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 21, Spatialisation</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb21.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
    <div className="date"> 25.04.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 20, Tidal Cycles 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb20.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
    <div className="date"> 11.04.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 19, Tidal Cycles</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb19.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
    <div className="date"> 21.03.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 18, Live Coding</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb18.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
    <div className="date"> 14.02.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 17, Live Coding</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb17.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
    <div className="date"> 07.02.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 16, CDP and Recap</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb16.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>


<article>
    <div className="date"> 31.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 15, Spectromorphology</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb15.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>


<article>
    <div className="date"> 24.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 14, CDP 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb14.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
    <div className="date"> 17.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 12, CDP</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb12.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
    <div className="date"> 10.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 11, Examples</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb11.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
        <div className="date"> 13.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Networks and Agents</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.png" />
        </a>
        <p><a href="https://vimeo.com/778498894" target="_blank" rel="noopener noreferrer">View the class A</a></p>
        <p><a href="https://vimeo.com/778498590" target="_blank" rel="noopener noreferrer">View the class B</a></p>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb10.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
        <p>* access code to the videos is the same as for class</p>
      </article>

<article>
    <div className="date"> 06.12.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 09, Networks</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb09.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
    <div className="date"> 29.11.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 08, Chaos</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.zip" target="_blank" rel="noopener noreferrer">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb08.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
  </article>

<article>
        <div className="date"> 15.11.2022 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Grammars and Fractals</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb07.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
        <div className="date"> 21.10.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Examples</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb06.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
        <p><a href="https://vimeo.com/762274416" target="_blank" rel="noopener noreferrer">Video 1</a></p>
        <p><a href="https://vimeo.com/418394047" target="_blank" rel="noopener noreferrer">Video 2</a></p>
        <p>* access code to the videos is the same as for class</p> 
      </article>

<article>
        <div className="date"> 11.10.2022 </div>
        <div className="hr"><hr /></div>
        <h1>Class 05, Sonification</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb05.zip" target="_blank" rel="noopener noreferrer">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb05.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
      </article>

<article>
            <div className="date"> 28.09.2021 </div>
            <div className="hr"><hr /></div>
            <h1>Class 04, Workshop 1</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb04.zip" target="_blank" rel="noopener noreferrer">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb04.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb04.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
          </article>


<article>
            <div className="date"> 27.09.2022 </div>
            <div className="hr"><hr /></div>
            <h1>Class 03, Waveforms</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb03.zip" target="_blank" rel="noopener noreferrer">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb03.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb03.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
          </article>

<article>
<div className="date"> 13.09.2022 </div>
<div className="hr"><hr /></div>
<h1>Class 02, Granularity</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb02.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb02.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2022-2023/pmb02.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article> */}
{/* 
<article>
<div className="date"> 28.05.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 21, Machine Learning 2</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb21.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb21.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb21.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 21.05.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 20, Machine Learning</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb20.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb20.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb20.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 23.04.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 19, Tidal Cycles</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 09.04.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 18, Spatialisation</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 02.04.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 17, Examples</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 26.03.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 16, Live Coding 2</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 12.03.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 15, Live Coding 1</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
<div className="date"> 13.02.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 14, Analysis</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
<div className="date"> 06.02.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 13, Spectromorphology</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 30.01.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 12, CDP 2</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 23.01.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 11, CDP</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 16.01.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 10, Evolution</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 09.01.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 09, Networks</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 05.12.2023 </div>
<div className="hr"><hr /></div>
<h1>Class 08, Grammars and Fractals</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 14.11.2023 </div>
<div className="hr"><hr /></div>
<h1>Class 07, Chaos</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

*/}

<article>
  <div className="date"> 20.05.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 19, ML</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb19.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 06.05.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 18, CA + Genetic Algorithm</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb18.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 15.04.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 17, Network</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb17.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 01.04.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 16, Spatialisation</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb16.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 25.03.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 15, Live Coding 3</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb15.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>


<article>
  <div className="date"> 18.03.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 14, Live Coding 2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb14.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 18.02.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 13, Live Coding</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb13.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 04.02.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 12, CDP 4</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb12.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 28.01.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 11, CDP 3</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb11.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 21.01.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 10, CDP 2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb10.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 14.01.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 09, CDP</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb09.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
  <div className="date"> 07.01.2025 </div>
  <div className="hr"><hr /></div>
  <h1>Class 08, Grammars and Fractals</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.zip" target="_blank" rel="noopener noreferrer">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb08.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 19.11.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 07, Chaos</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb07.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 22.10.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 06, Sonification</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb06.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb06.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb06.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 08.10.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 04, Waveforms</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb04.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb04.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb04.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 1.10.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 03, Granular Examples</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb03.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb03.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb03.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 24.09.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 02, Granularity</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb02.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb02.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb02.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article>

<article>
<div className="date"> 17.09.2024 </div>
<div className="hr"><hr /></div>
<h1>Class 01, Programming and Music 2</h1>
<a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb01.zip" target="_blank" rel="noopener noreferrer">
<OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb01.png" />
</a>
<p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pmb01.zip" target="_blank" rel="noopener noreferrer">Download materials</a></p>
</article> 


      </div>
  </div>
  }
}

export default Pmb;
