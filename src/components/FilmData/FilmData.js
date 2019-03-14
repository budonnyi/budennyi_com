import React from 'react'
import Classes from './FilmData.module.css'

const FilmData = props => {
  return (
    <div className="article" {/*style="margin-bottom: 15px;"*/}>
      <div className="" {/*style="margin-bottom: 2em;"*/}>
        <p className="listsp">{props.genre}</p>
        <p className="listsp">Год создания - {props.year}</p>
        <p className="listsp">Хр. - {props.duration}</p>
        <p className="listsp">Производство - {props.production}</p>
      </div>
      <div className="lists">

        {/*<?php $i = 0;*/}
        {/*foreach ($movie as $item => $name) : ?>*/}
        {/*<?php foreach ($articles as $key => $value) {*/}
            {/*if ($item == $key) $item = $value;*/}
        {/*}; ?>*/}

        {/*<?php if (($i > 10) && ($i < 18) && (($name))) : ?>*/}
        {/*<p><span><?= $item ?></span><span><?= $name ?>*/}
                                    {/*<?php endif; ?>*/}
                                    {/*<?php $i++; ?>*/}
                                    {/*<?php endforeach; ?>*/}
      </div>
    </div>

)
}

export default FilmData
