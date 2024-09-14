import "./AboutMe.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import about_image from "./assets/coding.jpg";
import { Container } from "react-bootstrap";

export default function AboutMe(){
    return (
        <>
            <Container className="d-flex justify-content-evenly align-items-center mt-5 pt-5" id="AboutMe">
                <div className="left">
                    <img src={about_image} alt="Failed to load Image" className="left-img" />
                    
                </div>
                <div className="right">
                    <div className="right-header">
                        <div>About <br />Me</div>
                    <div><ArrowForwardIcon style={{fontSize: "100px"}}/></div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint ab earum explicabo mollitia officiis, tempora suscipit cumque inventore dolores nobis aspernatur nesciunt ipsam reprehenderit possimus ex asperiores labore quis? Sint nulla esse excepturi. Maiores rem ut ipsam fuga at. Nemo expedita possimus temporibus vel veniam. Sed rerum, at mollitia id minus magni saepe repellat? Ad numquam tenetur vero sint dicta dolores dolore, quasi nihil? Nemo fuga dolorum ipsa expedita sint dicta eum voluptas, iusto placeat libero possimus. Impedit, minima. Quibusdam quia iure quidem expedita dicta perspiciatis id sapiente! Molestias rem dolor officiis a, ullam tenetur cupiditate animi cum debitis?
                    </div>
                    <div className="left-bubble"></div>
                </div>
            </Container>
        </>
    )
}