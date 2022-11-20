import React from 'react'
import reviews from "../data/reviews.json"
import { ReviewList } from '../cmps/review-list'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import proj from '../assets/img/home1.jpg'
import headlineBg from '../assets/img/headline-bg.jpg'
export function HomePage() {

    return (
        <div className="app-home main-view main-layout">
            <div className='headline-container'>
                <img src={proj} alt="" />
                <p style={{ backgroundImage: `url(${headlineBg})` }} >
                    <span>
                        עיצוב מטבחים בהזמנה אישית
                    </span>
                    הכל ברמה הגבוהה ביותר, יחס אישי, צוות בעל מומחיות וכמובן
                    <br />
                    <div>

                        !עד הבית
                    </div>
                </p>
            </div>
            <ReviewList reviews={reviews} />
        </div>
    )

}