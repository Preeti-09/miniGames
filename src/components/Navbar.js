import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const toggleTab = (e) => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        e.target.classList.add('active');
    }

    return (
        <div>
            <ul id="nav" className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" onClick={(e) => toggleTab(e)} aria-current="page" to="/">MiniGames</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={(e) => toggleTab(e)} to="/colorgame">Color Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={(e) => toggleTab(e)} to="/tictactoe">Tic Tac Toe</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
