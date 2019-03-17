import React from 'react'
import classes from './Showreel.module.css'
import {NavLink} from "react-router-dom";
import ModalVideo from 'react-modal-video'


class Showreel extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    console.log(this.props)
    this.setState({isOpen: true})
  }

  render() {
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
               onClick={this.openModal}
               video={"98986970"}
          />

        </NavLink>

        <ModalVideo channel='vimeo'
                    isOpen={this.state.isOpen}
                    videoId={'98986970'}
                    onClose={() => this.setState({isOpen: false})}
        />

      </div>
    )
  }
}

export default Showreel
