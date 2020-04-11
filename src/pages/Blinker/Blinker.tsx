//@ts-ignore
//@ts-nocheck

import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';

function Blinker(): React.ReactElement {
    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                // margin: theme.spacing(3),
                width: theme.spacing(500),
                height: theme.spacing(7),
            },
        },
        paper: {
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'left',
            color: theme.palette.text.secondary,
            height: '48rem',
            flexDirection: 'column',
        },
    }))

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid direction="row" container spacing={5}>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <iframe
                                className="blinker-video"
                                width="100%"
                                height="80%"
                                src="https://www.youtube.com/embed/dZItllhooso?autoplay=1"
                                frameborder="0"
                                allow="accelerometer; autoplay *; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </Paper>
                    </Grid>
                </section>
            </Grid>
        </div>

    )
}

export default Blinker