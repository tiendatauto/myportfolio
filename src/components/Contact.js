import { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import avarta from '../assets/img/avarta.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FormContact from './FormContact';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.',
      });
    }
  };

  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img
              className="animate__animated animate__zoomIn"
              src={avarta}
              alt="Contact Us"
            />
          </Col>

          <Col size={12} md={6}>
            <div className="animate__animated animate__zoomIn">
              <h2>About</h2>

              <div style={{ fontSize: '20px' }}>
                <p>
                  I found my passion about developing programing since I was a
                  student.
                </p>
                <p>My experience is mostly Front-End Developer</p>
                <p>
                  I am in the process of learning and gaining experience to
                  become a fullstack developer in the future.
                </p>
                <p>
                  In addition, I also know how to design and edit videos.
                  Besides, my hobbies are reading, listening to music, going to
                  the gym and playing soccer on weekends.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
