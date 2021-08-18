import {  Route,  Switch } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import Blogs from "../blogs/Blogs";

function Routes(){
    return(
        <>
                <Switch>
                   <Route path='/login' component={Login}></Route>
                   <Route path='/register' component={Register}></Route>
                   <Route path='/blogs' component={Blogs}></Route>
                </Switch>
            
        </>
    )
}

export default Routes;