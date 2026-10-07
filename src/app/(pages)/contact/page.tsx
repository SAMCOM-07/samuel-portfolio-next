import Connect from '@/components/Connect';
import Contact from '@/components/Contact';
import { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Samuel Shonde — let's collaborate on your next web project or discuss opportunities in full-stack and frontend development.",
};

const ContactPage = () => {
  return (
    <div className="conpad pt-12 md:pt-16 pb-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <Mail size={13} />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Let&#39;s start a project together
        </h1>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed">
          Have a project in mind, an open role, or an interesting opportunity? Send a message and let&#39;s build something exceptional.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        <Connect />
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
