// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./Component/AppName";
import Slogan from "./Component/Slogan";
import Time from "./Component/Time";

function App() {
    return (
        <center>
            <Appname />
            <Slogan></Slogan>
            <Time/>
        </center>
    );
}

export default App;
