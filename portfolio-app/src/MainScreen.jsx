import { Container } from "react-bootstrap";
import PortfolioNav from "./Navbar";
import image from './assets/Passport_photo-removebg-preview.png'

export default function MainScreen() {
    return (
        <>
            <PortfolioNav />
            <Container className="d-flex justify-content-evenly align-items-center mt-5">
                <div className="">
                    <p>FULL STACK WEB DEVELOPER</p>
                    <h1>Abhay</h1>
                    <h1>Bharti</h1>

                    <p className="mt-5 pt-5">I'm a Full Stack Web Developer and I work remotely from India.</p>
                </div>
                <div>
                    <img src={image} alt="Failed to load image" className="h-100 w-100  img" />
                </div>
            </Container>
            
        </>
    )
}