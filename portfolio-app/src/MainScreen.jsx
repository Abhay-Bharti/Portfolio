import { Container } from "react-bootstrap";
import PortfolioNav from "./Navbar";
import image from './assets/Front_image.jpg'
import Typewriter from 'typewriter-effect/dist/core';

export default function MainScreen() {
    return (
        <>
            <PortfolioNav />
            <Container className="d-flex justify-content-between align-items-center mt-5">
                <div>
                    <p className="">FULL STACK WEB DEVELOPER</p>
                    <h1 className="mainscreen-head">Abhay <br /> Bharti</h1>

                    <p className="mainscreen-subhead">I'm a Full Stack Web Developer <br />and I work remotely from India.</p>
                </div>
                <div>
                    <img src={image} alt="Failed to load image" className="h-100 w-100  img" />
                </div>
            </Container>

        </>
    )
}