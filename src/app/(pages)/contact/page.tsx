import Connect from '@/components/Connect';
import Contact from '@/components/Contact';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Samuel Shonde — let's collaborate on your next web project or discuss opportunities in frontend development.",
};



const ContactPage = () => {
  return (
    <div className="relative pt-16 mb-22 mx-auto max-w-xl lg:max-w-6xl px-6">
      <h1 className="text-center">Get In Touch</h1>
      <p className="text-center mx-auto text-muted-foreground mt-4 max-w-xl">
        Have a project in mind? I&#39;d love to hear from you. Send me a message and
        let&#39;s discuss how we can bring your ideas to life.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 mt-22">
        {/* connect component */}
        <Connect />
        <Contact />
      </div>

      {/* blur overlay colors */}
      <div className="blurpurple"></div>
      <div className="blurblue"></div>
    </div>
  );
}

export default ContactPage
