import React, {useEffect} from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from "./Header/Header";
import Routes from './Routes';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {CircularProgress, LinearProgress} from "@material-ui/core";
import {RequestStatusType} from "./app-reducer";

function App() {
    const status = useSelector<AppRootStateType, RequestStatusType>
    (state => state.app.status)
    const dispatch = useDispatch()

     return (
    <div className="App">
        <HashRouter>
            <Header />
            <Routes />
            {status === 'loading' && <LinearProgress color={'secondary'}/>}
        </HashRouter>
    </div>
  );
}

export default App;
