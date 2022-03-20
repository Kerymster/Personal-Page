import "./Contact.css";
import { logos } from "../svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kerymster",
        "template_kerymster",
        formRef.current,
        "m_ixCbnOrwY0p3Y3Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let me hear about you & your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              {logos.phone}
              +90 505 266 8162
            </div>
            <div className="c-info-item">
              {logos.mail}
              kerimyilmaz5270@gmail.com
            </div>
            <div className="c-info-item">
              {logos.location}
              Izmir / TURKEY
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch.</b> Always available for new adventures if the
            right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
      <div className="c-footer">
        <div className="c-social">
          <div className="c-social-item">
            <a
              href="https://www.instagram.com/kerymster/"
              target="_blank"
              rel="noreferrer"
            >
              {logos.instagram}
            </a>
          </div>
          <div className="c-social-item">
            <a
              href="https://github.com/Kerymster"
              target="_blank"
              rel="noreferrer"
            >
              {logos.github}
            </a>
          </div>
          <div className="c-social-item">
            <a
              href="https://www.linkedin.com/in/kerim-y%C4%B1lmaz-tr61/"
              target="_blank"
              rel="noreferrer"
            >
              {logos.linkedin}
            </a>
          </div>
        </div>
        <div>
          <h5> &copy; Kerim YILMAZ - 2019</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
