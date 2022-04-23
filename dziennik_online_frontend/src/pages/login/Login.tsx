import './style/style.css';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import { loginFakeApi } from "../../api/authorization";
import useAuth from "../../context/AuthContext/useAuth";
import {IconNames} from '../../interfaces/IconNames';
import ErrorMessage from './components/ErrorMessage';
import FormInput from './components/FormInput';

const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string | null>('');
    const [password, setPassword] = useState<string | null>('');
    const [showError, setShowError] = useState<boolean>(false);
    const {onLogin} = useAuth();

    useEffect(() => {
        setShowError(false);
    }, [username, password])

    const handleUserName = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;

        if (value !== '') {
            setUsername(value);
            return;
        }

        setUsername(null);
    }

    const handlePassword = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;

        if (value !== '') {
            setPassword(value);
            return;
        }

        setPassword(null);
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if ( !!username && !!password ) {
            try {
                const data = await loginFakeApi();
                onLogin(data);
            } catch (e) {
                setShowError(true);
            }

        }
    }

    return (
        <Container fluid={true} className={'login-page'}>
            <Container className={'login-page-container'}>
                <Card className={'login-form-card'}>
                    <Card.Body>
                        <h4 className={'text-center'}>Logowanie</h4>
                        <div className={'login-form'}>
                            <FormInput
                                id={'username'}
                                label={'Nazwa użytkownika'}
                                onBlurFn={handleUserName}
                                type={'text'}
                                validation={username === null}
                                iconName={IconNames.Person}
                            />
                            <FormInput
                                id={'password'}
                                label={'Hasło'}
                                onBlurFn={handlePassword}
                                type={'password'}
                                validation={password === null}
                                iconName={IconNames.Lock}
                            />
                            {showError && <ErrorMessage />}
                            <Button onClick={handleSubmit}>Zaloguj</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Login;