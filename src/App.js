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
import ActionList from './components/ActionList'
import films from './films'
import videos from './actionVideos'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/films' render={props => {
            const film = films.filter(film => (
              film.category_id === 'films'
            ));
            return <Films {...film} />
          }}/>
          <Route path='/showreel' component={Showreel}/>
          <Route path='/other' component={Advertising}/>
          <Route path='/contacts' component={Contacts}/>
          <Route
            path='/video/:url'
            render={props => {
              const video = videos.find(
                item => item.url === props.match.params.url
              );

              return <ActionList {...video} />;
            }}
          />
          //возвращаем видеолист
          <Route
            path="/film/:url"
            render={props => {
              const film = films.find(
                item => item.url === props.match.params.url
              );

              return <FilmView {...film} />;
            }}
          />

        </Switch>
      </Layout>
    );
  }
}

export default App;
