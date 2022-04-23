import React from 'react';
import {Routes, Route} from "react-router-dom";
import { AuthenticatedHOC } from "./components/authentication/AuthenticatedHOC";
import Home from "./components/main/Home";
import AuthProvider from "./context/AuthContext/AuthProvider";
import Login from './pages/login/Login';

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<AuthenticatedHOC children={Home} />}>
                <Route path={'test'} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

const App = (): JSX.Element => {
  return (
      <AuthProvider>
          <Router />
      </AuthProvider>
  )
}

export default App;
