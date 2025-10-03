import React from "react";
import Connect from "./Connect";

const Contact = () => {
  return (
    <div id="contact" className="relative mt-22 max-w-lg mx-auto">
      <h1 className="text-center">Get In Touch</h1>
      <p className="text-center mx-auto text-muted-foreground mt-4 max-w-xl">
        Have a project in mind? I'd love to hear from you. Send me a message and
        let's discuss how we can bring your ideas to life.
      </p>
      <div>
        <Connect />
      </div>
      <div className="blurpurple"></div>
      <div className="blurblue"></div>
    </div>
  );
};

export default Contact;
