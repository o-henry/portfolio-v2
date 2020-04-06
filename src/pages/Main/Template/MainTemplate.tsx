//@ts-nocheck
import React from 'react'
import { NavBar, Content } from 'components';
import { apolloGql, MouseScroll, typescriptIcon, local, crunch, cookie, blinker, landing } from 'static';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { FaGoogle, FaGithub, FaLinkedin, FaBlogger, FaAws, FaNode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12) !important'
        },
        media: {
            fontFamily: 'Raleway',
            height: 200,
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
                            <h2>WORK</h2>
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
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                윙크로 게임하기 팀 프로젝트 2019 openCV 기반 BRFV4 SDK를 사용하여 윙크를 인식, 깜빡일때 점프하는 웹 게임을 개발했습니다
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
                                            image={crunch}
                                            title="CRUNCH"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">Crunch Price</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                기업 협업 프로젝트 2019 AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인 에게 맞는 상품 추천 시스템을 구현했습니다.
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
                                            <Typography gutterBottom variant="h5" component="h2">Local SNS</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                LOCAL SNS 개인 프로젝트 2019 (진행 중) 인스타그램 해시태그, 장소, 날짜 데이터를 크롤링 및 가공 하여 사용하는 해시태그 데이터 기반 어플리케이션 입니다.                                            </Typography>
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
                                            <Typography gutterBottom variant="h5" component="h2">Local SNS</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                LOCAL SNS 개인 프로젝트 2019 (진행 중) 인스타그램 해시태그, 장소, 날짜 데이터를 크롤링 및 가공 하여 사용하는 해시태그 데이터 기반 어플리케이션 입니다.                                            </Typography>
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
            </Grid>
        </div >
    )
}

export default MainTemplate