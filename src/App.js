import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Layout from './hoc/layout'
import MainPage from './components/MainPage'
import Films from './components/Films'
import Contacts from './components/Contacts'
import Showreel from './components/Showreel'
import Advertising from './components/Advertising'
import FilmView from './components/FilmView'
import films from './films'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/films' component={Films}/>
          <Route path='/showreel' component={Showreel}/>
          <Route path='/other' component={Advertising}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/film/:url'
                 render={films => { function(item)
                   // get data about film
                   // pass data to this component
                   return <FilmView image={props.image}/>;
                 }}
          />
        </Switch>
      </Layout>
    );
  }
}

export default App;
