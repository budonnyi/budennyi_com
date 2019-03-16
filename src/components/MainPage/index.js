import React from 'react'
import classes from './mainPage.module.css'

const MainPage = () => {
  return (
    <div>

      <img
        src={'/images/pages/main.png'}
        className={classes.mainPicture}
        alt={"Глакное меню"}
      />

      <map id="main_image" name="main_image">
        <area shape="poly"
              alt="Перейти в категорию фильмов"
              title=""
              coords="34,197,188,197,269,624,110,626,47,251,9,252,10,211,38,210"
              href="/films"
        />
        <area shape="poly"
              alt=""
              title="Перейти к Шоурил"
              coords="194,93,352,93,429,525,270,528,205,153,142,154,141,114,197,112"
              href="/showreel"
        />
        <area shape="poly"
              alt=""
              title="Перейти в категрию другие"
              coords="355,15,506,15,589,444,427,445,365,72,305,74,305,32,360,31"
              href="/other"
        />
      </map>

    </div>
  )

}

export default MainPage
