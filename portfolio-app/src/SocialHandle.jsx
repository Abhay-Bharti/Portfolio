import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from 'react-bootstrap';

export default function SocialHandle() {
    return (
        <Container className='d-flex flex-column p-3 social-handle'>
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/abhay-bharti-857757252/"><LinkedInIcon style={{ fontSize: "40px" }} /></a>
                </div>
                <div className="col">
                    <a href="mailto:[abhaybharti2123@gmail.com]"><EmailIcon style={{ fontSize: "40px" }} /></a>
                </div>
                <div className="col">
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="https://github.com/Abhay-Bharti"><GitHubIcon style={{ fontSize: "40px" }} /></a>
                </div>
                <div className="col">
                    <a href="#"><InstagramIcon style={{ fontSize: "40px" }} /></a>
                </div>
                <div className="col">
                    <a href="#"><FacebookIcon style={{ fontSize: "40px" }} /></a>
                </div>
            </div>
        </Container>
    )
}