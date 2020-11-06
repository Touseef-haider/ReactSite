import React from 'react';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import  Appbar  from "./appBar";
const App = () =>{
    return(
        <BrowserRouter>
            <Appbar/>
            <Switch >
                <Route exact path='/' component={Home}/>
                <Route  path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;