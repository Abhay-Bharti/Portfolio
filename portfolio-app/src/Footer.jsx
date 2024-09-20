import SocialHandle from './SocialHandle';
import { Container } from 'react-bootstrap';
import logo from './assets/logo.png';

export default function Footer() {
    return (
        <>
            <SocialHandle />
            <div className='footer-line'></div>

            <Container className="d-flex justify-content-between mb-3" style={{ fontSize: "larger" }}>
                <div className='logo-wrap'><img src={logo} alt="logo" /></div>
                <div className="d-flex justify-content-evenly Footer-bar flex-wrap footer-a-width">
                    <a href="#Home">Home</a>
                    <a href="#AboutMe">About Me</a>
                    <a href="#Project">Projects</a>
                    <a href="#Skills">Skill Set</a>
                    <a href="#Certificate">Certifications</a>
                </div>
            </Container>
        </>
    )
}