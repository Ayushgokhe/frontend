import React from 'react'
import './App.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_part1">
                    <h1>we have what you're looking for</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non magni quia, vitae unde quam nulla quos, optio deleniti corrupti recusandae rem eum atque magnam eaque eius provident veniam ullam suscipit natus. Aut, voluptate?</p>
                    <input type="button" className='btn2' value="Get Started now" />
                </div>
                    <hr />
                <div className="footer_part2">
                    <p>All Right reserved &copy;Copyright 2023</p>
                    <div className="foot">
                    <ul className='foot_ul1'>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                        <li>Product</li>
                    </ul>
                    <ul className='foot_ul2'>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="facebook" /></li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/YouTube_font_awesome.svg/2048px-YouTube_font_awesome.svg.png" alt="youTube" /></li>
                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/1200px-Instagram_font_awesome.svg.png" alt="instagram" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/6422/6422210.png" alt="twitter" /></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
