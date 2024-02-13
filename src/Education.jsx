import React from 'react'
import './css/Education.css'

export default function Education({type, date, place, about}) {
  return (
    <div id="education-section">
      <h1>{type}</h1>
      <h1>{date}</h1>
      <h1>{place}</h1>
      <p>{about}</p>
    </div>
  )
}
