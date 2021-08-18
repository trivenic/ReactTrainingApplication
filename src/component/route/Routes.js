import {  Route,  Switch } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";

function Routes(){
    return(
        <>
                <Switch>
                   <Route path='/login' component={Login}></Route>
                   <Route path='/register' component={Register}></Route>
                </Switch>
            
        </>
    )
}

export default Routes;