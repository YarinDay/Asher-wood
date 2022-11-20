
import React from 'react'
import phoneCall from "../assets/img/phone-call.png"
import googleMaps from "../assets/img/google-maps.png"
import AYLogo from "../assets/img/AY-logo.webp"

export class AppFooter extends React.Component {

    render() {
        return (
            <div className="main-footer-container full">
                <div className="main-logo"><img src={AYLogo} alt="" /></div>
                <div className='contact-container'>
                    <div>
                        <a className="phone-call-footer" href="tel:0522507519">052-250-7519 &nbsp;<img src={phoneCall} /></a>
                        <a className="phone-call-footer" href="tel:089301140">08-930-1140 &nbsp;<img src={phoneCall} /></a>
                    </div>
                    <div>
                        <p>אשר יוספי</p>
                        <a href="https://www.waze.com/he/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%94%D7%9E%D7%A8%D7%9B%D7%96/%D7%A0%D7%A1-%D7%A6%D7%99%D7%95%D7%A0%D7%94/%D7%94%D7%9E%D7%96%D7%9E%D7%A8%D7%94-13?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJmxdKScK2AhURVtvN7GhV8q0">המזמרה 13 נס ציונה <img src={googleMaps} /></a>

                    </div>
                </div>
            </div>
        )
    }
}