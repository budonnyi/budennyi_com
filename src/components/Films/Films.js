import React from 'react'
import FilmItem from '../FilmItem'
import NavLink from 'react-router-dom/es/NavLink'
import Classes from './Films.module.css'

import films from '../../films'

const Films = () => {
  return (
    <div className={'container'}>
      <div className={Classes.maincontent}>
        <div className={"offset-md-6 col-md-6 col-12"}>
          <div className={'row'}>
            {!films
              ? null
              : films
                .filter(film => (
                  film.category_id === 'films'
                ))
                .map( (film, index) => (

                    <div className='col-md-4' key={index}>
                      <NavLink
                        to={'/film/' + film.url}
                      >
                        <FilmItem
                          key={film.id}
                          name={film.name}
                          year={film.year}
                          image={film.image}
                          {...film}
                        />

                      </NavLink>
                    </div>
                  )
                )
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Films

//
// $articles = array(
// 'director' => 'Режиссер',
// 'duration' => 'Хр. -',
// 'producer' => 'Продюсер',
// 'year' => 'год создания -',
// 'genre' => 'Жанр -',
// 'scenario' => 'Сценарий',
// 'idea' => 'Идея',
// 'music' => 'Музыка',
// 'camera' => 'Камера',
// 'painter' => 'Художник',
// );

// [
// {
//     "id": "1",
//     "name": "Главная",
//     "url": "main",
//     "parent_id": "0",
//     "sort_order": "1",
//     "link": "",
//     "meta_title": null,
//     "meta_description": null
// },
//     {
//         "id": "2",
//         "name": "Фильмы",
//         "url": "films",
//         "parent_id": "0",
//         "sort_order": "2",
//         "link": "",
//         "meta_title": null,
//         "meta_description": null
//     },
//     {
//         "id": "3",
//         "name": "Шоурил",
//         "url": "showreel",
//         "parent_id": "0",
//         "sort_order": "3",
//         "link": "showreel",
//         "meta_title": null,
//         "meta_description": null
//     },
//     {
//         "id": "4",
//         "name": "Остальное",
//         "url": "other",
//         "parent_id": "0",
//         "sort_order": "4",
//         "link": "advertise",
//         "meta_title": null,
//         "meta_description": null
//     },
//     {
//         "id": "5",
//         "name": "Контакты",
//         "url": "contacts",
//         "parent_id": "0",
//         "sort_order": "5",
//         "link": "contact",
//         "meta_title": null,
//         "meta_description": null
//     }
// ]
