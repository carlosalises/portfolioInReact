import './App.css';
import Education from './Education';
import Experience from './Experience';
import Presentation from './Presentation';
import Project from './Project';
import {spaceGoRsp, esdiRsp} from "./data/Responsabilities"
import dungeonImage from "./images/dungeon.png";
import hangmanImage from "./images/hangman.png";
import {firsProjectDescription, hangmanDescription, secondProject} from "./data/projectsObjects";

export function App() {

  return (
      <main>

            <section style={{gridArea : "presentation"}}>
              <article>
                 <Presentation name="Carlos Alises Mora" cargo="FrontEnd Developer"/>
              </article>
            </section>

            <section style={{gridArea: "experience"}}>

              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 20}}>MOST RECENT EXPERIENCE</h1>
              <article className='experience-article'>
                <Experience cargo="Front End" place="SpaceGo" fecha="12/2022 - 04/2023" habilities={spaceGoRsp}/>
              </article>
              <br></br>
              <article className='experience-article'>
                <Experience cargo="Technical Support" place="ESDI" habilities={esdiRsp} fecha="10/2020 - 03/2021"/>
              </article>

            </section>

            <section style={{gridArea:"education"}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>EDUCATION</h1>
              <div style={{display: "flex", justifyContent: "center"}}>
                <article style={{margin : "10px"}}>
                  <Education type= "CFGM" date="September 2019 - July 2021" place="Institut Sabadell" about="Microcomputer systems and networks"/>
                </article>
                <article style={{margin : "10px"}}>
                  <Education type= "CFGS" date="September 2021 - July 2023" place="Institut Sabadell" about="Multiplatform application development, profile 
								  professional video games and digital leisure."/>
                </article>
              </div>
            </section>
          

            <section id='skills-container' style={{gridArea:"skills"}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>SKILLS</h1>
                <div id='skills-summary'>
                  <span style={{ '--i': 1 }}>
                    HTML
                  </span >
                  <span style={{ '--i': 2 }}>
                    CSS
                  </span>
                  <span style={{ '--i': 3 }}>
                    JAVASCRIPT
                  </span>
                  <span style={{ '--i': 4 }}>
                    UNITY
                  </span>
                  <span style={{ '--i': 5 }}>
                    C#
                  </span>
                  <span style={{ '--i': 6 }}> 
                    SQL
                  </span>
                  <span style={{ '--i': 7 }}>
                    JAVA
                  </span>
                </div>
            </section>

            <section style={{gridArea:"projects", display: "grid", placeItems: "center "}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>PROJECTS</h1>
              <div style={{display: "flex", justifyContent: "center"}}>
                <Project projectName="Demon Escape" technology="Unity" description={firsProjectDescription}/>
                <Project projectName="Clumer" technology="Ionic - Spring" description={secondProject}/>
              </div>
            </section>

    
      </main>

  );
}

export default App;
