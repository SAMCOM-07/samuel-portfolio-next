'use client';

import Card from './Card';
import { Send, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <Card className="w-full max-w-lg mx-auto !p-6 sm:!p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-2">
          <Sparkles size={13} />
          <span>Send a Message</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Let&#39;s build something together
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Fill out the details below and I&#39;ll get back to you promptly.
        </p>
      </div>

      <form
        action="https://formsubmit.co/fe9ae58f3b329ce19129468760d89919"
        method="POST"
        className="space-y-4 text-xs sm:text-sm"
      >
        <input type="hidden" name="_template" value="table" />

        <div>
          <label htmlFor="contact-name" className="block font-medium text-foreground mb-1.5">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block font-medium text-foreground mb-1.5">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Tell me about your project, timeline, or idea..."
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group"
        >
          <span>Send Message</span>
          <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </form>
    </Card>
  );
};

export default Contact;
