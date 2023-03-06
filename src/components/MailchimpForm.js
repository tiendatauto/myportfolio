import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';
import { Col, Row, Alert } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/github-icon.png';

import FormContact from './FormContact';
import 'animate.css';
export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          // <Newsletter
          //   status={status}
          //   message={message}
          //   onValidated={formData => subscribe(formData)}
          //   />
          <Col lg={12}>
            <div
              className="newsletter-bx animate__animated animate__zoomIn"
              id="connect"
            >
              <Row>
                <Col lg={12} md={12}>
                  <h3>Contact Me via</h3>
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/datnht/">
                      <img src={navIcon1} alt="" />
                    </a>
                    <a href="https://www.facebook.com/tiendatauto999">
                      <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://github.com/tiendatauto">
                      <img src={navIcon3} alt="" />
                    </a>
                  </div>
                </Col>

                <Col lg={12} md={6}>
                  <section className="contact1" id="connect">
                    <FormContact />
                  </section>
                </Col>
              </Row>
            </div>
          </Col>
        )}
      />
      {/* <section className="contact1" id="connect">
        <FormContact />
      </section> */}
    </>
  );
};
