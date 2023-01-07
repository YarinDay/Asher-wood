import React from 'react'
import reviews from "../data/reviews.json"
import { ReviewList } from '../cmps/review-list'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import proj from '../assets/img/home15.jpg'
import details from '../assets/img/home10.jpg'
import headlineBg from '../assets/img/wood-background.jpg'
export function HomePage() {

    return (
        <div className="app-home main-view main-layout">
            <div className='headline-container'>
                <img src={proj} alt="" />
                <p style={{ backgroundImage: `url(${headlineBg})` }} >
                    <span>
                        עיצוב רהיטים בהזמנה אישית
                    </span>
                    ..מטבחים, אמבטיות ועוד
                    <br />
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