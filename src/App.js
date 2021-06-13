import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';

import ColorGame from './components/ColorGame';
import TicTacToe from './components/TicTacToe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/colorgame" exact component={ColorGame} />
                <Route path="/tictactoe" exact component={TicTacToe} />
            </Switch>
            <div className="addMargin"></div>
            <Footer />
        </BrowserRouter>


    )
}

export default App;
