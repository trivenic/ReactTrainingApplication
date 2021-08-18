import { useState } from "react";

function Home(){

    const {isLogging,setIsLogging}=useState(false);
    const {isRegister,setIsRegister}=useState(false);
    
    return( 
    <div>
        <h1>Welcome ,React</h1> 
        <button>Login</button>
        <button>Register</button>
    </div>);

}

export default Home;