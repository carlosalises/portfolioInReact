import React from 'react'
import './css/Education.css'

export default function Education({type, date, place, about}) {
  return (
    <div id='education-section'>
              <h2 class="normal-title">{type}</h2>
			        <p>{date}</p>
			        <p>{place}</p>
			        <p style={{textAlign: "center"}}>{about}</p>
	  </div>
  )
}
