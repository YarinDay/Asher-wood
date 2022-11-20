import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import home1 from '../assets/img/home1.jpg'
import home2 from '../assets/img/home2.jpg'
import home3 from '../assets/img/home3.jpg'
import home4 from '../assets/img/home4.jpg'

export const ProjectImg = () => {
    return (
        <div>
            {/* <Carousel className='carousel2'> */}
            <Carousel showThumbs={false} autoPlay infiniteLoop stopOnHover={false} className='carousel2'>
                <div className='carousel2-img-container'>
                    <img src={home1} alt='' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='carousel2-img-container'>
                    <img src={home2} alt='' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className='carousel2-img-container'>
                    <img src={home3} alt='' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='carousel2-img-container'>
                    <img src={home4} alt='' />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
            </Carousel>
        </div>
    )
}