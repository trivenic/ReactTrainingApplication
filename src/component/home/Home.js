import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Routes from "../route/Routes";
import Layout from "../layout/Loyout";
function Home(){
    
   //  const [isLoggedOut,setIsLoggedOut]=useState(false);
    return( 
     
    <div className="Home">
        <Layout/>
        {/* <header className="Home-header">
            <h1>React Application</h1> 
            <nav className="Home-nav">
                <Link to='/login' className="Home-nav-link">Login</Link>
                <Link to='/register' className="Home-nav-link">Register</Link>
                {isLoggedOut?( <Link to='/logout' className="Home-nav-link">Logout</Link>):null}
            </nav>
        </header>
        <main>
            <Routes setIsLoggedOut={setIsLoggedOut}/>
        </main>
        <footer></footer>
         */}
    </div>
    );

}

export default Home;