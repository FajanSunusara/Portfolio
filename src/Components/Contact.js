import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import myImg from "../assets/Contact1.png";

const Contact = () => {
  return (
    <section className="contact " id="connect">
      <h1 name="Contact Me" className=" d-flex justify-content-center">
        Contact Me
      </h1>

      <div className="container d-flex justify-content-around">
        <img src={myImg} alt="Contact Us" className="m-5"></img>
        <form
          role="form"
          style={{ height: "30rem", backgroundColor: "black",border:"3px solid white",borderRadius:"8%" }}
          className="d-block aling-item-center   form-control form-control-lg col-md-6   m-5 py-3 px-5"
        >
          <h3
            name="Email Me"
            className=" d-flex justify-content-center "
            style={{ color: "white" }}
          >
            Email Me
          </h3>
          <label
            for="exampleFormControlTextarea1"
            className="form-label"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Email
          </label>
          <div className="mb-3 ">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              aria-label="Email address"
              placeholder="name@example.com"
            />
          </div>
          <label
            for="exampleFormControlTextarea1"
            className="form-label"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Name
          </label>
          <div className="mb-3 ">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              aria-label="Email address"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label
              for="exampleFormControlTextarea1"
              className="form-label "
              style={{ color: "white", fontWeight: "bold" }}
            >
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              aria-label="Message"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary rounded"style={{ color: "Black", fontWeight: "bold" }}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
