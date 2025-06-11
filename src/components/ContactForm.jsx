import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wz9nnr8", // service id
        "template_i11n06c", // template id
        formRef.current,
        "-PamparDc_rQeIqTx" // public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <Form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-light text-dark p-5 border shadow"
        style={{ borderRadius: "28px" }}
      >
        <div className="row">
          <Form.Group className="mb-3 col-lg-6" controlId="firstName">
            <Form.Label className="w-100 text-start text-capitalize">
              Full name
            </Form.Label>
            <Form.Control type="text" name="user_name" required />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="phoneNumber">
            <Form.Label className="w-100 text-start text-capitalize">
              Phone Number
            </Form.Label>
            <Form.Control
              type="tel"
              name="user_phone"
              placeholder="+91"
              required
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label className="w-100 text-start text-capitalize">
            Email address
          </Form.Label>
          <Form.Control type="email" name="user_email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textarea">
          <Form.Label className="w-100 text-start">Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <div className="text-center mt-3">
          <Button variant="dark" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default ContactForm;
