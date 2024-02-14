import React from 'react'
import './css/Experience.css'

export default function Experience({cargo, place, fecha, habilities}) {

  return (
    <div className="container">
      <div className="terminal_toolbar">
        <p className="user">carlos21@admin: ~</p>
      </div>
      <div className="terminal_body">
        <div className="terminal_prompt">
          <span className="terminal_user">carlos21@admin:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
          <span className="terminal_cursor">cat {place}/{cargo}/habilities </span>
        </div>
        <div className="terminal_output">
                    <ul style={{marginTop: "30px"}} className='rsp-list'>
                      {habilities?.map((rsp, index) => (
                        <li key={index}>{rsp}</li>
                      ))}
                    </ul>
          </div>
        <div className="terminal_input">
          <span className="input_text">Type a command...</span>
        </div>
      </div>
    </div>
  
  )
}



