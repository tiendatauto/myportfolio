import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function FormContact() {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // start handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_h1inakw",
        "template_2ukg229",
        form.current,
        "uAj0nLCurTaZgFEuL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // e.target.reset()

    // let response = await fetch('http://localhost:5000/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    setButtonText("Send");
    // let result = await response.json();
    setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully' });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: 'Something went wrong, please try again later.',
    //   });
    // }
  };

  // end handle submit
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Row>
        <Col size={12} sm={12} className="px-1">
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Your Name"
            name="user_name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
        </Col>

        <Col size={12} sm={6} className="px-1">
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            name="user_email"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
        </Col>
        <Col size={12} sm={6} className="px-1">
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            name="user_phone"
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
        </Col>
        <Col size={12} className="px-1">
          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            name="message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
          <button type="submit">
            <span>{buttonText}</span>
          </button>
        </Col>
        {status.message && (
          <Col>
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </Col>
        )}
      </Row>
    </form>
  );
}
