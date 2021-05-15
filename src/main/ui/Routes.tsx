import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from './Routes.module.css'

import Error404 from "./Header/error404/Error404";
import Login from "../../features/auth/login/ui/Login";
import Profile from "../../features/profile/ui/Profile";
import Registration from "../../features/auth/registration/ui/Registration";
import ResetPassword from "../../features/reset-password/ui/ResetPassword";
import NewPassword from "../../features/new-password/ui/NewPassword";
import Test from "../../features/test/ui/Test";
import Packs from "../../features/packs/ui/Packs";


export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    RESET_PASSWORD: "/reset-password",
    NEW_PASSWORD: "/new-password",
    TEST: "/test",
    PACKS: "/packs"
}

function Routes() {
    return (
        <div className={styles.mainContainer}>
            <Switch>

            <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

            <Route path={PATH.LOGIN} render={() => <Login />}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration />}/>
            <Route path={PATH.PROFILE} render={() => <Profile />}/>
            <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword />}/>
            <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword />}/>
            <Route path={PATH.TEST} render={() => <Test />}/>
            <Route path={PATH.PACKS} render={() => <Packs />}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
