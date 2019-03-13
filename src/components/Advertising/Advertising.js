import React from 'react'
import Classes from './Advertising.module.css'
import AdvertiseItem from "../AdvertiseItem";

import films from '../../films'

const Advertising = (props) => {
  console.log(films)

  return (
    <div className={'container'}>
      <div className={Classes.maincontent}>
        <div className={"maincontent offset-md-6 col-md-6 col-12"}>
          <div className={'row'}>

            {
              !films
                ? null
                : films
                  .filter(film => (
                    film.category_id === 'other'
                  ))
                  .map(film => (
                    <AdvertiseItem
                      key={film.id}
                      name={film.name}
                      description={film.description}
                      image={film.image}
                    />
                  ))
            }

            {/*<a id="go" className="videoframe" data-content="https://player.vimeo.com/video/<?= $item['trailer'] ?>" href="#"*/}
            {/*style="text-decoration: none;">*/}

            {/*<div className="other mainPictures">*/}

            {/*<div id="link<?= $item['id'] ?>">*/}

            {/*<?= Html::img(('/web/images/other/' . $item['image'] . '.jpeg'), ['class' => ' main-image img-responsive']) ?>*/}
            {/*<p className="othertext"><?= $item['name'] . '  ' . $item['description'] ?></p>*/}
          </div>

        </div>
      </div>
      {/*</a>*/}
      {/*<?php endforeach; ?>*/}
    </div>

  )
}

export default Advertising
