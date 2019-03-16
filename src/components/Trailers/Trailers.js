import React from 'react'
import Classes from "../FilmView/FilmView.module.css";

const Trailers = props => {

  return (
    <div className={'col-md-7'}>

        {props.trailer && <img src={'/images/preview/trailer' + props.trailer + '.jpeg'}
                               className={Classes.mainImage + 'mainImage img-responsive'} alt={props.name}/>}
        {props.trailer2 && <img src={'/images/preview/trailer' + props.trailer2 + '.jpeg'}
                                className={Classes.mainImage + 'mainImage img-responsive'} alt={props.name}/>}
        {props.action_video && <img src={'/images/preview/trailer' + props.action_video + '.jpeg'}
                                    className={Classes.mainImage + 'mainImage img-responsive'} alt={props.name}/>}
        {props.film_about && <img src={'/images/preview/trailer' + props.film_about + '.jpeg'}
                                  className={Classes.mainImage + 'mainImage img-responsive'} alt={props.name}/>}
    </div>
  )
}

export default Trailers
