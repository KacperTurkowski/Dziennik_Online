import React, { FocusEventHandler } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

interface Props {
    label: string;
    id: string;
    type: "text" | "password";
    validation: boolean;
    onBlurFn: FocusEventHandler;
    icon: JSX.Element;
}

const FormInput = ({label, id, type, validation, onBlurFn, icon}: Props): JSX.Element => {
    const idPrepend: string = id + 'Prepend';

    const inputValidateMessage = (): JSX.Element => {
        return (
            <p className={'error-message'}>To pole nie może być puste.</p>
        )
    }

    return (
        <Form.Group className='mb-3' controlId={id}>
            <Form.Label>{label}:</Form.Label>
            <InputGroup>
                <InputGroup.Text id={idPrepend}>
                    {icon}
                </InputGroup.Text>
                <Form.Control type={type} onBlur={onBlurFn} className={validation ? 'error-input' : ''} />
            </InputGroup>
            {validation && inputValidateMessage()}
        </Form.Group>
    )
}

export default FormInput;