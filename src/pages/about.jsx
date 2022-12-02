import React from 'react'
import aboutBg from '../assets/img/headline-bg.jpg'

export function About() {

    return (
        <div style={{ backgroundImage: `url(${aboutBg})` }} className="app-home main-view main-layout">
            <div className='about-text'>
                <span>אשר יוספי נגרות</span>
                <br />
                <br />
                חברתנו עוסקת בנגרות מזה כ35 שנה.
                <br />
                <br />
                אנו מתמחים בכל עבודות הנגרות, נותנים פתרונות לכל העבודות כגון מטבחים, ארונות קיר, ארונות אמבטיה וכל עבודות הנגרות.
                <br />
                <br />
                אני עוסק בעבודת הנגרות עוד מלפני גיוסי לצבא, מקצוע שלמדתי בבית הספר והוא משך אותי מאוד.
                <br />
                <br />
                פתחתי את העסק הזה מתוך אהבה וידע רב במקצוע.
                <br />
                <br />
                אנו לוקחים כל לקוח באופן אישי ומלווים אותו עד אשר מרוצה מהתוצאה הסופית!
            </div>
        </div >
    )

}