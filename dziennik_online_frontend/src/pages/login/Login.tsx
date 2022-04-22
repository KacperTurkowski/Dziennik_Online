import './style/style.css';
import React, {SyntheticEvent, useState} from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import {IconNames} from '../../interfaces/IconNames';
import ErrorMessage from './components/ErrorMessage';
import FormInput from './components/FormInput';

const Login = (): JSX.Element => {
    const [username, setUsername] = useState<string | null>('');
    const [password, setPassword] = useState<string | null>('');
    const [showError, setShowError] = useState<boolean>(false);

    const handleUserName = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;
        if (value === '') {
            setUsername(null);
            return;
        }
        setUsername(value);
    }

    const handlePassword = (event: SyntheticEvent) => {
        const value: string = (event.target as HTMLInputElement).value;
        if (value === '') {
            setPassword(null);
            return;
        }
        setPassword(value);
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
                            <Button>Zaloguj</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Login;