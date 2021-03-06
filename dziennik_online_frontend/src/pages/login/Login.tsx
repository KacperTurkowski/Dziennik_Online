import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import useAuth from "../../context/AuthContext/useAuth";
import { loginApi } from "../../services/authorization";
import ErrorMessage from './components/ErrorMessage';
import FormInput from './components/FormInput';
import './style/style.css';

const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string|null>('');
    const [password, setPassword] = useState<string|null>('');
    const [showError, setShowError] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);

    const {user, onLogin} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if ( user !== null ) {
            navigate('/');
        }
    });

    useEffect(() => {
        setShowError(false);
    }, [username, password])

    const handleUserName = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;

        if ( value !== '' ) {
            setUsername(value);
            return;
        }
        setUsername(null);
    }

    const handlePassword = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;

        if ( value !== '' ) {
            setPassword(value);
            return;
        }
        setPassword(null);
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if ( !!username && !!password ) {
            try {
                setIsPending(true);
                const data = await loginApi(username, password);
                onLogin(data);
            } catch (e) {
                setShowError(true);
            } finally {
                setIsPending(false);
            }
        } else {
            setUsername(null);
            setPassword(null);
        }
    }

    const getOverlayLoading = () => {
        return (
            <div className={'overlay'}>
                <div className={'loading'}>
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <Container fluid={true} className={'login-page'}>
            {isPending && getOverlayLoading()}
            <Container className={'login-page-container'}>
                <Card className={'login-form-card'}>
                    <Card.Body>
                        <h4 className={'text-center'}>Logowanie</h4>
                        <div className={'login-form'}>
                            <FormInput
                                id={'username'}
                                label={'Nazwa u??ytkownika'}
                                onBlurFn={handleUserName}
                                type={'text'}
                                validation={username === null}
                                icon={<Icon.PersonFill/>}
                            />
                            <FormInput
                                id={'password'}
                                label={'Has??o'}
                                onBlurFn={handlePassword}
                                type={'password'}
                                validation={password === null}
                                icon={<Icon.Lock/>}
                            />
                            {showError && <ErrorMessage/>}
                            <Button onClick={handleSubmit}>Zaloguj</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Login;