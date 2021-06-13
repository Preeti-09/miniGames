import React from 'react'



const TicTacToe = () => {
    let player='Player 1';
    let gameover = false;

    const newGame = () => {
        document.getElementsByClassName('overlay')[0].style.display = "none";

        const boxes = document.getElementsByClassName('box');

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
        }
    }

    const win = () => {
        const boxes = document.getElementsByClassName('box');

        if(boxes.length===0)
            return false;

        let list = [];
        for (let i = 0; i < boxes.length; i++) {
            list.push(boxes[i].innerHTML);
        }

        // console.log(list)


        // row win
        for (let i = 0; i < list.length; i+=3){
            if(list[i]!=="" && list[i]===list[i+1] && list[i]===list[i+2])
                return true;
        } 

        //col win
        for (let i = 0; i < 3; i++) {
            if(list[i]!=="" && list[i]===list[i+3] && list[i]===list[i+6])
                return true;
        }

        //diag win
        if(list[4]!=="" && ((list[0]===list[4] && list[4]===list[8]) || (list[2]===list[4] && list[4]===list[6])))
            return true;

        return false;
    }

    const onBoxClick = (e) => {
        if(win()===false){
            const text = player==='Player 1'?'X':'O';
            e.target.innerHTML = text;
            player = player==='Player 1'?'Player 2':'Player 1';
        }
        if(win() && gameover===false){
            player = player==='Player 1'?'Player 2':'Player 1';
            document.getElementById('msg').innerHTML = 'Game Over ! ' + player + ' won!!';
            gameover=true;
        }else if(gameover===false){
            document.getElementById('msg').innerHTML = player + ' is playing..';
        }
    }


    return (
        <div className="container tictac">
            <div className="overlay">
                <button className="message fw-bold text-light" onClick={newGame}>Start a game</button>
            </div>
            <div className="game">
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
            <div className="scoreboard">
                <div id="msg">Player 1 is playing..</div>
                <button className="btn btn-primary" onClick={newGame}>
                    New Game
                </button>
            </div>
        </div>
    )
}

export default TicTacToe
