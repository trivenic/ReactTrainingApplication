import { useState } from "react";
import LoginContext from "./LoginContex";

function LoginContextProvider(props){
    const [isLoggedInUser,setIsLoggedUserIn]=useState(false);

    const value={
        isLoggedInUser,setIsLoggedUserIn
    }

    return (
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;