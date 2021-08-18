import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Routes from "../route/Routes";
function Home(){

    return( 
     
    <div className="Home">
        <header className="Home-header">
            <h1>React Application</h1> 
            <nav className="Home-nav">
                <Link to='/login' className="Home-nav-link">Login</Link>
                <Link to='/register' className="Home-nav-link">Register</Link>
            </nav>
        </header>
        <main>
            <Routes/>
        </main>
        <footer></footer>
        
    </div>
    );

}

export default Home;