import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import StudentNavMenu from "./components/navbar/student/StudentNavMenu";
import TeacherNavMenu from "./components/navbar/teacher/TeacherNavMenu";
import AuthProvider from "./context/AuthContext/AuthProvider";
import useAuth from "./context/AuthContext/useAuth";
import { Role } from "./interfaces/UserInterface";
import Login from './pages/login/Login';
import NoMatch from "./pages/nomatch/NoMatch";
import {Dashboard as TeacherDashboard} from "./pages/teacher/dashboard/Dashboard";
import {Dashboard as StudentDashboard} from "./pages/student/dashboard/Dashboard";
import Subject from "./pages/teacher/subjects/subjectPage/Subject";
import {Subject as StudentSubject} from "./pages/student/subjects/subjectPage/Subject";
import SubjectsList from './pages/teacher/subjects/SubjectsList';

const App = (): JSX.Element => {

    const Authenticated = (): JSX.Element => {
        const {user} = useAuth();

        switch (user?.role) {
            case Role.Student:
                return <Navigate to={'/student'}/>
            case Role.Teacher:
                return <Navigate to={'/teacher'}/>
        }

        return <Navigate to={'/login'}/>
    }

    const PrivateRoute = ({children, role}: { children: JSX.Element; role: Role }) => {
        const {user} = useAuth();

        if ( !user ) {
            return <Navigate to="/login"/>
        }

        if ( user.role !== role ) {
            return <Navigate to="/"/>
        }

        return children;
    };

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Authenticated/>}/>
                <Route
                    path='/teacher/*'
                    element={
                        <PrivateRoute role={Role.Teacher}>
                            <Main navigation={<TeacherNavMenu/>}/>
                        </PrivateRoute>
                    }
                >
                    <Route index element={<TeacherDashboard/>}/>
                    <Route path="przedmioty" element={<SubjectsList/>}/>
                    <Route path="przedmioty/:subject" element={<Subject/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
                <Route
                    path='/student'
                    element={
                        <PrivateRoute role={Role.Student}>
                            <Main navigation={<StudentNavMenu/>}/>
                        </PrivateRoute>
                    }
                >
                    <Route index element={<StudentDashboard />}/>
                    <Route path="przedmioty/:subject" element={<StudentSubject />}/>
                    <Route path="nomatch" element={<NoMatch/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </AuthProvider>
    )
}

export default App;
