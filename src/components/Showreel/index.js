import React from 'react'
import classes from './Showreel.module.css'
import Logo from '../../images/pages/showreel_pic.jpeg'

console.log(classes)

const Showreel = () => {
    return (
        <div className="">

            <a
                href="#"
                id="go"
                className="videoframe"
                data-content="https://player.vimeo.com/video/98986970?color=ffffff&title=0&byline=0&portrait=0"
               >

                <img src={Logo} className={classes.showreel} alt="" />

            </a>

        </div>
    )
}

export default Showreel