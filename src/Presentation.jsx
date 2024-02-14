import './Presentation.css'
import myImage from "./images/carlosimage.jpg"

export default function Presentation({name, cargo}) {

  const downloadStyle = {
      textAlign : "center",
      fontSize : 15,
      padding : 10,
      color : "white"
  }

  return (

      <div id="my-info">

        <img id="my-image" alt='' src={myImage} ></img>

        <div id="text">
          <h1 id="name">{name}</h1>
          <h1 id="developer">{cargo}</h1>
          <h2 id="location">Barcelona - 08206</h2>
          <div id="curriculum-download">
            <a style={{textDecoration : "none"}} href="./archivos/CVCarlosAlises.pdf" download>
                <h2 style={downloadStyle}>DOWNLOAD CV</h2>
            </a>
          </div>
        </div>

        <p id="description">Hello good ! I am Carlos Alises, a multiplatform application developer specialized in the video game sector. </p>

      </div>
  )
}
