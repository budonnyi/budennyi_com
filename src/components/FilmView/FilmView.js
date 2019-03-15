import React from 'react'
import Classes from './FilmView.module.css'
import FilmData from '../FilmData'

const FilmView = props => {
  console.log(props)

  return (
    <div class="maincontent col-md-offset-4 col-md-7 col-sm-12 col-xs-12">


      <div>
        <img src={'/images1/posters/' + props.image + '.jpeg'}
             className='bigpicture img-responsive'
             alt={props.name}/>

        <FilmData

        />
      </div>

    </div>
  )
}

export default FilmView

