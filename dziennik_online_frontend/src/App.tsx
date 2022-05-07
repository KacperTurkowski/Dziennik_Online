import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/main/Main";
import AuthProvider from "./context/AuthContext/AuthProvider";
import useAuth from "./context/AuthContext/useAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import Grades from "./pages/grades/Grades";
import Login from './pages/login/Login';
import NoMatch from "./pages/nomatch/NoMatch";
import NavMenu from './components/NavigationMenu/NavMenu';
import TeachersList from './pages/teachersList/TeachersList';
import SubjectsList from './pages/subjectsList/SubjectsList';
import Settings from './pages/settings/Settings';
import Help from './pages/help/help';
import Announcements from './pages/announcements/Announcements';
import Deadlines from './pages/deadlines/Deadlines';

const App = (): JSX.Element => {

    const Authenticated = (): JSX.Element => {
        const {user} = useAuth();

        return (
            user ? <Main /> : <Navigate to="/login" />
        )
    }

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Authenticated />}>
                    <Route index element={<Dashboard />} />
                    <Route path="oceny" element={<Grades />} />
                    <Route path="przedmioty" element={<SubjectsList />} />
                    <Route path="nauczyciele" element={<TeachersList />} />
                    <Route path="terminy" element={<Deadlines />} />
                    <Route path="komunikaty" element={<Announcements />} />
                    <Route path="ustawienia" element={<Settings />} />
                    <Route path="pomoc" element={<Help />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>
    )
}

export default App;
