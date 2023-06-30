import React from 'react'
import "./App.css"

const Section3 = () => {
  return (
    <>
      <div className="card">
        <div className="card_part">
        <h2>Basic Plan</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quasi.</p>
        <div className="price">
            <h1>$ 54</h1>
            <p>/month</p>
        </div>
        <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
        </ul>
        <input type="button" className='btn1' value="Start Free Trial " />
        </div>
        <div className="card_part active">
        <h2>Premium Plan</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quasi.</p>
        <div className="price">
            <h1>$ 54</h1>
            <p>/month</p>
        </div>
        <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
        </ul>
        <input type="button" className='btn1' value="Start Free Trial " />
        </div>
        <div className="card_part">
        <h2>Basic Plan</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quasi.</p>
        <div className="price">
            <h1>$ 54</h1>
            <p>/month</p>
        </div>
        <ul>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
        </ul>
        <input type="button" className='btn1' value="Start Free Trial " />
        </div>
      </div>
    </>
  )
}

export default Section3
