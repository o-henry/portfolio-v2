//@ts-ignore
//@ts-nocheck

import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { blinker } from 'static'
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
            textAlign: 'left',
            color: theme.palette.text.secondary,
            height: '48rem',
            flexDirection: 'column'
        },
    }))

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid direction="row" container spacing={5}>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className="blinker">
                                윙크로 게임하기 팀 프로젝트 2019
                                <br />
                                팀 프로젝트 2019
                                <br />
                                | Front-End | React | AWS |
                            </div>
                            <div>
                                <iframe
                                    className="blinker-video"
                                    width="700"
                                    height="455"
                                    src="https://www.youtube.com/embed/dZItllhooso"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </Paper>
                    </Grid>
                </section>
            </Grid>
        </div>

    )
}

export default Blinker