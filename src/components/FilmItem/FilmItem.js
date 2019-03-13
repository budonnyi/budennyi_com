import React from "react"
import Classes from './FilmItem.module.css'

const FilmItem = props => {

  return (
    <div className='col-md-4'>
      <div style={{
        marginBottom: 13
      }}>
      {/*<p style={{color: 'red'}}>{props.name}</p>*/}
      <p className={Classes.toptext}>{props.year}</p>
      <img
        src={'images1/posters/'+props.image+'.jpeg'}
        alt={props.name}
        className='img-responsive border-white'
        style={{
          width: '110%',
          marginLeft: '-15px'
        }}
      />
      </div>
    </div>
  )
}

export default FilmItem
