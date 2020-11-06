import { Dialog, Typography,Paper, FormControl, FormControlLabel, FormLabel, TextField, Grid, IconButton, Box, Button, DialogTitle, DialogContentText, DialogContent, DialogActions, createMuiTheme } from '@material-ui/core';
import React,{useState,Fragment} from 'react';
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import useStyle from './style';
import orange from '@material-ui/core/colors/orange';
import white from '@material-ui/core/colors/lime';


const Contact = ()=>{

    const classes = useStyle();
    const [open,setOpen] =  useState(false);
    return(
        <Fragment>
            <Grid spacing={4} container justify="center" alignItems="center" style={{marginTop:'70px'}}>
                <Grid item sm={12} md={12}>
                    <Typography style={{color:'orange'}} align="center" variant='h5'>Contact Us</Typography>
                </Grid>
                <Grid item sm={6} md={6}>
                    <Grid container justify="center" alignItems="center">
                        <TextField color="primary" label="Enter Your FirstName" variant="outlined" type="variant" fullWidth  />
                        <TextField label="Enter Your LastName" variant="outlined" type="variant" fullWidth style={{marginTop:'20px'}}/>
                        <TextField label="Enter Your Email" variant="outlined" type="variant" fullWidth style={{marginTop:'20px'}}/>
                        <TextField variant="outlined" label="Write Your Message here" type="text" style={{marginTop:'20px'}} fullWidth multiline rows={8} rowsMax={6}/>
                        <Button 
                            style={{marginTop:'20px',backgroundColor:'orange',color:'white  '}}
                            onClick={()=>{
                                setOpen(!open);
                                setTimeout(() => {
                                    setOpen(false);
                                    console.log("This is going to do the opposite of the open variable")
                                }, 3000);
                            }
                            } 
                            variant="contained"
                        >
                        Send Your Message
                        </Button>
                    </Grid>
                </Grid>        
                <Dialog open={open} fullWidth >
                    <center>
                        <DialogContent style={{align:'center'}}>
                                <DialogTitle>
                                    <Typography variant="h6" color="primary">
                                        Hello   
                                    </Typography>
                                </DialogTitle>
                                <DialogContentText>
                                    Message Sent
                                </DialogContentText>
                        </DialogContent>
                    </center>
                </Dialog>
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
            </Fragment>
    )
}

export default Contact;