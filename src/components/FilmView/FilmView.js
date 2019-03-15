import React from 'react'
import Classes from './FilmView.module.css'
import FilmData from '../FilmData'
// import connect from 'react-redux'

const FilmView = props => {
  // componentDidMount() {
  //   // this.props.fetchFilmByUrl(this.props.params.url)
  // }

  console.log(props)

  return (
    <div className="maincontent col-md-offset-4 col-md-7 col-sm-12 col-xs-12">


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

