import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';


import ColorGame from './components/ColorGame/ColorGame';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Home from './components/Home/Home';
import useStyles from './style';

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.navbar}>
                <Button className={classes.btn} component={Link} to="/" variant="contained" color="primary" >Home</Button>
                <Button className={classes.btn} component={Link} to="/colorgame" variant="contained" color="secondary" > Color Game </Button>
                <Button className={classes.btn} component={Link} to="/tictactoe" variant="contained" color="secondary"> Tic Tac Toe Game </Button>
            </div>
            <div className={classes.mar}></div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/colorgame" exact component={ColorGame} />
                <Route path="/tictactoe" exact component={TicTacToe} />
            </Switch>
            <footer className={classes.footer}>
                <p>&copy; All rights reserved. &#9; &bull;    2021   &bull;</p>
            </footer>
        </BrowserRouter>


    )
}

export default App;
