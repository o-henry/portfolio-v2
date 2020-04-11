//@ts-nocheck
import React from 'react'
import { Content } from 'components';
import { Link } from 'react-router-dom'
import { apolloGql, MouseScroll, typescriptIcon, local, crunch, cookie, blinker, landing } from 'static';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger, FaAws, FaNode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, } from "react-icons/fa";
import { GoBrowser } from 'react-icons/go'
import { IoLogoGameControllerB } from 'react-icons/io'
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
            height: '49rem',
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
            height: '49rem',
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
            transition: 'all 250ms cubic-bezier(.02, .01, .47, 1)',
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
            padding: theme.spacing(0.5),
            paddingBottom: '0.9rem',
            // height: '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            textAlign: 'left',
            margin: '28rem 0 0 0'
        },
        footer: {
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            fontSize: '4rem',
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
            color: theme.palette.text.secondary,
            height: '5rem',
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
                                <FaReact className="icon" id="react-icon" size={50} />
                                <FaAws className="icon" id="aws-icon" size={50} />
                                <FaNode className="icon" id="node-icon" size={65} />
                                <DiMongodb className="icon" id="md-icon" size={50} />
                                <img src={apolloGql} id="apollo-gql" alt='gql' className="icon" width="53rem" />
                                <FaHtml5 className="icon" id="html-icon" size={45} />
                                <FaCss3Alt className="icon" id="css-icon" size={45} />
                                <DiMysql className="icon" size={50} />
                                <img src={typescriptIcon} alt="ts" className="icon" width="50rem" />
                            </div>
                        </Paper>
                    </Grid>
                </section>
                <section>
                    <Paper className={classes.portfolio}>
                        <div>
                            <h2 id="work-head">WORK</h2>
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
                                                윙크로 게임하기
                                                <span>
                                                    <a
                                                        id="link-position"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://github.com/o-henry/Blinker_Client"
                                                    >
                                                        <FaGithub size={20} />
                                                    </a>
                                                </span>
                                                <span>
                                                    <a
                                                        id="game-position"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://d3hj5v0x0oqu9l.cloudfront.net/"
                                                    >
                                                        <IoLogoGameControllerB size={26} />
                                                    </a>
                                                </span>
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
                                                개인화 추천 시스템
                                                <span>
                                                    <a
                                                        id="game-position"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://o-henry.github.io/2019/10/21/AWSPersonalize/"
                                                    >
                                                        <FaBlogger size={26} />
                                                    </a>
                                                </span>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Link to="/crunch" style={{ textDecoration: 'none' }}>
                                                Learn More
                                            </Link>
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
                                            <Typography gutterBottom variant="h5" component="h2">Local SNS</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                인스타 기반 장소 추천 앱
                                                <span>
                                                    <a
                                                        id="link-position"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://github.com/o-henry/LocalServer"
                                                    >
                                                        <FaGithub size={20} />
                                                    </a>
                                                </span>
                                                <span>
                                                    <a
                                                        id="game-position"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://o-henry.github.io/2019/10/29/Insta/"
                                                    >
                                                        <FaBlogger size={26} />
                                                    </a>
                                                </span>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Link to="/insta" style={{ textDecoration: 'none' }}>
                                                Learn More
                                            </Link>
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
                                                Papaya 랜딩페이지
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href="https://www.papayamap.io/" target="_blank">
                                                Learn More
                                            </a>
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
                                                쿠키런 과제 사전예약 페이지
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
                {/* <section>
                    <Grid item xs={12}>
                        <Paper className={classes.education}>
                            <div>
                                <h2>
                                    EDUCATION AND ACTIVITIES
                                </h2>
                            </div>
                            <div className="education">
                                Code states(Bootcamp) Immersive Course 14 | 2019 <br />
                                AWS 101, 201 Seminar | 2019 <br />
                                AWS Webinar | 2019
                            </div>
                        </Paper>
                    </Grid>
                </section> */}
                <section>
                    <Grid item xs={12}>
                        <Paper className={classes.education}>
                            <div className="Ani-hover">
                                <span id="copyright">
                                    © 2020 CH. All right reserved.
                                    </span>
                                <span className="Contact">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:c.henry.9209@gmail.com"
                                    >
                                        <FaGoogle size={20} />
                                    </a>
                                </span>
                                <span className="Contact">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/o-henry"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                </span>
                                <span className="Contact">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://o-henry.github.io/"
                                    >
                                        <FaBlogger size={20} />
                                    </a>
                                </span>
                            </div>
                        </Paper>
                    </Grid>
                </section>
            </Grid>
        </div >
    )
}

export default MainTemplate