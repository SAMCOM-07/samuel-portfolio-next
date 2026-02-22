import React from "react";
import Card from "./Card";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Card>
        <section className="p-2" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-bold">Send a Message</h2>
          <p className="text-sm mt-2 text-muted-foreground">Fill out the form below and I&#39;ll get back to you as soon as possible.</p>
          <form action={"https://formsubmit.co/fe9ae58f3b329ce19129468760d89919"} method="POST" className="flex flex-col mt-6 gap-6 text-sm" noValidate>
            <input type="hidden" name="_template" value="table" />
            <label htmlFor="name" className="flex flex-col gap-2">
              <span className="font-semibold">Full Name <span className="text-red-500" aria-label="required">*</span></span>
              <input 
                type="text"
                id="name"
                name="name"
                placeholder="Enter full name"
                required
                autoComplete="name"
                aria-required="true"
                className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="font-semibold">Email <span className="text-red-500" aria-label="required">*</span></span>
              <input 
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                required
                autoComplete="email"
                aria-required="true"
                className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
              />
            </label>
            <label htmlFor="message" className="flex flex-col gap-2">
              <span className="font-semibold">Message <span className="text-red-500" aria-label="required">*</span></span>
              <textarea
                id="message"
                name="message"
                placeholder="Input your message here ..."
                required
                aria-required="true"
                className="border border-border bg-background outline-0 p-3 rounded-md text-foreground/50 resize-none w-full h-32 focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
              />
            </label>
            <button 
              type="submit" 
              aria-label="Submit contact form"
              className="flex items-center justify-center gap-4 bg-foreground/75 text-background w-full rounded-md p-4 font-bold cursor-pointer active:scale-95 transition-all duration-300 hover:text-foreground hover:bg-background/75 hover:ring-2 ring-ring focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <span>Submit Form</span>
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </section>
        <p className='text-sm my-2 text-muted-foreground text-center'>I&#39;ll get back to you within 24 hours</p>
      </Card>
    </>
  );
};

export default Contact;
