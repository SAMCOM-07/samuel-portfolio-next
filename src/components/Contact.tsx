import React from "react";
import Card from "./Card";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Card>
        <section className="p-2">
          <h2 className="text-xl font-bold">Send a Message</h2>
          <p className="text-sm mt-2 text-muted-foreground">Fill out the form below and I&#39;ll get back to you as soon as possible.</p>
          <form action={"https://formsubmit.co/fe9ae58f3b329ce19129468760d89919"} method="POST" className="flex flex-col mt-6 gap-6 text-sm">
            <input type="hidden" name="_template" value="table" />
            <label className="flex flex-col gap-2">
              <span className="font-semibold">Full Name</span>
              <input type="text"
                name="name"
                placeholder="Enter full name"
                required
                className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-semibold">Email</span>
              <input type="email"
                name="email"
                placeholder="Enter email address"
                required
                className="border border-border bg-background outline-0 p-3 py-4 rounded-md text-foreground/50"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-semibold">Message</span>
              <textarea
                name="message"
                placeholder="Input your message here ..."
                required
                className="border border-border bg-background outline-0 p-3 rounded-md text-foreground/50 resize-none w-full h-32"
              />
            </label>
            <button aria-label="submit form" type="submit" className="flex items-center justify-center gap-4 bg-foreground/75 text-background w-full rounded-md p-4 font-bold cursor-pointer active:scale-95 transition-all duration-300 hover:text-foreground hover:bg-background/75 hover:ring-2 ring-ring"><span>Submit Form</span><Send size={16} /></button>
          </form>
        </section>
        <p className='text-sm my-2 text-muted-foreground text-center'>I&#39;ll get back to you within 24 hours</p>
      </Card>
    </>
  );
};

export default Contact;
