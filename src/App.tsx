import React from 'react';
import './App.css';
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import {Loader} from "./components/loader/loader";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import Filter from "./components/Filter/Filter";


function App() {

    const appStatus = useSelector((state: RootStateType) => state.appState.status)

    return (
        <div className="App">
            {appStatus === 'loading' && <Loader/>}
            <Header/>
            <div className="App-body">
                <Filter/>
                <Cards/></div>
        </div>
    );
}

export default App;
