import React from 'react'
import classes from './Contacts.module.css'

const Contacts = () => (

  <div className={classes.maincontent}>
    <div className={classes.contactForm}>
      <p>Александр Буденный</p>
    </div>
    <div className={classes.contactForm}>
      <p className={classes.string1}>
        В 1995 году получил диплом Киевского национального университета
        театра, кино и телевидения им. Карпенко - Карого<br/>
        специальность: режиссер документального кино.</p>
    </div>
    <div className={classes.contactForm}>
      <p className={classes.string3}>
        Как режиссер-постановщик работал в компаниях STARMEDIA, FILM.UA.</p>
    </div>
    <div className={classes.contactForm + classes.string4}>
      <p>Facebook:
        <a
          className={classes.contactLink}
          href="https://www.facebook.com/profile.php?id=100010301412247"
          // target="_blank"
        >
          Александр Буденный
        </a>
        <br/>
        Mail:
        <a
          className={classes.contactLink}
          href="mailto:alex.the.director@gmail.com">
          alex.the.director@gmail.com
        </a>
      </p>
    </div>
  </div>

)

export default Contacts
