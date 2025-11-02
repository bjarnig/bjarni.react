import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const jar4 = imageurl + "JAR4.jpg";
const selective_retentions_a = imageurl + "selective-retentions-a.jpg";
const selective_retentions_b = imageurl + "selective-retentions-b.jpg";
const article = imageurl + "recomposing-data.png";
const bba = imageurl + "bba.png";
const bbb = imageurl + "bbb.png";
const xcoax = imageurl + "xcoax.jpg";
const contextandscope = imageurl + "Contexandscope.png";
const interruptsandintervention = imageurl + "InterruptsandIntervention.png";
const processesandpotentials = imageurl + "Processes_and_Potentials.png";
const pr2 = imageurl + "PR2.jpg";

class Writings extends Component {

constructor(props) {
  super(props);
  this.state = { bandcampStyle:{ border: '0', width: '100%', height: '120px' } };
}
  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">

      <div className="content">

        <div className="music-submenu">

        <ul className="nav nav-pills">
                <li>
                  <a href="music">pieces</a>
                </li>
                <li>
                  <a href="live">live</a>
                </li>
                <li>
                  <a href="collaborations">collaborations</a>
                </li>
                 <li className="active">
                  <a href="writings">writings</a>
                </li>
                <li>
                <a href="https://github.com/bjarnig" target="_blank" rel="noopener noreferrer">software</a>
                </li>
                 <li>
                <a href="https://www.youtube.com/@bjarni-gunnarsson" target="_blank" rel="noopener noreferrer">
                visual</a>
                </li>
              </ul>
          <div className="hr"><hr/></div>

        </div>

        <article>
          <div className="date">2025</div>
          <div className="hr"><hr /></div>
          <h3>Selective Retention: Composing through Queries and Graphs</h3>
          <p>The Journal for Artistic Research (JAR), Issue 36</p>
          <div className="img-center-noborder">
            <a
              href="https://www.researchcatalogue.net/view/2938321/3620117"
              target="_blank" rel="noopener noreferrer"
            >
              <OpacityImage imageUrl={selective_retentions_b} />
            </a>
          </div>
          <p>'Selective Retention: Composing through Queries and Graphs' reflects on composing through software systems while focusing on reinterpreting musical materials through computational methods. The exposition examines two projects that utilise software tools as temporal portals, merging algorithms with composition to create new musical contexts. It highlights the evolving relationship between these tools and their source materials, emphasising a process of iterative approaches and adaptation. The text also explores the emergent nature of creative intention and the importance of addressing local details in sound and coded data. Within the exposition, software applications are exposed, the ideas behind them are discussed, and examples of music composed with them are presented.</p>
          <p>
            <a href="https://www.jar-online.net/en/issues/36" target="_blank" rel="noopener noreferrer">
              JAR, Issue 36
            </a>
          </p>
          <p>
            <a href="https://www.researchcatalogue.net/view/2938321/3620117" target="_blank" rel="noopener noreferrer">
              Research Catalogue
            </a>
          </p>
        </article>

        <article>
          <div className="date">2025</div>
          <div className="hr"><hr /></div>
          <h3>Recomposing Data: Machine Learning As Compositional Process</h3>
          <p>KC Research Group, 2025</p>
          <div className="img-center-noborder">
            <a
              href="https://www.researchcatalogue.net/profile/show-exposition?exposition=2532879"
              target="_blank" rel="noopener noreferrer"
            >
              <OpacityImage imageUrl={article} />
            </a>
          </div>
          <p>This research explores new ways of composing computer music by combining algorithmic techniques, sound synthesis, and live coding with the use of machine learning. Rather than relying on large external datasets or aiming for automation, the project focuses on artistic processes that include data-making, model training, and real-time performance as interconnected creative activities. </p>

<p>The work places strong emphasis on how material is created, interpreted, and transformed through interaction with generative systems. These systems are built from modular components, drawing on personal sound archives, parametric control spaces, and feedback mechanisms. Performances become situations where the composer and the system respond to one another, shaping the music in ways that evolve. Rather than following fixed structures, the pieces unfold through a mix of intuition, analysis, and system behaviour.</p>

<p>A central aim of the research is to examine how compositional methods can adapt when learning models and algorithmic processes are treated as part of a broader musical practice. The focus is on how these methods affect the shaping of sound, form, and interaction. This opens a space where artistic judgment, unpredictability, and system design work together to support experimental approaches to composition.</p>
          <p>
            <a href="https://www.researchcatalogue.net/profile/show-exposition?exposition=2532879" target="_blank" rel="noopener noreferrer">
              Research Catalogue
            </a>
          </p>
        </article>

        <article>
          <div className="date">2023</div>
          <div className="hr"><hr /></div>
          <h3>Balancing Behaviours</h3>
          <p>ECHO journal by Orpheus Instituut</p>
          <div className="img-center">
            <a
              href="https://echo.orpheusinstituut.be/article/balancing-behaviours"
              target="_blank" rel="noopener noreferrer"
            >
              <OpacityImage imageUrl={bba} />
            </a>
          </div>
          <div className="img-center">
            <a
              href="https://echo.orpheusinstituut.be/article/balancing-behaviours"
              target="_blank" rel="noopener noreferrer"
            >
              <OpacityImage imageUrl={bbb} />
            </a>
          </div>
          <p>
            This article explores creating computer music using emergent systems based on rules and local interactions. I present three practical projects that examine how algorithmic behaviors can be integrated with sound processes, focusing on the challenges of connecting computational systems with musical outcomes. The work investigates process-based approaches to sound where materials evolve through behavioral dimensions rather than fixed parameters.
          </p>
          <p>
            The discussion centers on mapping strategies between different domains - how to translate algorithmic processes into musical results without losing the richness of either. I examine the relationship between emergent algorithms that model natural processes and their musical applications, questioning whether these systems should feature or suppress their "natural" aspects. The approach emphasizes interaction as part of the system itself rather than external control, exploring ways to modify contexts, observe behaviors, and interfere with ongoing processes.
          </p>
          <p>
            Three software systems demonstrate these concepts in practice. "Brutes and Bullies" uses agent-based simulations where creatures engage in local interactions, with sound generated through observation algorithms attached to the evolving behaviors. "Wildfires" creates spatial compositions for Wave Field Synthesis using distributed sound sources that connect and self-organize. "Costest" applies random graph theory to sequence pre-composed materials, using network models to create hidden organizational principles. Each project maintains separation between sound material and structural processes while exploring how these different levels can interact meaningfully in musical contexts.
          </p>
          <p>
            <a href="https://echo.orpheusinstituut.be/article/balancing-behaviours" target="_blank" rel="noopener noreferrer">
              ECHO Article
            </a>
            {" | "}
            <a href="https://orpheusinstituut.be/en/publications/echo" target="_blank" rel="noopener noreferrer">
              ECHO Journal
            </a>
          </p>
        </article>

        <article>
          <div className="date">2021</div>
          <div className="hr"><hr /></div>
          <h3>Synthesis and Operation Flows</h3>
          <p>xCoAx 2021 Proceedings</p>
          <div className="img-center-noborder">
            <a href="https://2021.xcoax.org/#program" target="_blank" rel="noopener noreferrer">
              <OpacityImage imageUrl={xcoax} />
            </a>
          </div>
          <p>
            This article explores digital sound synthesis through operational workflows that treat sound creation as sequences of transformations applied to signals. I examine how sound construction can be approached as a combination of synthesis and applied transformations, where the process of organizing these operations becomes subject to creative variation and generative algorithms. The focus shifts from traditional algorithmic composition that maps generated data to musical domains, toward dynamic workflows inspired by data transformation pipelines and signal flows.
          </p>
          <p>
            The work investigates how to represent synthetic sound streams as pipelines of transformations that can be manipulated or changed while running, and how to generate transformation pipelines that produce evolving sounds. This approach centers entirely around sound itself, introducing a functional strategy that treats sound as an operation sequence. I explore concepts like operational spaces, process configuration, and incompleteness as creative models for synthesis, examining how dynamic changes in synthesis flows can work as flexible interaction modes.
          </p>
          <p>
            A software framework called OF (Operation Flows) demonstrates these ideas through four main process categories: synthesis processes with dynamic waveform generation, atomic sound transformations that adapt to incoming signals, operation pipelines and algorithms to control them, and direct access methods for content-based triggers and actions. The framework emphasizes the "liveness" of processes, unpredictability through system complexity, and direct intervention capabilities that allow halting or disturbing running pipelines. This creates a workflow where creative intentions take shape during the activity of sound production rather than only prior to it, bridging algorithms with the operations of electronic music production.
          </p>
          <p>
            <a href="https://2021.xcoax.org/#program" target="_blank" rel="noopener noreferrer">
              xCoAx 2021
            </a>
            {" | "}
            <a href="https://www.academia.edu/50027204/Synthesis_and_Operation_Flows" target="_blank" rel="noopener noreferrer">
              Academia.edu
            </a>
          </p>
        </article>

        <article>
          <div className="date">2021</div>
          <div className="hr"><hr /></div>
          <h3>Implementing Koenig's Project 2</h3>
          <p>Koncon Lectorate and Research</p>
          <div className="img-center">
            <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank" rel="noopener noreferrer">
              <OpacityImage imageUrl={pr2} />
            </a>
          </div>
          <p>
            This exposition documents the modern implementation of Project 2, a historically important computer program for assisted musical composition originally developed by Gottfried Michael Koenig starting in 1965. The program creates compositional variants based on input data provided by composers, working with parameters including instrument definitions, rhythm, harmony, dynamics, and articulation. Data flows from lists into scores through selection methods like arbitrary selection, serial selection, weighted selection, and directionally defined selection, with parameters arranged in hierarchical relationships to avoid conflicts during the composition process.
          </p>
          <p>
            The research project involved close collaboration between Koenig and developer Darien Brito to create a working Python implementation based on Koenig's recent specifications. The program operates in two distinct phases: an input phase where all data is extensively validated to ensure correctness, and a production phase where the autonomous composition process generates score tables that can be printed, saved, or played back via MIDI. The implementation emphasizes precise data validation because the largely chance-based composition process must rely on properly structured input data to function without problems.
          </p>
          <p>
            The exposition includes detailed discussions with both Koenig and Brito about the development process, exploring how the program's 55-year evolution reflects changing technical possibilities while maintaining its core compositional philosophy. Koenig explains how Project 2 extends Project 1's ideas by giving composers greater control through refined selection procedures, instrument definitions, and parameter hierarchies, while Brito discusses the technical challenges of implementing text-based input validation and maintaining compatibility with Koenig's idiosyncratic design decisions. The document concludes with correspondence tracing the program's development history from 1965 through various implementation attempts, demonstrating the persistence of these compositional ideas across multiple technological generations.
          </p>
          <p>
            <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank" rel="noopener noreferrer">
              Research Catalogue
            </a>
          </p>
        </article>

        <article>
          <div className="date">2019</div>
          <div className="hr"><hr /></div>
          <h3>Context and Scope</h3>
          <p>Koncon Lectorate and Research</p>
          <div className="img-center">
            <a href="https://www.researchcatalogue.net/view/540350/540351" target="_blank" rel="noopener noreferrer">
              <OpacityImage imageUrl={contextandscope} />
            </a>
          </div>
          <p>
            This research exposition explores the context and scope of generative processes in computer music composition, focusing on how algorithmic processes can operate within shared environments rather than as isolated tools. I examine the relationship between algorithms, agency, proximity, and context in creating experimental environments for generative processes to emerge from and be conditioned by. The work challenges traditional creator-tool-artifact distinctions by situating algorithmic processes on the borders of idea and implementation, introducing concepts of shared agency and process-based approaches to sound.
          </p>
          <p>
            Central to the research is the development of ADEC (Assemblage for Direct, Environment-bounded Composition), a SuperCollider-based framework that facilitates code-first composition through direct access to generative processes and sound itself. Drawing on Katherine Hayles' concept of "cognitive assemblage," I propose extending generative algorithms to include transformative flows between human and technical actors. The framework emphasizes proximity through neighboring relations, multilocal processes over universal laws, and persistent state where environments behave according to previous activities rather than operating amnestically.
          </p>
          <p>
            The research demonstrates these concepts through two compositions: "Polytree" (2018), which explores context-dependent processes using custom waveforms and waveshaping techniques, and "Copaline" (2019), an interactive piece consisting of 38 code snippets designed for live-coding exploration. Both works embody the principle of persistent state where generative processes evolve through traces of previous activity, creating dynamic environments where composition and system development occur simultaneously. The approach emphasizes technical mediation, incompleteness as a creative model, and observer patterns that enable circular causality and blurred agency between human composers and autonomous technical processes.
          </p>
          <p>
            <a href="https://www.researchcatalogue.net/view/540350/540351" target="_blank" rel="noopener noreferrer">
              Research Catalogue Article
            </a>
            {" | "}
            <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank" rel="noopener noreferrer">
              Research Catalogue Profile
            </a>
            {" | "}
            <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank" rel="noopener noreferrer">
              Academia.edu
            </a>
          </p>
        </article>

        <article>
          <div className="date">2018</div>
          <div className="hr"><hr /></div>
          <h3>Interrupts and Intervention</h3>
          <p>SMC2018 Conference, Cyprus</p>
          <div className="img-center">
            <a href="https://www.researchcatalogue.net/view/543155/543156" target="_blank" rel="noopener noreferrer">
              <OpacityImage imageUrl={interruptsandintervention} />
            </a>
          </div>
          <p>
            This research exposition explores the implementation of interrupts and intervention as compositional tools for generative computer music. The work addresses how to model algorithmic processes that support openness, interaction, and malleable temporal organization, moving beyond predefined algorithms toward adaptive processes that evolve within compositional situations. The central concept involves separating the scheduling and producing components of generative algorithms to balance the influence of time-dependent processes with their activation through block-based, interrupt-driven scheduling.
          </p>
          <p>
            The research critiques traditional goal-oriented algorithms that operate as "black boxes," instead proposing container-based algorithms with adaptive heuristics that can be modified in real-time. Drawing on heuristic methods that explore uncertainty rather than progressing toward known goals, the work emphasizes "educated guesses" and approximations that remain subject to change. The framework distinguishes between external influence (direct intervention and control) and internal influence (conversational and cooperative exchange), introducing dynamic goal-setting as a compositional process based on discovery rather than predetermined endpoints.
          </p>
          <p>
            The technical implementation, CPSI (Container-based Process Scheduler with Interaction), is built in SuperCollider and consists of three main components: a scheduler, an interaction module, and a process container. The system supports partial processes implemented as SuperCollider patterns that can be segmented into blocks, each representing different algorithmic states accessible through multiple entry points. Key features include dynamic containers, block-division for interactive scheduling, adaptive heuristics that can be altered during execution, real-time reconfiguration capabilities, and interrupt-based scheduling that enables processes to be started, stopped, suspended, or taken over mid-execution.
          </p>
          <p>
            The research demonstrates two categories of interaction: direct actions (10-200ms) that cause immediate forceful changes, and gradual influences (&gt;1000ms) that enable conversational modes focusing on behavioral changes. The interrupt mechanism creates openings in algorithmic operational space, allowing external forces to reshape ongoing processes while maintaining the possibility for autonomous operation. This approach has been applied in creating live performances and fixed-media compositions, offering new perspectives for representing and interacting with generative processes in open and direct manners.
          </p>
          <p>
            <a href="https://www.researchcatalogue.net/view/543155/543156" target="_blank" rel="noopener noreferrer">
              Research Catalogue Article
            </a>
            {" | "}
            <a href="https://www.researchcatalogue.net/profile/?person=427702" target="_blank" rel="noopener noreferrer">
              Research Catalogue Profile
            </a>
            {" | "}
            <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank" rel="noopener noreferrer">
              Academia.edu
            </a>
          </p>
        </article>

        <article>
          <div className="date">2013</div>
          <div className="hr"><hr /></div>
          <h3>Processes and Potentials</h3>
          <p>Institute of Sonology</p>
          <div className="img-center">
            <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank" rel="noopener noreferrer">
              <OpacityImage imageUrl={processesandpotentials} />
            </a>
          </div>
          <p>
            Processes and Potentials explores composition as an open-ended process rooted in interaction, transformation, and emergence. Rather than treating sound as a fixed object, the work considers it as something that comes into being through dynamic relationships between signals, systems, and listening agents. It examines how compositional activity can unfold within computational environments where structures are not predetermined but shaped through ongoing negotiation between performer and system.
          </p>
          <p>
            The text reflects on how algorithms, data, and analysis are not neutral components but active agents that participate in the formation of musical behaviour. Strategies such as classification, selection, and retention are approached as compositional tools, enabling systems to adapt and respond over time. By embracing unstable configurations and procedural growth, the work seeks to engage with forms that are provisional and situated, always contingent on their conditions of emergence.
          </p>
          <p>
            Central to the investigation is the idea that composition can be a mode of engaging with complexity, not by mastering it but by listening to it unfold. The text draws connections between computational systems and compositional thought, proposing that the potential of a piece lies not in its final state but in the interactions it allows, the questions it raises, and the environments it sustains.
          </p>
          <p>
            <a href="https://sonology.academia.edu/BjarniGunnarsson" target="_blank" rel="noopener noreferrer">
              Academia.edu
            </a>
          </p>
        </article>


        {/* <div className="media">
          <p>Research Catalogue</p>
          <div className="img-center">
          <a href="https://www.researchcatalogue.net/profile/?person=427702">
            <OpacityImage imageUrl= {research} />
            </a>
          </div>
        </div>

        <div className="media">
          <p>Academia.edu</p>
          <div className="img-center">
          <a href="https://sonology.academia.edu/BjarniGunnarsson">
            <OpacityImage imageUrl= {academia} />
            </a>
          </div>
        </div> */}


    </div>
    </div>
  }
}

export default Writings;
