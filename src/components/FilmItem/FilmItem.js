import React from "react"
import Classes from './FilmItem.module.css'

const FilmItem = props => {

  // onFilmHandle(){
  //
  // }

  return (

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
        // onClick={this.onFilmHandle}
      />
      </div>

  )
}

export default FilmItem
