import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhtp4c8",
        "template_wwinjet",
        formRef.current,
        "user_piSXcqx2Zf6tWbXHR4EFF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="contact" id="contact">
      <div className="c_left">
        <div className="left_container">
          <h3 className="address_title">
            Please Contact me and discuss About my projects
          </h3>
          <div className="address_list">
            <div className="item">
              <i className="fa fa-user addr">: </i>
              <h4>+905428583613</h4>
            </div>
            <div className="item">
              <i className="fa fa-envelope addr"> :</i>
              <h4>weaba123abdu@gmail.com</h4>
            </div>
            <div className="item">
              <i class="bi bi-geo-alt"></i> <h4>haspolat, Nicosia</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="c_right">
        <div className="right_container">
          <p className="form_title">
            <b>what's your story?</b> Get in touch Always available for the
            right project comes along me
          </p>

          <form ref={formRef} className="form_control" onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="user_name" />
            <input type="text" placeholder="subject" name="user_subject" />
            <input type="email" placeholder="email" name="user_email" />
            <textarea
              name="message"
              id=""
              cols="10"
              rows="10"
              placeholder="message"
              style={{ height: "200px" }}
            ></textarea>
            <button>Submit</button>
            {success && (
              <h3 className="alert alert-success" style={{ fontSize: "16px" }}>
                thank you for sending message
              </h3>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
