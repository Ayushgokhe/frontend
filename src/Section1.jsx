import React from 'react'
import './App.css'

const Section1 = () => {
  return (
    <>
      <div className="container">
        <div className="content1">
            <h1>Learn hoe to launch a successful prodcast</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis dolorum amet molestiae nihil quidem doloremque. Minus cumque eligendi temporibus!</p>
            <input type="button" className='btn' value="Sign up now" />
        </div>
        <div className="content2">
            <img className='contentImg1' src="https://m.economictimes.com/thumb/msid-100042093,width-1200,height-900,resizemode-4,imgsize-58296/top-it-firms-infosys-wipro-keen-on-bringing-employees-back-to-office.jpg" alt="" />
            <img className='contentImg2' src="https://images.idgesg.net/images/article/2020/05/home-office-ideal-setup-angle-100843210-large.jpg?auto=webp&quality=85,70" alt="" />
        </div>
      </div>
    </>
  )
}

export default Section1
