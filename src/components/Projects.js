import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/project-img12.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectsReact = [
    {
      title: 'Shopee Clone',
      description: 'React Js,Tailwind, lodash, React Hook Form, Redux Thunk',
      imgUrl: projImg1,
      urlPrj: 'https://shopeeproject-datnht.vercel.app/',
    },
    {
      title: 'ZingMp3 Clone',
      description: 'React Js,Tailwind, Redux Toolkit, React Slider',
      imgUrl: projImg2,
      urlPrj: 'https://zingmp3-datnht.vercel.app/',
    },
    {
      title: 'Movie Booking App',
      description: 'React JS, Tailwind, Redux Thunk',
      imgUrl: projImg3,
      urlPrj: 'https://bookingmoive-datnht-tiendatauto999-gmailcom.vercel.app/',
    },
    {
      title: 'Jira App',
      description: 'React JS, Redux Saga, Boostrap',
      imgUrl: projImg4,
      urlPrj: 'https://jira-datnht.vercel.app/',
    },
    {
      title: 'User Management',
      description: 'ReactJS',
      imgUrl: projImg5,
      urlPrj: 'https://usermanagement-datnht.vercel.app/',
    },
    {
      title: 'Game Oẳn Tù Xì',
      description: 'React JS,Boostrap',
      imgUrl: projImg6,
      urlPrj: 'https://gameoantuxi-datnht.vercel.app/',
    },
  ];

  const projectsJS = [
    {
      title: 'Movie Web',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg7,
      urlPrj: 'https://tiendatauto.github.io/movieweb-vanilla-datnht/',
    },
    {
      title: 'Instruction Academy',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg8,
      urlPrj: 'https://tiendatauto.github.io/instruction-education-datnht/',
    },
    {
      title: 'Todo List',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg9,
      urlPrj: 'https://tiendatauto.github.io/todolist-vanillajs-datnht/',
    },
    {
      title: 'Testing Online',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg10,
      urlPrj: 'https://tiendatauto.github.io/testingonline-datnht/',
    },
    {
      title: 'Tính Cước Uber',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg11,
      urlPrj: 'https://tiendatauto.github.io/tinhtienuber-datnht/',
    },
    {
      title: 'App thử kính',
      description: 'HTML, CSS, Javascript',
      imgUrl: projImg12,
      urlPrj: 'https://tiendatauto.github.io/changeglasses-datnht/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    !isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      style={{ cursor: 'pointer' }}
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          HTML & CSS & Javascript
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsReact.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsJS.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
