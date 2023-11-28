import './App.css';
import Education from './Education';
import Experience from './Experience';
import Presentation from './Presentation';
import Project from './Project';
import {spaceGoRsp, esdiRsp} from "./data/Responsabilities"
import dungeonImage from "./images/dungeon.png";
import hangmanImage from "./images/hangman.png";
import {dungeonDescription, hangmanDescription} from "./data/projectsObjects";

export function App() {

  return (
      <main>

            <section style={{gridArea : "presentation"}}>
              <article>
                 <Presentation name="Carlos Alises Mora" cargo="FrontEnd Developer"/>
              </article>
            </section>

            <section style={{gridArea: "experience"}}>

              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>MOST RECENT EXPERIENCE</h1>
              <article className='experience-article'>
                <Experience cargo="Front End" fecha="12/2022 - 04/2023"/>
                <ul className='rsp-list'>
                  {spaceGoRsp.map((rsp) => (
                    <li>{rsp}</li>
                  ))}
                </ul>
              </article>
              <br></br>
              <article className='experience-article'>
                <Experience cargo="Soporte Tecnico" fecha="10/2020 - 03/2021"/>
                <ul className='rsp-list'>
                  {esdiRsp.map((rsp) => (
                    <li>{rsp}</li>
                  ))}
                </ul>
              </article>

            </section>

            <section style={{gridArea:"education"}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>EDUCATION</h1>
              <div style={{display: "flex", justifyContent: "center"}}>
                <article>
                  <Education type= "CFGM" date="September 2019 - July 2021" place="Institut Sabadell" about="Microcomputer systems and networks"/>
                </article>
                <article>
                  <Education type= "CFGS" date="September 2021 - July 2023" place="Institut Sabadell" about="Multiplatform application development, profile 
								  professional video games and digital leisure."/>
                </article>
              </div>
            </section>
          

            <section style={{gridArea:"skills"}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>SKILLS</h1>
              <article id='skills-article'>
                <p style={{textAlign: "center"}}>
                  HTML - CSS - JavaScript - Unity - C# - SQL
                </p>
              </article>
            </section>

            <section style={{gridArea:"projects", display: "grid", placeItems: "center "}}>
              <h1 style={{textAlign:"center", fontSize: 20, marginBottom: 10}}>PROJECTS</h1>
              <div style={{display: "flex", justifyContent: "center"}}>
                <Project projectName="Dungeon Minigame" technology="Unity" description={dungeonDescription} image={dungeonImage}/>
                <Project projectName="Ahorcado" technology="Android - Java" description={hangmanDescription} image={hangmanImage}/>
              </div>
            </section>

    
      </main>

  );
}

export default App;
