import React from 'react'
import './Hero.scss'
import Header from '../../Header/Header'
function Hero() {
    return (
        <section className='hero_bg'>
            <div className='bg-img'>
                <div className='container-me'>
                    <Header />
                    <div className='text_hero'>
                        <span>Architecture design</span>
                        <h2>Professional
                            Interior Design
                        </h2>
                        <p>
                            Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect design. Helping you choose between good and best.
                        </p>
                        <button>Let’s work together</button>
                    </div>
                </div>
            </div>
            <span className='interior__text'>Interior</span>
        </section>
    )
}

export default Hero