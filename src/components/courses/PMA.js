import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

class Pma extends Component {
  render() { return<div className="container">
      <div className="content">
      
      {/* <article>
        <div className="date"> 06.06.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 23, Examples 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma23.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma23.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma23.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 29.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 22, MIDI & Mapping</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma22.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma22.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma22.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 15.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 21, Examples 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma21.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma21.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma21.zip" target="_blank">Download materials</a></p>
      </article>


      <article>
        <div className="date"> 15.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 20, Processing</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma20.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma20.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma20.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 08.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 19, Sampling</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma19.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma19.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma19.zip" target="_blank">Download materials</a></p>
      </article>
      
      <article>
        <div className="date"> 01.04.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 18, Assignment 3</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma18.pdf" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma18.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma18.pdf" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 18.03.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 17, GUI</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma17.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma17.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma17.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 11.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 16, Demand</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma16.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma16.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma16.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 04.02.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 15, Workshop</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma15.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma15.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma15.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 28.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 14, Patterns 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma14.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma14.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma14.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 21.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 13, Synthesis 2</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma13.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma13.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma13.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 12.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 12, Patterns 1 </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma12.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma12.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma12.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 07.01.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 11, Synthesis 1</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma11.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma11.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma11.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 10.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 10, Signals </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma10.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma10.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2020-2021/pma10.zip" target="_blank">Download materials</a></p>
      </article>


      <article>
        <div className="date"> 03.12.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 09, Clocks </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.zip" target="_blank">Download materials</a></p>
      </article>

      <article>
        <div className="date"> 26.11.2020 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Routines </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.zip" target="_blank">Download materials</a></p>
      </article>

    

      */
    
      
        }

<article>
    <div className="date"> 10.02.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 16, More Patterns</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma16.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma16.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma16.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 03.02.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 15, Workshop</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma15.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma15.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma15.zip" target="_blank">Download materials</a></p>
  </article>


<article>
    <div className="date"> 27.01.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 14, Synthesis 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma14.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma14.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma14.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 20.01.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 13, Patterns </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma13.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma13.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma13.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 23.12.2021 </div>
    <div className="hr"><hr /></div>
    <h1>Class 11, Sampling </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma12.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma12.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma12.zip" target="_blank">Download materials</a></p>
    <p><a href="https://vimeo.com/manage/videos/405917708" target="_blank">Video 1</a></p>
    <p><a href="https://vimeo.com/manage/videos/405914758" target="_blank">Video 2</a></p>
    <p>* access code to the videos is the same as for class</p>
  </article>

<article>
    <div className="date"> 02.12.2021 </div>
    <div className="hr"><hr /></div>
    <h1>Class 10, Synthesis </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma11.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma11.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma11.zip" target="_blank">Download materials</a></p>
  </article>


<article>
    <div className="date"> 25.11.2021 </div>
    <div className="hr"><hr /></div>
    <h1>Class 09, Signals </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma09.zip" target="_blank">Download materials</a></p>
  </article>

<article>
        <div className="date"> 19.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Clocks </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma08.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 11.11.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Routines </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma07.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma07.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 14.10.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 06, Strategies </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma06.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma06.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma06.zip" target="_blank">Download materials</a></p>
      </article>

 <article>
        <div className="date"> 07.10.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 05, Data Structures</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma05.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma05.zip" target="_blank">Download materials</a></p>
      </article>
        

<article>
        <div className="date"> 30.09.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 04, Functions</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma04.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma04.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma04.zip" target="_blank">Download materials</a></p>
      </article>

<article>
            <div className="date"> 23.09.2021 </div>
            <div className="hr"><hr /></div>
            <h1>Class 03, Control Flow</h1>
            <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma03.zip" target="_blank">
            <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma03.png" />
            </a>
            <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma03.zip" target="_blank">Download materials</a></p>
          </article>

<article>
        <div className="date"> 16.09.2021 </div>
        <div className="hr"><hr /></div>
        <h1>Class 02, Syntax</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma02.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma02.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma02.zip" target="_blank">Download materials</a></p>
      </article>


<article>
          <div className="date"> 09.09.2021 </div>
          <div className="hr"><hr /></div>
          <h1>Class 01, Programming and Music 1</h1>
          <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma01.zip" target="_blank">
          <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma01.png" />
          </a>
          <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2021-2022/pma01.zip" target="_blank">Download materials</a></p>
        </article>

      </div>
  </div>
  }
}

export default Pma;
