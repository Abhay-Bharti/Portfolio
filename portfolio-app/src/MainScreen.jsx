import { Container } from "react-bootstrap";
import PortfolioNav from "./Navbar";
import image from './assets/Me1.jpg'
import Typewriter from 'typewriter-effect';

export default function MainScreen() {
    return (
        <>
            <PortfolioNav />
            <Container className="d-flex justify-content-around align-items-center mt-5 flex-column flex-sm-row" id="Home">
                <div className="mainscreen-left">
                    <p>FULL STACK WEB DEVELOPER</p>
                    <h1 className="mainscreen-head">
                        <Typewriter
                            options={{
                                strings: 'Abhay Bharti',
                                autoStart: true,
                                loop: true,
                                delay: 270
                            }}
                        /></h1>
                    <p className="mainscreen-subhead">I'm a Full Stack Web Developer <br />and I work remotely from India.</p>
                </div>
                <div className="mainscreen-img">
                    <img src={image} alt="Failed to load image" />
                </div>
            </Container>

        </>
    )
}