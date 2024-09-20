import { Container, Carousel } from 'react-bootstrap';
import P2img1 from './assets/Projects/Project2_1.png';
import P2img2 from './assets/Projects/Project2_2.png';
import P2img3 from './assets/Projects/Project2_3.png';
import P3img1 from './assets/Projects/Project3_1.png';
import P3img2 from './assets/Projects/Project3_2.png';
import P3img3 from './assets/Projects/Project3_3.png';
import P3img4 from './assets/Projects/Project3_4.png';
import P3img5 from './assets/Projects/Project3_5.png';
import P4img1 from './assets/Projects/Project4_1.png';
import P4img2 from './assets/Projects/Project4_2.png';
import P4img3 from './assets/Projects/Project4_3.png';
import P4img4 from './assets/Projects/Project4_4.png';
import P1img1 from './assets/Projects/Project1_1.png';
import P1img2 from './assets/Projects/Project1_2.png';
import P1img3 from './assets/Projects/Project1_3.png';
import ProjectCarousel from './Components/ProjectCarousel';

export default function Projects() {
    const data = [
        {
            img: [P1img1, P1img2, P1img3],
            heading: "CloudBouncer: CyberSecurity App",
            link: "https://cloudbouncer-demo-frontend.onrender.com/",
            description: 'CloudBouncer is a cutting-edge cybersecurity app designed to prevent DDoS attacks and enhance security through AI-driven authorization and authentication. Built using the MERN stack, to deliver a robust and scalable solution. The comprehensive dashboard displays all relevant analytics, including graphs and pie charts, providing users with clear and actionable insights into their security status..'
        },
        {
            img: [P2img1, P2img2, P2img3],
            heading: "To Do Master App",
            link: "https://to-do-master-main.vercel.app/",
            description: 'The app features functionalities are task creation, updating, and deletion, allowing users to organize their tasks effortlessly.Additionally, it includes user profile creation, updating, and deletion, ensuring users can securely manage their profiles.I created a seamless and user-friendly application that provides a reliable platform for managing both user information and tasks.'
        },
        {
            img: [P3img1, P3img2, P3img3, P3img4, P3img5],
            heading: "Agriter: Agri-Tourism",
            link: "https://abhay-bharti.github.io/Agriter/",
            description: 'This project is based on agri-tourism and aims to promote agriculture through a user-friendly platform. It features fully optimized mobile responsiveness, ensuring a seamless experience on all devices. With a concise and clean user interface, navigating the platform is straightforward and efficient. The project leverages Bootstrap and jQuery, providing robust frameworks for building responsive, dynamic, and visually appealing web pages.'
        },
        {
            img: [P4img1, P4img2, P4img3, P4img4],
            heading: "FIFA 2022 Web App",
            link: 'https://abhay-bharti.github.io/One_Man_Coder_KOC27_CipherSchools/',
            description: 'This project is related to the FIFA World Cup, offering users the ability to watch highlights, stay updated with the latest news about the tournament, and much more. Additionally, it features an e-commerce page where users can shop for football equipment. By utilizing HTML, CSS, and JavaScript, the project delivers a dynamic and interactive user experience, ensuring that fans have access to all the relevant details and can easily purchase their favorite football gear.'
        },
    ]

    return (
        <>
            <Container id='Project'>
                <h1 className='text-center Contact-heading'>My Projects </h1>
                {
                    data.map((info, index) => (
                        <div className={`project-box ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
                            <div className='project-carousel'>
                                <ProjectCarousel images={info.img} /></div>
                            <div className='project-info'>
                                <h1 className='mt-0'>{info.heading}</h1>
                                <p>
                                    {info.description}
                                </p>
                                <a href={info.link} target='_blank'>Click here to visit the project</a>
                            </div>
                        </div>
                    ))
                }

            </Container>
        </>
    )
}