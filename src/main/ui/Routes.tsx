import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import styles from './Routes.module.css'
import Error404 from "./Header/error404/Error404";
import Profile from "../../features/profile/ui/Profile";
import ResetPassword from "../../features/reset-password/ui/ResetPassword";
import NewPassword from "../../features/new-password/ui/NewPassword";
import Test from "../../features/test/ui/Test";
import Packs from "../../features/packs/ui/Packs";
import Cards from "../../features/cards/ui/Cards";
import LoginContainer from "../../features/auth/login/ui/LoginContainer";
import RegistrationContainer from "../../features/auth/registration/ui/RegistrationContainer";
import {LearningPage} from "../../features/learning/ui/LearnPage";
import ModalsPage from "./common/c6-Modal/ModalsPage";

export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    RESET_PASSWORD: "/reset-password",
    NEW_PASSWORD: "/new-password",
    TEST: "/test",
    PACKS: "/packs",
    CARDS: "/cards",
    LEARNING: "/learning",
    MODALS: "/modals"
}

function Routes() {
    return (
        <div className={styles.mainContainer}>
            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} render={() => <RegistrationContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RESET_PASSWORD} render={() => <ResetPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={`${PATH.CARDS}/:id`} render={() => <Cards/>}/>
                <Route path={PATH.LEARNING} render={() => <LearningPage/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.MODALS} render={() => <ModalsPage />}/>

                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
