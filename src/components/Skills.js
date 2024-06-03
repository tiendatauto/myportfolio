import Reacticon from "../assets/img/React-icon.png";
import HTML5 from "../assets/img/HTML5.png";
import CSS from "../assets/img/css.png";
import Carousel from "react-multi-carousel";
import Javascript from "../assets/img/Javascript.png";
import reduxpng from "../assets/img/reduxpng.png";
import typescript from "../assets/img/typescript.png";
import tailwind from "../assets/img/tailwind.png";
import reactQuery from "../assets/img/react-query.svg";
import nestJS from "../assets/img/nestjs-icon.png";
import expressJS from "../assets/img/expressjs-icon.png";
import mysql from "../assets/img/mysql-logo.png";
import mongo from "../assets/img/mongo-logo.png";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill " id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx animate__animated animate__zoomIn">
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item-wrap">
                  <div className="item">
                    <img src={Reacticon} alt="Image" />
                    <h5>ReactJS</h5>
                  </div>
                  <div className="item">
                    <img src={HTML5} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                </div>

                <div className="item-wrap">
                  <div className="item">
                    <img src={CSS} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={Javascript} alt="Image" />
                    <h5>Javascript</h5>
                  </div>
                </div>

                <div className="item-wrap">
                  <div className="item">
                    <img src={reduxpng} alt="Image" />
                    <h5>Redux</h5>
                  </div>
                  <div className="item">
                    <img src={typescript} alt="Image" />
                    <h5>TypeScript</h5>
                  </div>
                </div>

                <div className="item-wrap">
                  <div className="item">
                    <img src={tailwind} alt="Image" />
                    <h5>Tailwind</h5>
                  </div>
                  <div className="item">
                    <img src={reactQuery} alt="Image" />
                    <h5>React Query</h5>
                  </div>
                </div>

                <div className="item-wrap">
                  <div className="item">
                    <img src={nestJS} alt="Image" />
                    <h5>NestJS</h5>
                  </div>
                  <div className="item">
                    <img src={expressJS} alt="Image" />
                    <h5>ExpressJS</h5>
                  </div>
                </div>

                <div className="item-wrap">
                  <div className="item">
                    <img src={mysql} alt="Image" />
                    <h5>MySQL</h5>
                  </div>
                  <div className="item">
                    <img src={mongo} alt="Image" />
                    <h5>MongoDB</h5>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
