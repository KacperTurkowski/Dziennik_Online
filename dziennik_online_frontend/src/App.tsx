import React from 'react';
import { Authenticated } from "./components/authentication/Authenticated";
import Home from "./components/main/Home";
import Login from './pages/login/Login';
import {Routes, Route} from "react-router-dom";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Authenticated children={Home} />}>
                <Route path={'test'} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

const App = (): JSX.Element => {
  return (
     <Router />
  )
}

export default App;
