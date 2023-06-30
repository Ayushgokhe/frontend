import React from 'react'
import Mycard from './Mycard'
import './App.css'

const Slider = () => {

    // var box = document.querySelector('.product-container')

    // const btnpre = () => {
    //     box.scrollBy(-204, 0)
    // }
    // const btnnext = () => {
    //     box.scrollBy(204, 0)
    // }
    return (
        <>
            <div className="main_slider">
                <div className="slider-container">
                    <h1>Review from customers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dicta neque deleniti tenetur consectetur aliquid tempore!</p>
                </div>
                <div className="product-carousel">
                    <button className="pre-btn"><p>&lt;</p></button>
                    <button className="next-btn"><p>&gt;</p></button>

                    <div className="product-container">
                        <Mycard />
                        <Mycard />
                        <Mycard />
                        {/* <Mycard />
                        <Mycard /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
