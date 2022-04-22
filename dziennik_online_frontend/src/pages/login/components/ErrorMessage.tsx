import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = () => {
    return (
        <Alert variant='danger'>
            Nieprawidłowe dane. Sprawdź jeszcze raz.
        </Alert>
    )
}

export default ErrorMessage;