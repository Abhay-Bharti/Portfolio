import { Container, Button, Form } from 'react-bootstrap';

export default function ContactMe() {
    return (
        <>
            <Container className='d-flex flex-column align-items-center Contact-container'>
                <h1 className='Contact-heading'>Contact Me</h1>
                <Form className='Form-box'>
                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="emailField">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="messageBox">
                        <Form.Label>Message*</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter message"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: '40%' }}>
                        Submit
                    </Button>
                </Form>
            </Container>

            <div style={{ height: '2px', backgroundColor: 'white', margin: '2em auto' }}></div>

            <Container className="d-flex justify-content-between mb-3" style={{fontSize: "larger"}}>
                <div>Abhay Bharti</div>
                <div className="d-flex justify-content-evenly Footer-bar">
                    <a href="#Home">Home</a><a href="#AboutMe">About Me</a><a href="#Projects">Projects</a><a href="#Contact">Contact Me</a>
                </div>
            </Container>
        </>
    )
}