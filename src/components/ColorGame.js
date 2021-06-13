import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

let gameOver = true;
let mode = "hard";

const ColorGame = () => {
    const generateColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return "rgb(" + red + ", " + green + ", " + blue + ")";
    };
    const [guessColor, setGuessColor] = useState(generateColor());

    const newGame = () => {
        gameOver = false;
        setGuessColor(generateColor());
    }

    useEffect(() => {
        startGame();
    }, [guessColor]);

    const startGame = () => {
        document.getElementsByClassName('overlay')[0].style.display = "none";

        const boxes = document.getElementsByClassName('box');
        const len = mode === "easy" ? 6 : 9;

        for (let i = 0; i < len; i++) {
            boxes[i].style.background = generateColor();
        }

        const random = Math.floor(Math.random() * len);
        boxes[random].style.background = guessColor;

        // console.log(guessColor, random)
    }



    const onBoxClick = (e) => {
        if (!gameOver) {
            const boxColor = e.target.style.backgroundColor;
            // console.log(boxColor, guessColor);

            if (boxColor === guessColor) {
                const boxes = document.getElementsByClassName('box');
                const len = mode === "easy" ? 6 : 9
                for (let i = 0; i < len; i++) {
                    boxes[i].style.background = boxColor;
                    boxes[i].style.transition = "1s ease-in-out background";
                }
            } else {
                e.target.style.background = "0";
                e.target.style.transition = "1s ease-in-out background";
            }
        }
    }

    const toggleTab = (gameMode) => {
        mode = gameMode;
        const boxes = document.getElementsByClassName('box');
        let rmNum = 4, addNum = 5;
        if (gameMode === 'easy') {
            rmNum = 5;
            addNum = 4;

            for (let i = 6; i < boxes.length; i++) {
                boxes[i].style.display = "none";
                boxes[i].style.transition = "1s ease-in-out display";
            }
        } else {
            for (let i = 6; i < boxes.length; i++) {
                boxes[i].style.display = "flex";
                boxes[i].style.transition = "1s ease-in-out display";
            }
        }

        document.getElementsByClassName('nav-link')[rmNum].classList.remove('active');
        document.getElementsByClassName('nav-link')[addNum].classList.add('active');
        newGame();
    }

    return (
        <div className="container colorgame">
            <div className="overlay">
                <button className="message fw-bold text-light" onClick={newGame}>Start a game</button>
            </div>
            <div className="topbar">
                <header className="fs-3 fw-bold text-center">Guess {guessColor}</header>
                <div>
                    <ul id="nav" className="nav nav-tabs">
                        <li className="nav-item mx-1">
                            <Link className="nav-link bg-light" onClick={newGame} to="/colorgame" >Play New Game</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link" onClick={() => toggleTab('easy')} aria to="/colorgame" >Easy Mode</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link className="nav-link active" onClick={(e) => toggleTab('hard')} aria to="/colorgame" >Hard Mode</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
            </div>
            <div className="row">
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
            </div>
            <div className="row">
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
                <div className="box" onClick={(e) => onBoxClick(e)} ></div>
            </div>
        </div>
    );
};

export default ColorGame;
