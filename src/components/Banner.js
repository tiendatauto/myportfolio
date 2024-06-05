import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import headerImg2 from "../assets/img/header-img2.jpg";
import cvPdf from "../assets/file/datNHTCV.pdf";
import { ArrowDownCircle, ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Tien Dat"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! My name is `}
                <div
                  style={{ fontSize: "60px" }}
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </div>
              </h1>
              <div className="sp-content">
                <h2 className="frame-1">I'm Front-end Developer</h2>
              </div>

              <p>
                With a passion and having essential knowledge in programming
                languages combine with front-end developer skills, I am seeking
                for a front-end developer position .I would like to be a part of
                company, i will contribute to development of company
              </p>
              <a href={cvPdf} download="NguyenHoangTienDat_CV.pdf">
                <button style={{ backgroundColor: "red", padding: "20px" }}>
                  Download my resume <ArrowDownCircle size={25} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="proflehinhanh">
              <div className="animate__animated animate__zoomIn">
                <img src={headerImg2} alt="Header Img" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
