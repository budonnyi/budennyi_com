import React from 'react'
import Classes from './ActionVideo.module.css'

const ActionVideo = props => {
  return (
    <div className={Classes.wrapper}>
      <div className="offset-md-4 col-md-8 col-xs-12" style={{marginTop: '4%'}}>
        <div className="col-md-10">
          <div style={{
            backgroundColor: '#fff',
            color: '#000',
            marginBottom: 15,
            padding: 15
          }}>
            <div className="media">

              <div className="media-body">
                <p>{props.text}</p>
              </div>

              <div className="media-left">
                <img src={'/images1/pictures/' + props.image + '.jpeg'}
                     className='media-object videoframe'
                     alt={props.name}
                     data-content={'https://player.vimeo.com/video/' + props.link}
                     id='go'
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionVideo
