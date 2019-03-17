import React from 'react'
import Classes from './FilmData.module.css'

const FilmData = props => {

  return (
    <div className={Classes.article}>
      <div className={Classes.filmDetails}>
        <p className={Classes.listsp}>Жанр - {props.genre} </p>
        <p className={Classes.listsp}>Год создания - {props.year} </p>
        <p className={Classes.listsp}>Хр. - {props.duration} </p>
        <p className={Classes.listsp}>Производство - {props.production} </p>
      </div>
      <div className={Classes.people}>
        {props.director && <p className={Classes.listsp}>Режиссер - {props.director} </p>}
        {props.producer && <p className={Classes.listsp}>Пролюсер - {props.producer} </p>}
        {props.scenario && <p className={Classes.listsp}>Сценарий - {props.scenario} </p>}
        {props.music && <p className={Classes.listsp}>Музыка - {props.music} </p>}
        {props.camera && <p className={Classes.listsp}>Камера - {props.camera} </p>}
        {props.painter && <p className={Classes.listsp}>Художник - {props.painter} </p>}
      </div>
    </div>
  )
}

export default FilmData
