import {
Menu, CardContent,IconButton, Grid, Paper,Typography, TextField, makeStyles, Button, Container, Card, CardActionArea, CardHeader, Avatar
} from '@material-ui/core';
import './style.css'
import React,{useState} from 'react';
import useStyle from './style';
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import gfb from './Images/gfb.jpg';
import vmin from './Images/v-min.png';
import Filter from '@material-ui/icons/Filter';
import Retur from "@material-ui/icons/Receipt"
import Het from "@material-ui/icons/Grade"
import girl from './Images/about.jpg'
import Tanveer from './Images/Tanveer.jpg'
import Haider from './Images/haider.jpg'

const style = makeStyles({
    Orange:{
        color:'orange'
    },
    Grey:{
        color:'gray'
    }
})

const Home = ()=>{
    const classes = style();
    return(
        <div>
            <Grid  container style={{marginTop:"70px",marginBottom:'20px'}} direction="row">
                <Grid item md={6}>
                    <Typography variant="h3" style={{margin:'40px 0px 0px 40px',fontWeight:'bolder'}} className={classes.Orange}>
                        HOME REPAIR
                    </Typography>
                    <Typography variant="h3" style={{margin:'40px 0px 0px 40px'}} className={classes.Grey}>
                        & Renovating
                    </Typography>
                    <Typography style={{margin:'40px 0px 0px 40px'}} className={classes.Grey} variant="h6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam eum eveniet ab quisquam eligendi dicta impedit                  
                    </Typography>
                    <Button variant="outlined" style={{fontWeight:'bold',margin:'40px 0px 0px 40px',border:'2px solid grey'}} className={classes.Grey} >
                        Read More
                    </Button>
                </Grid>
                <Grid item md={6}>
                        <img width="100%" style={{marginTop:'10px'}} height="400px" src={gfb}/>
                </Grid>
            </Grid>
            <Grid item md={12}>
                <Grid container style={{backgroundColor:'orange'}} spacing={4} justify="center">
                    <Grid item md={3} xs={12}>
                        <Card style={{margin:'10px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <center><IconButton  style={{backgroundColor:'orange'}}><HomeIcon fontSize="large"></HomeIcon></IconButton></center>
                                    <Typography align="center" style={{fontWeight:'bolder'}} variant="h5" className={classes.Orange}>
                                        Helloing
                                    </Typography>
                                    <Typography  variant="h6" className={classes.Grey}>
                                      <i>
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam eum eveniet ab quisquam eligendi dicta impedit                  
                                      </i>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card style={{margin:'10px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <center><IconButton  style={{backgroundColor:'orange'}}><Filter fontSize="large"></Filter></IconButton></center>
                                    <Typography align="center" variant="h5" style={{fontWeight:'bolder'}} className={classes.Orange}>
                                        Showering
                                    </Typography>
                                    <Typography variant="h6" className={classes.Grey}>
                                      <i>
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam eum eveniet ab quisquam eligendi dicta impedit                  
                                      </i>
                                      </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3}  xs={12}>
                        <Card style={{margin:'10px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <center><IconButton  style={{backgroundColor:'orange'}}><Retur fontSize="large"></Retur></IconButton></center>
                                    <Typography align="center" variant="h5" style={{fontWeight:'bolder'}} className={classes.Orange}>
                                        Cleansing
                                    </Typography>
                                    <Typography variant="h6" className={classes.Grey}>
                                      <i>
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam eum eveniet ab quisquam eligendi dicta impedit                  
                                      </i>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card style={{margin:'10px'}}>
                            <CardActionArea>
                                <CardContent>
                                    <center><IconButton  style={{backgroundColor:'orange'}}><Het fontSize="large"></Het></IconButton></center>
                                    <Typography align="center" variant="h5" style={{fontWeight:'bolder'}} className={classes.Orange}>
                                        Leaning
                                    </Typography>
                                    <Typography variant="h6" className={classes.Grey}>
                                      <i>
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aliquam eum eveniet ab quisquam eligendi dicta impedit                  
                                      </i>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item md={12} xs={12} sm={12} style={{backgroundColor:'lightgrey',padding:'20px'}}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid style={{marginTop:'40px'}} item md={6} alignItems="center">
                            <Typography style={{fontWeight:'bold'}} variant="h3">
                                About Us
                            </Typography>
                        </Grid>
                        <Grid item md={6} style={{marginTop:'15px'}}>
                            <Typography variant="h6" align="center" style={{color:'blackgrey'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi error aut ad fuga ullam nam accusamus omnis excepturi consequuntur. Minima nostrum libero, dicta numquam asperiores expedita rem maxime velit obcaecati.
                                Lorem ipsum dolor, sit amet di error aut ad fuga ullam nam accusamus omnis excepturi consequuntur. Minima nostrum libero, dicta numquam asperiores expedita rem maxime velit obcaecati.
                            </Typography>
                        </Grid>
                        <Grid item md={6} style={{marginTop:'20px'}}>
                            <Button  variant="contained" style={{fontWeight:'bold',backgroundColor:'orange'}}>
                                LEARN MORE
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} justify="center" style={{backgroundColor:'orange'}}>
                    <Grid container spacing={4} justify="center" >
                        <Grid item md={12}>
                            <Typography align="center"  variant="h4">Popular Services</Typography>
                            <Typography align="center" className={classes.Grey} variant="h6">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur placeat enim assumenda, quasi pariatur nesciunt in ad tenetur error repudiandae quia numquam nostrum! Delectus maiores aut eaque qui. Recusandae, obcaecati?
                            </Typography>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Paper style={{marginTop:'20px',border:'2px solid orange'}}>
                                <center>
                                    <img width="100%"  height="300px" src={girl}/>
                                </center>
                                <center>
                                    <Button style={{backgroundColor:'orange',fontWeight:'bold'}} variant="contained">Garbage Disposal</Button>
                                </center>
                                <Typography align="center" variant="h5"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam labore odit, deleniti minus laudantium reprehenderit perferendis quos, aliquam quisquam rerum consequatur dolore reiciendis, debitis ipsa. Cum, quia? Consectetur, similique!
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Paper style={{marginTop:'20px',border:'2px solid orange'}}>
                                <center>
                                    <img  height="300px" src={Tanveer}/>
                                    <Button style={{backgroundColor:'orange',fontWeight:'bold'}} variant="contained">Wall Painting</Button>
                                </center>
                                <Typography align="center" variant="h5"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam labore odit, deleniti minus laudantium reprehenderit perferendis quos, aliquam quisquam rerum consequatur dolore reiciendis, debitis ipsa. Cum, quia? Consectetur, similique!
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Paper style={{marginTop:'20px',border:'2px solid orange'}}>
                                <center>
                                    <img height="300px" src={Haider}/>
                                </center>
                                <center>
                                    <Button style={{backgroundColor:'orange',fontWeight:'bold'}} variant="contained">Plumbing</Button>
                                </center>
                                <Typography align="center" variant="h5"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam labore odit, deleniti minus laudantium reprehenderit perferendis quos, aliquam quisquam rerum consequatur dolore reiciendis, debitis ipsa. Cum, quia? Consectetur, similique!
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} style={{marginTop:'20px',backgroundColor:'black'}}>
                    <Grid container  justify="center">
                        <Grid item md={6} style={{marginTop:'20px'}}>
                            <Typography variant="h5" align="center" style={{color:'white',fontWeight:'bold'}}>Our Home Services</Typography>
                            <Typography variant="h6" align="center" style={{color:'grey'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, dolorem.
                            </Typography>
                        </Grid>
                        <Grid item md={12} style={{marginBottom:'20px'}}>
                            <Grid container spacing={4} style={{marginTop:'80px'}} direction="row">
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Painting
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Plumbing
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Remodeling
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container  style={{marginTop:'80px'}} spacing={5} direction="row">
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Flooring
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Home Cleaning
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography align="center" variant="h5" style={{color:'orange'}}>
                                        Smart Home
                                    </Typography>
                                    <Typography align="center" style={{color:'white'}} variant="h6">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem saepe optio!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item>
                                    <Button style={{backgroundColor:'orange',fontWeight:'bold',marginTop:'20px'}} varaint="contained"> Read More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} justify="center">
                    <Grid justify="center"  style={{backgroundColor:'orange',color:'white'}} container>
                        <Grid  item md={6}>
                            <center>
                                <IconButton>
                                    <Facebook fontSize="large" style={{color:'white'}}></Facebook>
                                </IconButton>
                                <IconButton>
                                    <Twitter fontSize="large" style={{color:'white'}}></Twitter>
                                </IconButton>
                                <IconButton>
                                    <Instagram fontSize="large" style={{color:'white'}}></Instagram>
                                </IconButton>
                            </center>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )   
}

export default Home;