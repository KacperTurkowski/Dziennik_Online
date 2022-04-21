import React, { SyntheticEvent, useState } from 'react';
import {
    Container,
    Card,
    Form,
    InputGroup,
    FormControl,
    FormLabel,
    Button
} from 'react-bootstrap';
import './style.css';
import ErrorMessage from './ErrorMessage';

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

    const inputValidateMessage = (): JSX.Element => {
        return (
            <p className={'error-message'}>To pole nie może być puste.</p>
        )
    }

    return (
        <Container fluid={true} className={'login-page'}>
            <Container className={'login-page-container'}>
                <Card className={'login-form-card'}>
                    <Card.Body>
                        <h4 className={'text-center'}>Logowanie</h4>
                        <div className={'login-form'}>
                            <Form.Group className='mb-3' controlId='username'>
                                <Form.Label>Nazwa użytkownika:</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="usernamePrepend">
                                        <i className="bi bi-person-fill" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        onBlur={handleUserName}
                                        className={username === null ? 'error-input' : ''}
                                    />
                                </InputGroup>
                                {username === null && inputValidateMessage()}
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='password'>
                                <Form.Label>Hasło:</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="passwordPrepend">
                                        <i className="bi bi-lock-fill" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        onBlur={handlePassword}
                                        className={password === null ? 'error-input' : ''}
                                    />
                                </InputGroup>
                                {password === null && inputValidateMessage()}
                            </Form.Group>
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