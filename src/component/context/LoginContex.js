import { createContext } from "react";

const LoginContext =createContext({
    isLoggedInUser:{name:"Guest",email:""},
    setIsLoggedUserIn:()=>{},

})

export default LoginContext;