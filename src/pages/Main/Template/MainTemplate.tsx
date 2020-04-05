import React from 'react'
import { NavBar, Content } from 'components';
import { apolloGql, MouseScroll, typescriptIcon } from 'static';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger, FaAws, FaNode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
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
            height: '47rem',
        },
        about: {
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
            // marginTop: theme.spacing(20),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            color: theme.palette.text.secondary,
            height: '47rem',
            background: '#f1f5f5',
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            fontSize: '4rem'
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
            <Grid direction="row" container spacing={5}>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className='content-head'>
                                Hello,
                                <Content />
                            </div>
                            <img id="scroll" src={MouseScroll} alt="scroll" />
                        </Paper>
                    </Grid>
                </section>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.about}>
                            <div>
                                <h2>
                                    WHAT I CAN DO ?
                                </h2>
                            </div>
                            <div className="icon-layout">
                                {/* <div>PROGRAMMING LANGUAGES & TOOLS</div> */}
                                <FaJsSquare className="icon" id="js-icon" size={50} />
                                <FaHtml5 className="icon" id="html-icon" size={45} />
                                <FaCss3Alt className="icon" id="css-icon" size={45} />
                                <FaReact className="icon" id="react-icon" size={50} />
                                <FaAws className="icon" id="aws-icon" size={50} />
                                <FaNode className="icon" id="node-icon" size={65} />
                                <DiMongodb className="icon" id="md-icon" size={50} />
                                <DiMysql className="icon" size={50} />
                                <img src={apolloGql} alt='gql' className="icon" width="53rem" />
                                <img src={typescriptIcon} alt="ts" className="icon" width="50rem" />
                            </div>
                        </Paper>
                    </Grid>
                </section>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </section>
            </Grid>
        </div >
    )
}

export default MainTemplate