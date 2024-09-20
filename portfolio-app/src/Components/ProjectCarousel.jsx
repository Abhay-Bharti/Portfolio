import { Carousel } from "react-bootstrap";

export default function ProjectCarousel({ images }) {
    return (
        <>
            <Carousel>
                {
                    images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <div className="img-wrap">
                                <img src={image} alt="Project 1" />
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </>
    )
}