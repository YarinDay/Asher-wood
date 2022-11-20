import React, { useEffect, useState } from 'react'
import { ReviewPreview } from './review-preview'
import woodBgc from '../assets/img/wood-background.jpg'
import { Carousel } from 'react-responsive-carousel';

export const ReviewList = ({ reviews }) => {
    const [width, setWindowWidth] = useState(0)

    useEffect(() => {
        updateDimensions();
        window.addEventListener(`resize`, updateDimensions);
        return () =>
            window.removeEventListener(`resize`, updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    const condition = width <= 760 ? 100 : 33
    return (
        <div style={{ backgroundImage: `url(${woodBgc})` }} className="review-list">
            <Carousel className='carousel1' autoPlay infiniteLoop centerMode centerSlidePercentage={condition}>
                {reviews?.map(review => {
                    return <ReviewPreview key={review._id} review={review} />
                })}
            </Carousel>
            {/* <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel> */}
        </div>
    )
}