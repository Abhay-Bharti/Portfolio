import "./AboutMe.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import about_image from "./assets/me2.jpg";
import { Container } from "react-bootstrap";

export default function AboutMe() {
    return (
        <>
            <Container className="d-flex mt-0 mb-5 justify-content-evenly align-items-center flex-wrap" id="AboutMe">
                <div className="left">
                    <div className="left-header">
                        <div>About <br />Me</div>
                        <div><ArrowForwardIcon sx={{ fontSize: { xs: 40, sm: 50, md: 80, lg: 100 } }} /></div>
                    </div>
                    <div className="left-img">
                        <img src={about_image} alt="Failed to load Image" />
                    </div>
                    <div className="left-bubble"></div>
                </div>
                <div className="right">
                    <div>
                        Welcome to my portfolio! I am currently pursuing a B.Tech in Computer Science from Lovely Professional University, with a major in Web Development. My expertise lies in the MERN stack, comprising MongoDB, Express.js, React, and Node.js, which allows me to build dynamic and responsive web applications. I possess strong proficiency in various programming languages, including Java, C++, and Python, enabling me in good problem solving skills.
                    </div>
                </div>
            </Container>
        </>
    )
}