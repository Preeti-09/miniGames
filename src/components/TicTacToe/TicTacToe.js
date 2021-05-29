import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import useStyle from './styles'


const TicTacToe = () => {
    const classes = useStyle()
    var player = 1;

    const reset = () => {

        document.getElementById('col1').innerText = '';
        document.getElementById('col2').innerText = '';
        document.getElementById('col3').innerText = '';
        document.getElementById('col4').innerText = '';
        document.getElementById('col5').innerText = '';
        document.getElementById('col6').innerText = '';
        document.getElementById('col7').innerText = '';
        document.getElementById('col8').innerText = '';
        document.getElementById('col9').innerText = '';


        document.getElementById('reset').style.display = "none";
        document.getElementById('player').innerText = 'Player 1';

    }

    const win = () => {
        let board = [];
        board.push(document.getElementById('col1').innerText);
        board.push(document.getElementById('col2').innerText);
        board.push(document.getElementById('col3').innerText);
        board.push(document.getElementById('col4').innerText);
        board.push(document.getElementById('col5').innerText);
        board.push(document.getElementById('col6').innerText);
        board.push(document.getElementById('col7').innerText);
        board.push(document.getElementById('col8').innerText);
        board.push(document.getElementById('col9').innerText);

        //row win
        if ((board[0] !== '' && board[0] === board[1] && board[0] === board[2]) || (board[3] !== '' && board[4] === board[5] && board[4] === board[3]) || (board[7] !== '' && board[7] === board[8] && board[8] === board[6]))
            return true;
        //col win
        if ((board[0] !== '' && board[0] === board[3] && board[0] === board[6]) || (board[1] !== '' && board[4] === board[1] && board[4] === board[7]) || (board[2] !== '' && board[2] === board[8] && board[8] === board[5]))
            return true;
        //diag win
        if ((board[4] !== '' && board[0] === board[4] && board[0] === board[8]) || (board[4] !== '' && board[2] === board[4] && board[4] === board[6]))
            return true;

        return false;
    }
    const play = (id) => {
        const newid = id.target?.id;
        if (win() === false) {
            if (document.getElementById(newid).innerText === '') {
                if (player === 1) {
                    document.getElementById(newid).innerText = 'O';
                    document.getElementById('player').innerText = 'Player 2';
                    player = 2;
                } else {
                    document.getElementById(newid).innerText = 'X';
                    document.getElementById('player').innerText = 'Player 1';
                    player = 1;
                }
            }

            if (win()) {
                player = (player === 1) ? 2 : 1;
                document.getElementById('player').innerText = 'Player ' + player + ' won !!';
                document.getElementById('reset').style.display = "flex";
            }
        }
    }


    return (
        <Paper className={classes.game}>
            <Container>
                <Row className={classes.row}>
                    <Col className={classNames(classes.col, classes.col1)} id="col1" onClick={play}></Col>
                    <Col className={classNames(classes.col, classes.col1)} id="col2" onClick={play}></Col>
                    <Col className={classNames(classes.col, classes.col2)} id="col3" onClick={play}></Col>
                </Row>
                <Row className={classes.row}>
                    <Col className={classNames(classes.col, classes.col1)} id="col4" onClick={play}></Col>
                    <Col className={classNames(classes.col, classes.col1)} id="col5" onClick={play}></Col>
                    <Col className={classNames(classes.col, classes.col2)} id="col6" onClick={play}></Col>
                </Row>
                <Row className={classes.row}>
                    <Col className={classNames(classes.col, classes.col3)} id="col7" onClick={play}></Col>
                    <Col className={classNames(classes.col, classes.col3)} id="col8" onClick={play}></Col>
                    <Col className={classes.col} id="col9" onClick={play}></Col>
                </Row>
                <Typography className={classes.player}>Player : <span id="player">Player 1</span></Typography>
                <div style={{ display: "none" }} className={classes.resetbtn} id="reset">
                    <Button onClick={reset} variant="contained" color="primary">Play Again !</Button>
                </div>
            </Container>
        </Paper>
    )
}

export default TicTacToe
