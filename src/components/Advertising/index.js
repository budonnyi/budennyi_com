import React from 'react'
import Classes from './Advertising.module.css'

const Advertising = () => {
    return(
        <div
            className="maincontent col-xl-offset-7 col-xl-5 col-md-offset-6 col-md-5 col-sm-offset-5 col-sm-4 col-xs-9">
            <h1 style={{color: '#fff'}}>Others page</h1>
            <div className="contactForm" style="padding: 8px; padding-left: 25px; width: 50%;">
                <p>Александр Буденный</p>
            </div>

            <div className="contactForm" style="margin-left: 20%; width: 80%; padding: 25px; margin-top: 10px;">
                <p style="">В 1995 году получил диплом Киевского национального университета театра, кино и телевидения
                    им.
                    Карпенко - Карого</p>

                <p style="margin-top: -10px;">специальность: режиссер документального кино.</p>
            </div>

            <div className="contactForm" style="padding: 10px; width: 70%; padding-left: 25px; margin-top: 10px;">
                <p>Как режиссер-постановщик работал в компаниях STARMEDIA, FILM.UA.</p>
            </div>

            <div className="contactForm"
                 style="width: 60%; padding: 25px; margin-left: 40%; margin-top: 10px; font-weight: 600;">
                <p>Facebook: <a className="contactLink" href="https://www.facebook.com/profile.php?id=100010301412247"
                                target="_blank">Александр Буденный</a></p>

                <p>Mail: <a className="contactLink"
                            href="mailto:alex.the.director@gmail.com">alex.the.director@gmail.com</a></p>
            </div>
        </div>
    )
}

export default Advertising