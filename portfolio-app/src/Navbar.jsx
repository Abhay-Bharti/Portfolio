import "./Nav.css";
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { useState } from "react";
import logo from "./assets/logo.png";

export default function PortfolioNav() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");

        handleClose();

        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 300); // Delay to ensure Offcanvas has closed
    };

    return (
        <>
            <Container className="mt-sm-3 nav-bar">
                <Navbar expand="sm" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand className="text-white">
                            <div className="logo-wrap">
                                <img src={logo} alt="logo" />
                            </div>
                        </Navbar.Brand>
                        <div>
                            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleShow} />
                        </div>

                        <Navbar.Offcanvas
                            show={showOffcanvas}
                            onHide={handleClose}
                            data-bs-theme="dark"
                            id="offcanvasNavbar-expand-sm"
                            aria-labelledby="offcanvasNavbarLabel-expand-sm"
                            placement="end"
                            scroll={true}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                    Abhay Bharti
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1">
                                    <div>
                                        <Nav.Link className="list-item" href="#Home" onClick={handleLinkClick}>Home</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#AboutMe" onClick={handleLinkClick}>About Me</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#Project" onClick={handleLinkClick}>Projects</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#Skills" onClick={handleLinkClick}>Skill Set</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link className="list-item" href="#Certificate" onClick={handleLinkClick}>Certifications</Nav.Link>
                                    </div>
                                </Nav>
                                <a href="#Contact">
                                    <button id="contact-btn">Contact me</button>
                                </a>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}
