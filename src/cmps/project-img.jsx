import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import home1 from '../assets/img/home1.jpg'
import home2 from '../assets/img/home2.jpg'
import home3 from '../assets/img/home3.jpg'
import home4 from '../assets/img/home4.jpg'
import home5 from '../assets/img/home5.jpg'
import home6 from '../assets/img/home6.jpg'
import home7 from '../assets/img/home7.jpg'
import home8 from '../assets/img/home8.jpg'
import home9 from '../assets/img/home9.jpg'
import home10 from '../assets/img/home10.jpg'
import home11 from '../assets/img/home11.jpg'
import home12 from '../assets/img/home12.jpg'
import home13 from '../assets/img/home13.jpg'
import home14 from '../assets/img/home14.jpg'
import home15 from '../assets/img/home15.jpg'

export const ProjectImg = () => {
    const projImgs = [home1, home3, home4, home5, home6, home7, home8, home9, home10, home11, home12, home13, home14, home15]
    return (
        <div>
            {/* <Carousel className='carousel2'> */}
            {/* <Carousel showThumbs={false} autoPlay infiniteLoop stopOnHover={false} className='carousel2'>
                <div className='carousel2-img-container'>
                    <img src={home1} alt='' />
                </div>
                <div className='carousel2-img-container'>
                    <img src={home2} alt='' />
                </div>
                <div className='carousel2-img-container'>
                    <img src={home3} alt='' />
                </div>
                <div className='carousel2-img-container'>
                    <img src={home4} alt='' />
                </div>
            </Carousel> */}
            <div className='img-container'>
                {projImgs.map((img, idx) => {
                    return <img key={idx} src={img} alt='' />
                })}
            </div>
        </div>
    )
}