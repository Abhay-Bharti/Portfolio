import { Container } from "react-bootstrap";
import img4 from './assets/Project4.png';
import img1 from './assets/Project1.png';
import img2 from './assets/Project2.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certification() {
    const data = [
        { img: img1 },
        { img: img2 },
        { img: img4 },
        { img: img1 },
        { img: img2 },
        { img: img4 },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    }

    return (
        <>
            <Container id="Certificate">
                <h1 className="Contact-heading text-center">Certifications</h1>
                <div className="mt-5">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="certificate-img">
                                <img src={d.img} alt="Failed to load image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    )
}