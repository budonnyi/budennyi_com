import React from 'react'
import Classes from './AdvertiseItem.module.css'

const AdvertiseItem = props => {
  return (
    <div className='col-md-12'>
      <div style={{
        marginBottom: 13
      }}>
        {/*<p style={{color: 'red'}}>{props.name}</p>*/}
        <img
          src={'images1/other/'+props.image+'.jpeg'}
          alt={props.name}
          className='img-responsive border-white'
          style={{
            width: '110%',
            marginLeft: '-15px'
          }}
        />

        <p className="othertext">{props.name} {props.description}</p>

      </div>
    </div>
  )
}

export default AdvertiseItem
