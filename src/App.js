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

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/films' component={Films} />
                    <Route path='/showreel' component={Showreel} />
                    <Route path='/other' component={Advertising} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/film/:url' component={FilmView} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
