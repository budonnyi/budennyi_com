import React from 'react'
import Classes from "../Trailers/Trailers.module.css";

const Trailers = props => {

  console.log(props)

  return (
    <div className={ props.align }>

        {props.trailer && <img width={ props.align === 'row' ? "33%" : "100%" } src={'/images/preview/trailer' + props.trailer + '.jpeg'}
                               className={Classes.mainImage} alt={props.name}/>}
        {props.trailer2 && <img width={ props.align === 'row' ? "33%" : "100%" } src={'/images/preview/trailer' + props.trailer2 + '.jpeg'}
                                className={Classes.mainImage} alt={props.name}/>}
        {props.action_video && <img width={ props.align === 'row' ? "33%" : "100%" } src={'/images/preview/trailer' + props.action_video + '.jpeg'}
                                    className={Classes.mainImage} alt={props.name}/>}
        {props.film_about && <img width={ props.align === 'row' ? "33%" : "100%" } src={'/images/preview/trailer' + props.film_about + '.jpeg'}
                                  className={Classes.mainImage} alt={props.name}/>}
    </div>
  )
}

export default Trailers
