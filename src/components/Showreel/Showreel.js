import React from 'react'
import classes from './Showreel.module.css'
import {NavLink} from "react-router-dom";
import ModalVideo from 'react-modal-video'


class Showreel extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      video: null
    };
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo(event) {
    console.log(event)

    const { video } = event.target.dataset;
    this.setState({ video, isOpen: true });
  }

  render() {
    const { video } = this.state;
    return (

      <div className="">

        <NavLink
          to="#"
          id="go"
          video={"98986970"}
          className="videoframe"
          data-content="https://player.vimeo.com/video/98986970?color=ffffff&title=0&byline=0&portrait=0"
        >

          <img src={'/images/pages/showreel_pic.jpeg'}
               className={classes.showreel}
               alt="Александр Буденный - Шоурил"
               // data-video="95349406"
               onClick={this.selectVideo}
               // onClick={this.openModal.bind(null, "98986970")}
               data-video="98986970"
          />

        </NavLink>

        <ModalVideo
          channel="vimeo"
          isOpen={this.state.isOpen}
          videoId={video}
          onClose={() => this.setState({ isOpen: false })}
        />

      </div>
    )
  }
}

export default Showreel
