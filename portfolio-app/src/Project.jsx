import { Container } from 'react-bootstrap';
import img1 from './assets/Project1.png';
import img2 from './assets/Project2.png';
import img4 from './assets/Project4.png';

export default function Projects() {

    return (
        <>
            <Container id='#Project'>
                <h1 className='text-center Contact-heading'>My Projects </h1>
                <div className="d-flex justify-content-around project-box">
                    <div className="img-wrap">
                        <img src={img1} alt="Project 1" />
                    </div>
                    <div className="project-info">
                        <h1>Project Name</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate adipisci maxime cum quo optio recusandae, explicabo in amet? Iure minus officia rem velit assumenda dolore magnam. Assumenda ullam, minus nisi temporibus ipsam quaerat officia rerum voluptates unde in aut. Fugit.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-around project-box">
                    <div className="project-info">
                        <h1>Project Name</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus vitae obcaecati consequatur sed molestias cum quam neque eum eius dicta necessitatibus, aut tempora laudantium impedit labore id sit? Sint voluptas quia eos, atque placeat neque sed reprehenderit tempora officia dolores corrupti, id eaque, in culpa eum delectus officiis eligendi.
                        </p>
                    </div>
                    <div className="img-wrap">
                        <img src={img2} alt="Project 2" />
                    </div>
                </div>
                <div className="d-flex justify-content-around project-box">
                    <div className="img-wrap">
                        <img src={img2} alt="Project3" />
                    </div>
                    <div className="project-info">                        <h1>Project Name</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi non sapiente distinctio mollitia adipisci culpa fuga, dignissimos odit sed incidunt labore unde, doloribus ipsa repellendus pariatur repudiandae libero? Officiis commodi tenetur ad perspiciatis fugiat voluptas asperiores quibusdam harum suscipit fugit, sequi repellat neque ipsam maiores enim. Aut, dolor dolorem!
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-around project-box">
                    <div className="project-info">                        <h1>Project Name</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil sequi deserunt quas voluptatum natus recusandae corporis. Reiciendis autem ipsa alias nobis in nisi vitae, doloribus accusantium repellendus, odit dicta dignissimos corrupti placeat architecto, ratione corporis asperiores ab illo explicabo porro libero inventore eos. Rem eaque consectetur sint pariatur ipsum!
                        </p>
                    </div>
                    <div className="img-wrap">
                        <img src={img4} alt="Project 4" />
                    </div>
                </div>

            </Container>
        </>
    )
}