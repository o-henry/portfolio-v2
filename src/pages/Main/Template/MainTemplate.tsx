import React from 'react'
import { NavBar, Content } from 'components';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Mail from '@material-ui/icons/MailOutline';
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
            <section>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className='content-head'>
                                Hello,
                                <p>
                                    <Content />
                                </p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:c.henry.9209@gmail.com"
                                >
                                    <Mail className={classes.icon} />
                                </a>
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
            </section>
        </div>
    )
}

export default MainTemplate