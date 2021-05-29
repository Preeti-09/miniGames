import React, { useState } from 'react'
import { Paper, Container, Button } from '@material-ui/core';

import useStyle from './styles'
import classNames from 'classnames'

const ColorGame = () => {
    const classes = useStyle()

    const SetUpSquares = () => {

        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);



        return "rgb(" + a + ', ' + b + ', ' + c + ')';
    }

    const [heading, setHeading] = useState(SetUpSquares());

    const Reset = (name) => {
        var num = (name === 'easy') ? 3 : 6;

        let newColor = SetUpSquares()
        setHeading(newColor);

        var sq = [];
        sq.push(document.getElementById('sq1'));
        sq.push(document.getElementById('sq2'));
        sq.push(document.getElementById('sq3'));
        sq.push(document.getElementById('sq4'));
        sq.push(document.getElementById('sq5'));
        sq.push(document.getElementById('sq6'));

        for (let i = 0; i < num; i++) {
            sq[i].style.backgroundColor = SetUpSquares();
        }

        const ran = Math.floor(Math.random() * num);
        sq[ran].style.backgroundColor = newColor;
    }

    const ModeChange = () => {
        Reset();
        document.getElementById('hard').classList.toggle(classes.selected);
        document.getElementById('easy').classList.toggle(classes.selected);

        var row = document.getElementById("2");
        var display = row.style.display;
        if (display === "none") {
            row.style.display = "flex";
        } else {
            row.style.display = "none";
        }
    }

    const allColor = (num) => {
        let color = document.getElementById('color').innerText;
        document.getElementById('sq1').style.backgroundColor = color;
        document.getElementById('sq2').style.backgroundColor = color;
        document.getElementById('sq3').style.backgroundColor = color;
        document.getElementById('sq4').style.backgroundColor = color;
        document.getElementById('sq5').style.backgroundColor = color;
        document.getElementById('sq6').style.backgroundColor = color;
    }

    const playGame = (elem) => {
        let count = [];
        let id = elem.target?.id;
        let color = document.getElementById(id).style.backgroundColor;
        let winColor = document.getElementById('color').innerHTML;

        // console.log(color, winColor);

        if (count.indexOf(id) === -1) {
            if (color === winColor) {
                document.getElementById('play').style.display = "flex";
                document.getElementById('btn').innerHTML = "Play Again!";
                document.getElementById('text').innerHTML = "You Won !!";
                allColor();
            } else {
                count.push(id);
                document.getElementById(id).style.background = "#fff";
            }
        }
    }

    const play = () => {
        document.getElementById('play').style.display = "none";
        Reset();
    }


    return (
        <>
            <Paper className={classes.game}>
                <div className={classes.play} id="play">
                    <span id="text" className={classes.message}></span>
                    <Button variant="contained" color="primary" onClick={play} id="btn" >Play</Button>
                </div>
                <div className={classes.header} id="header">Guess the color : <span id="color">{heading}</span> </div>

                <div className={classes.navbar}>
                    <button className={classes.button} id="reset" onClick={Reset}>New Color</button>
                    <button className={classes.button} onClick={ModeChange} id="easy">easy</button>
                    <button className={classNames(classes.button, classes.selected)} id="hard" onClick={ModeChange}  >hard</button>
                </div>

                <Container>
                    <div className={classes.row}>
                        <div className={classes.squares} id="sq1" onClick={playGame} ></div>
                        <div className={classes.squares} id="sq2" onClick={playGame} ></div>
                        <div className={classes.squares} id="sq3" onClick={playGame} ></div>
                    </div>
                    <div className={classes.row} id="2">
                        <div className={classes.squares} id="sq4" onClick={playGame} ></div>
                        <div className={classes.squares} id="sq5" onClick={playGame} ></div>
                        <div className={classes.squares} id="sq6" onClick={playGame} ></div>
                    </div>
                </Container>
            </Paper>
        </>
    )
}

export default ColorGame
