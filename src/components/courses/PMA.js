import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

class Pma extends Component {
  render() { return<div className="container">
      <div className="content">
      
{/*    
<article>
  <div className="date"> 12.05.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 22, Examples</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.zip" target="_blank">Download materials</a></p>
</article>


<article>
  <div className="date"> 28.04.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 21, Examples</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">Download materials</a></p>
</article>


<article>
  <div className="date"> 14.04.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 20, Processing</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">Download materials</a></p>
  <p><a href="https://vimeo.com/405917465" target="_blank">Video 1</a></p>
  <p><a href="https://vimeo.com/405915122" target="_blank">Video 2</a></p>
  <p>* password for the video is: composing</p>
</article>

<article>
  <div className="date"> 07.04.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 19, MIDI and Mapping</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 31.03.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 18, GUI</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">Download materials</a></p>
</article>


<article>
  <div className="date"> 24.03.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 17, Demand</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 10.02.2022 </div>
  <div className="hr"><hr /></div>
  <h1>Class 16, More Patterns</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">Download materials</a></p>
</article>

<article>
    <div className="date"> 03.02.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 15, Workshop</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">Download materials</a></p>
  </article>


<article>
    <div className="date"> 27.01.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 14, Synthesis 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 20.01.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 13, Patterns </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 23.12.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 11, Sampling </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.zip" target="_blank">Download materials</a></p>
    <p><a href="https://vimeo.com/manage/videos/405917708" target="_blank">Video 1</a></p>
    <p><a href="https://vimeo.com/manage/videos/405914758" target="_blank">Video 2</a></p>
    <p>* access code to the videos is the same as for class</p>
  </article>


<article>
  <div className="date"> 25.05.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 22, Examples 2</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma22.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 11.05.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 21, Examples 1</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 04.05.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 20, Effects</h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 06.04.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 19, MIDI and Mapping </h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 23.03.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 18, GUI </h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 23.02.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 17, Demand </h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 16.02.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 16, Patterns 2 </h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">Download materials</a></p>
</article>

<article>
  <div className="date"> 09.02.2023 </div>
  <div className="hr"><hr /></div>
  <h1>Class 15, Synthesis 2 </h1>
  <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">
  <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.png" />
  </a>
  <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">Download materials</a></p>
</article>

<article>
    <div className="date"> 26.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 14, Workshop </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 19.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 13, Patterns </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 12.01.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 11, Sampling </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11b.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11b.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11b.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 15.12.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 10, Synthesis </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 08.12.2022 </div>
    <div className="hr"><hr /></div>
    <h1>Class 09, Signals </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.zip" target="_blank">Download materials</a></p>
  </article>

<article>
        <div className="date"> 30.11.2022 </div>
        <div className="hr"><hr /></div>
        <h1>Class 08, Clocks </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 17.11.2022 </div>
        <div className="hr"><hr /></div>
        <h1>Class 07, Routines </h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.zip" target="_blank">Download materials</a></p>
      </article>

      
  
*/}

{/* <article>
    <div className="date"> 02.05.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 21, Examples 2</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma21.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 25.04.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 20, Examples</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma20.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 18.04.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 19, Effects</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma19.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 11.04.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 18, MIDI and Mapping</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma18.zip" target="_blank">Download materials</a></p>
  </article>


<article>
    <div className="date"> 28.03.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 17, GUI</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma17.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 14.03.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 16, Demand</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma16.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 15.02.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 15, Synthesis 2 </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma15.zip" target="_blank">Download materials</a></p>
  </article>


<article>
    <div className="date"> 08.02.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 14, Workshop </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma14.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 01.02.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 13, More Patterns </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma13.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 18.01.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 12, Patterns </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma12.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 11.01.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 11, Sampling </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma11.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 21.12.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 10, Synthesis </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma10.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 13.12.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 09, Signals </h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma09.zip" target="_blank">Download materials</a></p>
  </article>


<article>
      <div className="date"> 16.11.2023 </div>
      <div className="hr"><hr /></div>
      <h1>Class 08, Clocks </h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma08.zip" target="_blank">Download materials</a></p>
    </article>


<article>
      <div className="date"> 09.11.2023 </div>
      <div className="hr"><hr /></div>
      <h1>Class 07, Routines </h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma07.zip" target="_blank">Download materials</a></p>
    </article>

<article>
      <div className="date"> 12.10.2023 </div>
      <div className="hr"><hr /></div>
      <h1>Class 06, Approaches </h1>
      <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma06.zip" target="_blank">
      <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma06.png" />
      </a>
      <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma06.zip" target="_blank">Download materials</a></p>
    </article>

<article>
        <div className="date"> 05.10.2023 </div>
        <div className="hr"><hr /></div>
        <h1>Class 05, Data Structures</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma05.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma05.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma05.zip" target="_blank">Download materials</a></p>
      </article>

<article>
        <div className="date"> 28.09.2023 </div>
        <div className="hr"><hr /></div>
        <h1>Class 04, Functions</h1>
        <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma04.zip" target="_blank">
        <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma04.png" />
        </a>
        <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma04.zip" target="_blank">Download materials</a></p>
      </article>

      

<article>
    <div className="date"> 21.09.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 03, Control Flow</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma03.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma03.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma03.zip" target="_blank">Download materials</a></p>
  </article>

<article>
    <div className="date"> 14.09.2023 </div>
    <div className="hr"><hr /></div>
    <h1>Class 02, Syntax</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma02.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma02.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2023-2024/pma02.zip" target="_blank">Download materials</a></p>
  </article> */}

<article>
    <div className="date"> 12.09.2024 </div>
    <div className="hr"><hr /></div>
    <h1>Class 01, Programming and Music 1</h1>
    <a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pma01.zip" target="_blank">
    <OpacityImage imageUrl= "https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pma01.png" />
    </a>
    <p><a href="https://s3.eu-central-1.amazonaws.com/bjarnigwebdocs/2024-2025/pma01.zip" target="_blank">Download materials</a></p>
  </article> 

      </div>
  </div>
  }
}

export default Pma;
