import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const service_id = 'service_sbhnago';
        const template_id = 'template_7juej6m';
        const public_key = 'b-iXlijGHLguh_yCW';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Abhay Bharti',
            message: formData.message,
        };

        emailjs.send(service_id, template_id, templateParams, public_key)
            .then((response) => {
                console.log('SUCCESS!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                alert('Thank you for reaching out to me. I will get to you soon.');
            }, (error) => {
                console.log(error);
                alert('An error occurred, please try again.');
            });
    };

    return (
        <>
            <Container className='d-flex flex-column align-items-center' id='Contact'>
                <h1 className='Contact-heading'>Contact Me</h1>
                <Form className='Form-box' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="messageBox">
                        <Form.Label>Message*</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter message"
                            style={{ height: '100px' }}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: '40%' }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}
