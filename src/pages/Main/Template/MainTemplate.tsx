//@ts-nocheck
import React from 'react'
import { NavBar, Content } from 'components';
import { Link } from 'react-router-dom'
import { apolloGql, MouseScroll, typescriptIcon, local, crunch, cookie, blinker, landing } from 'static';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger, FaAws, FaNode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'



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
        },
        portfolio: {
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            fontSize: '4rem',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'flex-start',
            paddingTop: '5rem',
            height: '49rem',
            color: 'rgba(0, 0, 0, 0.54)',
            // background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(184, 242, 255) 40%)'
        },
        card: {
            maxWidth: 345,
            margin: theme.spacing(5),
            // height: 500,
            boxShadow: '0 20px 20px rgba(0,0,0,.08) !important',
        },
        media: {
            // margin: '3rem 0 3rem 0',
            padding: '1rem',
            height: 250,
        },
        education: {
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            background: '#f1f5f5',
            fontSize: '4rem',
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            color: theme.palette.text.secondary,
            height: '20rem',
            margin: '30rem 0 0 0'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                                <FaJsSquare className="icon" id="js-icon" size={50} />
                                <FaHtml5 className="icon" id="html-icon" size={45} />
                                <FaCss3Alt className="icon" id="css-icon" size={45} />
                                <FaReact className="icon" id="react-icon" size={50} />
                                <FaAws className="icon" id="aws-icon" size={50} />
                                <FaNode className="icon" id="node-icon" size={65} />
                                <DiMongodb className="icon" id="md-icon" size={50} />
                                <img src={apolloGql} id="apollo-gql" alt='gql' className="icon" width="53rem" />
                                <DiMysql className="icon" size={50} />
                                <img src={typescriptIcon} alt="ts" className="icon" width="50rem" />
                            </div>
                        </Paper>
                    </Grid>
                </section>
                <section>
                    <Paper className={classes.portfolio}>
                        <div>
                            <h2 id="about">WORK</h2>
                            <div className="title-layout">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={blinker}
                                            title="BLINKER"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Blinker</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" fontFaimly="Noto Sans KR">
                                                2019
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Link to="/blinker" style={{ textDecoration: 'none' }}>
                                                Learn More
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={crunch}
                                            title="CRUNCH"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Crunch Price</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                2019
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={local}
                                            title="LOCAL SNS"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Local Sns</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                2019
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={landing}
                                            title="PAPAYA"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Papaya</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                2020
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={cookie}
                                            title="COOKIE"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Cookie Run</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                2020
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Coming Soon...</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                2020... Maybe?
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </Paper>
                </section>
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.education}>
                            <div>
                                <h2>
                                    EDUCATION
                                </h2>
                            </div>
                        </Paper>
                    </Grid>
                </section>
            </Grid>
        </div >
    )
}

export default MainTemplate