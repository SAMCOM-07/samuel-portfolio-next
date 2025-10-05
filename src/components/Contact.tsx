import React from "react";
import Connect from "./Connect";
import Card from "./Card";

const Contact = () => {
  return (
    <div id="contact" className="relative mt-22 mx-auto max-w-xl lg:max-w-6xl px-6">
      <h1 className="text-center">Get In Touch</h1>
      <p className="text-center mx-auto text-muted-foreground mt-4 max-w-xl">
        Have a project in mind? I'd love to hear from you. Send me a message and
        let's discuss how we can bring your ideas to life.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 mt-16">
        <Connect />
        <Card>
          <form className="flex flex-col gap-2 p-4">
            <input type="text" className="border " />
            <input type="text" className="border flex-1" />
            <input type="text" className="border flex-1" />
          </form>
        </Card>
      </div>
      <div className="blurpurple"></div>
      <div className="blurblue"></div>
    </div>
  );
};

export default Contact;
