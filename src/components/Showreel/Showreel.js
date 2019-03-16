import React from 'react'
import classes from './Showreel.module.css'
import {NavLink} from "react-router-dom";

const Showreel = () => {
  return (
    <div className="">

      <NavLink
        to="#"
        id="go"
        className="videoframe"
        data-content="https://player.vimeo.com/video/98986970?color=ffffff&title=0&byline=0&portrait=0"
      >

        <img src={'/images/pages/showreel_pic.jpeg'}
             className={classes.showreel}
             alt="Александр Буденный - Шоурил" />

      </NavLink>

    </div>
  )
}

export default Showreel
