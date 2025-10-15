import React from "react";
import Connect from "./Connect";
import Card from "./Card";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative mt-22 mx-auto max-w-xl lg:max-w-6xl px-6">
      <h1 className="text-center">Get In Touch</h1>
      <p className="text-center mx-auto text-muted-foreground mt-4 max-w-xl">
        Have a project in mind? I&#39;d love to hear from you. Send me a message and
        let&#39;s discuss how we can bring your ideas to life.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 mt-16">
        {/* connect component */}
        <Connect />

        {/* contact section */}
        <Card>
          <section className="p-2">
            <h2 className="text-xl font-bold">Send a Message</h2>
            <p className="text-sm mt-2 text-muted-foreground">Fill out the form below and I&#39;ll get back to you as soon as possible.</p>
            <form className="flex flex-col mt-6 gap-6 text-sm">
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Full Name</span>
                <input type="text" placeholder="Enter full name" required
                  className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Email</span>
                <input type="text" placeholder="Enter email address" required
                  className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-semibold">Message</span>
                <textarea placeholder="Input your message here ..." required
                  className="border border-border bg-background outline-0 p-3 rounded-md text-foreground/50 resize-none w-full h-32"
                />
              </label>
              <button className="flex items-center justify-center gap-4 bg-foreground/75 text-background w-full rounded-md p-4 font-bold cursor-pointer active:scale-95 transition-all duration-300 hover:text-foreground hover:bg-background/75 hover:ring-2 ring-ring"><span>Submit Form</span><Send size={16} /></button>
            </form>
          </section>
          <p className='text-sm mt-2 text-muted-foreground text-center'>I&#39;ll get back to you within 24 hours</p>
        </Card>
      </div>

      {/* blur overlay colors */}
      <div className="blurpurple"></div>
      <div className="blurblue"></div>
    </div>
  );
};

export default Contact;
