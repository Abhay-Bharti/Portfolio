import "./Nav.css";
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from "react";

export default function PortfolioNav() {
    const [mode, setMode] = useState(true);

    const handleMode = () => {
        setMode(!mode);
    }

    // if (mode) {
    //     document.body.classList.add('light-mode');
    // } else {
    //     document.body.classList.remove('light-mode');
    // }

    return (
        <>
            <Container
                className={`mt-sm-3 justify-content-center nav-bar text-white
                    ${!mode ? 'dark-mode' : 'light-mode'}`}
            >
                <Navbar expand="sm" >
                    <Container>
                        <Navbar.Brand className="text-white">Abhay</Navbar.Brand>
                        <div>
                        <button className="icon icon-out align-self-center me-2 " onClick={handleMode} data-tooltip={mode ? "Switch to Dark Mode" : "Switch to Light Mode"}>{!mode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}</button>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        </div>

                        <Navbar.Offcanvas
                            className="off-canvas"
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton style={{ color: "white" }}>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1">
                                    <div>
                                        <Nav.Link className="list-item" href="#Home">Home</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#AboutMe">About Me</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#Project">Projects</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#Contact">Contact</Nav.Link>
                                    </div>
                                </Nav>
                                <button className="icon icon-in align-self-center me-2 " onClick={handleMode} data-tooltip={mode ? "Switch to Dark Mode" : "Switch to Light Mode"}>{!mode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}</button>

                                <button id="contact-btn">Contact me</button>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </Container>

        </>
    );
}