import React from 'react'
import { Paper } from '@material-ui/core';

import useStyle from './styles';

const Home = () => {
    const classes = useStyle();

    return (
        <>
            <Paper className={classes.main}>
                <div className={classes.info}>
                    <h1>Welcome to games,</h1>
                    <p className={classes.content}>
                        This website is based on React framework. It allows user to play games without signing up. This project was compilation of multiple mini projects made previously.
                    </p>
                    <p className={classes.content}> Hope you enjoy it.</p>
                    <h2>:)</h2>
                </div>
            </Paper>
        </>
    )
}

export default Home
