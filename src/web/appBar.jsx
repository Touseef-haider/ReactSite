import React, { Fragment } from 'react';
import {Container,CardActions,AppBar, Toolbar, Typography, Button, makeStyles, Menu, MenuItem, IconButton, Card, CardActionArea, CardContent, Grid, CardHeader, Avatar, Switch, TableCell, Table, TableHead, TableRow, TableBody, CardMedia} from '@material-ui/core'
import { Link } from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
const useStyle = makeStyles((theme)=>({
    sectionDesktop:{
        display:'none',  
        [theme.breakpoints.up("md")]:{
            display:"flex",
        }
    },
    sectionMobile:{
        display:'flex',  
        [theme.breakpoints.up("md")]:{
            display:"none",
        }
    },
    
}))

const Appbar = ()=>{
    const classes = useStyle();
    const [mobileMenuAnchorEl,setmobileMenuAnchorEl]=useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
    const openMobileMenu=(e)=>{
        setmobileMenuAnchorEl(e.currentTarget)
    }
    const closeMobileMenu=()=>{
        setmobileMenuAnchorEl(null)
    }
    const MobileMenu=(
        <Menu onClose={closeMobileMenu} anchorEl={mobileMenuAnchorEl} id="mobile-menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem style={{color:'orange'}} onClick={closeMobileMenu} component={Link} to='/'>
                Home
            </MenuItem> 
            <MenuItem style={{color:'orange'}} onClick={closeMobileMenu} component={Link} to='/contact'>
                Contact
            </MenuItem>
        </Menu>
    )
    return(
        <Fragment>
            <div>
                <AppBar style={{backgroundColor:'white'}} position="fixed">
                        <Toolbar style={{color:'orange'}}>
                            <Typography  style={{flexGrow:1}} variant='h6'>Hello World</Typography> 
                            <div className={classes.sectionDesktop}>
                                <Button component={Link} to="/"  color="inherit">Home</Button>
                                <Button component={Link} to="/Contact" color="inherit">Contact</Button>
                            </div>
                            <IconButton color='inherit' className={classes.sectionMobile} onClick={openMobileMenu}>   
                                <MoreVertIcon></MoreVertIcon>
                            </IconButton> 
                        </Toolbar>
                </AppBar>
                {MobileMenu}
            </div>
                <Container>
                </Container>
        </Fragment>
    )
}

export default Appbar;