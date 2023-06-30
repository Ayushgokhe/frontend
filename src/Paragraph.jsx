import React from 'react'
import './App.css'

const Paragraph = () => {
  return (
    <>
      <div className="para">
        <h1>Choose your plan</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita quisquam libero modi culpa eveniet.</p>
        <ul>
            <li>monthly</li>
            <li>yearly</li>
            {/* <div>monthly</div>
            <div>yearly</div> */}
        </ul>
      </div>
    </>
  )
}

export default Paragraph
