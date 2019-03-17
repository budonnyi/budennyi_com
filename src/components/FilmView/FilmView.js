import React from 'react'
import Classes from './FilmView.module.css'
import FilmData from '../FilmData'
import Trailers from '../Trailers'

// import connect from 'react-redux'

const FilmView = props => {

  const description = props.description.split('/');

  const descItems = [];

  description.forEach((item, index) => {
    descItems.push(<p key={index}
                      className={Classes.description}>{item}</p>)
  })

  return (
    <div className={Classes.maincontent}>

      <div className={'offset-md-4 col-md-8 col-sm-12'}>
        <div className={'row'}>
          <div className={'col-md-4'}>
            <img src={'/images/posters/' + props.image + '.jpeg'}
                 className={Classes.bigpicture}
                 alt={props.name}/>

            <FilmData {...props} />

          </div>

          <div className={'col-md-7'}>
            <div>
              {descItems}
            </div>

            <Trailers {...props} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmView
