import React from 'react'
import { NavBar } from 'components';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Mail from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function MainTemplate(): React.ReactElement {
    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                // margin: theme.spacing(3),
                width: theme.spacing(500),
                height: theme.spacing(10),
            },
        },
        paper: {
            // padding: theme.spacing(3),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: '45rem'
        },
        icon: {
            fontSize: '4rem'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <NavBar />
            </header>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className='content-head'>
                            Hello,
                            <p>
                                프론트 / 백엔드
                                <Mail className={classes.icon} />
                            </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainTemplate