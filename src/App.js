import React from 'react';
import Header from './components/headerComponents/header'
import Footer from './components/footerComponents/footer'
import Homepage from './components/pages/homePage'
import Products from './components/pages/Products'
import './mycss.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


function App() {
    return (
    <Router> 
    <div className = "App" >
        <Header/>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/Products" component={Products}/>
        <Footer/>
    </div>
    </Router>
    );
}

export default App;