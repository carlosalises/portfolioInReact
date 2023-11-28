import React from 'react'
import './css/Project.css'

export default function Project({projectName, technology, description, image}) {

  return (
    <article id='my-project'>
      <img id="project-image" src = {image} alt=''/>
      <div>
        <h2 style={{textAlign : "center"}}>{projectName}</h2>
        <h3 style={{textAlign : "center"}}>{technology}</h3>
        <p style={{textAlign : "center"}}>{description}</p>
      </div>
    </article>
  )
}
