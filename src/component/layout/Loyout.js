import Routes from "../route/Routes";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import './Layout.css'
import LoginContext from "../context/LoginContex";
import { useSelector } from "react-redux";
function Layout(){

    const [isLoggedOut,setIsLoggedOut]=useState(false);
    function handleLogout(){
        setIsLoggedOut(false);
    }
    const cardsBlocks = useSelector((state)=>state);
    const {isLoggedInUser} =useContext(LoginContext);
    return (
        <div className="Layout">
            <header className="Layout-header">
            <h1>React Application</h1> 
            {(isLoggedInUser.name==="Guest")?(<h4>Welcome,Guest</h4>):(<h4>Welcome , {isLoggedInUser.name}</h4>)}
            <h5>{isLoggedInUser.email}</h5>
            <h6>Items in Carts : {cardsBlocks.id}</h6>
            <nav className="Layout-nav">
                <Link to='/login' className="Layout-nav-link">Login</Link>
                <Link to='/register' className="Layout-nav-link">Register</Link>
                {isLoggedOut?( <Link to='/logout' className="Layout-nav-link" onClick={handleLogout}>Logout</Link>):null}
                
            </nav>
        </header>
        <main>
            <Routes setIsLoggedOut={setIsLoggedOut}/>
        </main>
        <footer></footer>
        </div>
    )
}

export default Layout;

