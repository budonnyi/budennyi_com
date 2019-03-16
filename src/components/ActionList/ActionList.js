import React from 'react'
import classes from './ActionList.module.css'
import ActionVideo from "../ActionVideo";
import actionVideos from '../../actionVideos'
import NavLink from "react-router-dom/es/NavLink";

const ActionList = (props) => {
  return (
    <div className={classes.wrapper}>
      {!actionVideos
        ? null
        : actionVideos
          .filter(video => (
            video.film_id === '60'
          ))
          .map(video => (

              <div className='col-md-4'>
                <NavLink
                  to={'/video/' + props.url}
                >
                  <ActionVideo
                    key={video.id}
                    {...video}
                  />
                </NavLink>
              </div>
            )
          )
      }
    </div>
  )
}

export default ActionList
