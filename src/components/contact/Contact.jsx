import {useState } from "react";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };

  const formRef = useRef();
  const [done,setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mz3nn3j",
        "template_ywfj5qt",
        formRef.current,
        "TKq390zOSLdN2TgR2"
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
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="user-email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {done && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <div className="footer-work">
            
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    
  );
}
