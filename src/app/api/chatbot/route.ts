import OpenAI from "openai";

// Comprehensive Local Knowledge Engine for instant, reliable fallback
function getLocalKnowledgeReply(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();

  // 1. Greetings & Pleasantries
  if (/^(hi|hello|hey|greetings|good day|howdy|sup|yo)\b/i.test(query)) {
    return "Hello! 👋 I'm Samuel's portfolio assistant. I can answer questions about Samuel's **engineering experience at Hoste**, **core tech stack** (Next.js, TypeScript, PostgreSQL), **featured projects** (like Omnishop & Task Manager), or help you **get in touch**!";
  }

  if (/how are you|how's it going|what's up/i.test(query)) {
    return "I'm running great and ready to help! How can I assist you with exploring Samuel's work, tech stack, or engineering background today?";
  }

  if (/who are you|what can you do|who made you/i.test(query)) {
    return "I am Samuel Shonde's interactive portfolio assistant! I can guide you through his work history, featured full-stack platforms, technical proficiencies, or connect you directly with Samuel.";
  }

  // 2. Experience & Current Role (Hoste, Freelance)
  if (/experience|work history|hoste|job|current role|company|where do you work|background/i.test(query)) {
    return `### 💼 Samuel's Professional Experience:

1. **Frontend Developer @ Hoste** (2024 — Present)
   - Architecting high-throughput admin dashboard interfaces with Next.js, React, and TypeScript.
   - Collaborating closely with backend and UI/UX design teams to integrate RESTful APIs and build accessible design systems.

2. **Freelance Full-Stack Developer** (2022 — Present)
   - Delivered 12+ custom full-stack web applications, e-commerce storefronts, and API backends for global clients.
   - End-to-end delivery across Next.js, Node.js, Tailwind CSS, PostgreSQL, and cloud deployments.

Check out the full breakdown on the [Experience Section](/about).`;
  }

  // 3. Tech Stack & Skills
  if (/stack|tech|technologies|skills|languages|frameworks|tools|typescript|react|next|node|postgres|sql/i.test(query)) {
    return `### ⚡ Core Technologies & Arsenal:

- **Frontend:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, HTML5/CSS3
- **Backend & APIs:** Node.js, Express.js, PostgreSQL, SQL, Firebase, REST APIs, Zod
- **DevOps & Tooling:** Git, GitHub Actions, Vercel, Vite, Shadcn UI, Postman

Samuel writes **100% strict TypeScript** with modular component architecture and sub-100ms response targets.`;
  }

  // 4. Featured Projects
  if (/omnishop/i.test(query)) {
    return `### 🛍️ Omnishop (E-Commerce Platform)
- **Stack:** Next.js, React, Firebase, Tailwind CSS, TypeScript, Cloudinary
- **Highlights:** Full product catalog, filtering & sorting, live search with autocomplete, persistent cart, wishlist, and admin inventory dashboard.
- [View Omnishop Case Study](/projects/1) | [Live Demo](https://omnishop-ng.vercel.app/)`;
  }

  if (/task manager|taskmanager/i.test(query)) {
    return `### 📋 Task Manager (PERN Stack + AI Insights)
- **Stack:** React, TypeScript, Express.js, PostgreSQL, Tailwind CSS, Node.js, OpenAI integration
- **Highlights:** JWT authentication, full CRUD operations, task analytics, AI-powered task prioritization & recommendations, light/dark themes.
- [View Task Manager Case Study](/projects/2) | [Live Demo](https://taskmanager-spa.vercel.app)`;
  }

  if (/dashboard|admin dashboard|shadcn/i.test(query)) {
    return `### 📊 Admin Dashboard (Enterprise Template)
- **Stack:** Next.js, React, Shadcn UI, Tailwind CSS, TypeScript
- **Highlights:** Modern responsive admin portal, data tables with sorting/filtering, analytics overview with statistical charts.
- [View Dashboard Case Study](/projects/3) | [Live Demo](https://shadcn-dashboard-hazel.vercel.app/)`;
  }

  if (/savora/i.test(query)) {
    return `### 🍽️ Savora (Restaurant & Reservation Experience)
- **Stack:** Next.js, React, Framer Motion, Tailwind CSS, TypeScript
- **Highlights:** Interactive dining menu, online table reservation flow, and fluid Framer Motion animations.
- [View Savora Case Study](/projects/4) | [Live Demo](https://savora-next.vercel.app/)`;
  }

  if (/project|portfolio|apps|work|built/i.test(query)) {
    return `### 🚀 Featured Production Projects:

1. **[Omnishop](/projects/1)** — Next.js + Firebase e-commerce platform with persistent cart & admin panel.
2. **[Task Manager](/projects/2)** — PERN stack dashboard with AI task prioritization & JWT auth.
3. **[Admin Dashboard](/projects/3)** — Next.js + Shadcn UI enterprise data dashboard.
4. **[Savora](/projects/4)** — Modern restaurant & table booking platform.
5. **[GitHub Profile Checker](/projects/5)** — Analytics platform with live GitHub API data visualizations.

Explore all 12 projects in the [Projects Archive](/projects)!`;
  }

  // 5. Education & Credentials
  if (/education|degree|school|university|eksu|college|study|student/i.test(query)) {
    return `### 🎓 Education & Credentials:

- **Degree:** Bachelor of Engineering (B.Eng) in Computer Engineering
- **Institution:** Ekiti State University (EKSU), Ado-Ekiti, Nigeria
- **Period:** 2021 — 2026 (500 Level)
- Focus areas include software engineering, data structures, algorithms, system architecture, and digital electronics.`;
  }

  // 6. Contact, Hiring, Availability, Rates
  if (/hire|contact|email|phone|whatsapp|reach|call|rate|freelance|available|job|interview/i.test(query)) {
    return `### 📬 Get in Touch with Samuel:

- **Email:** [shondesamuel07@gmail.com](mailto:shondesamuel07@gmail.com)
- **LinkedIn:** [linkedin.com/in/samuelshonde](https://www.linkedin.com/in/samuelshonde)
- **GitHub:** [github.com/SAMCOM-07](https://github.com/SAMCOM-07)
- **WhatsApp:** [+234 906 187 3560](https://wa.me/+2349061873560)
- **Twitter / X:** [@SammyShowed](https://x.com/SammyShowed)

Samuel is currently **open to Full-Time Software Engineering roles, contract engagements, and technical collaborations**. Response time SLA is usually under 24 hours!`;
  }

  // 7. Resume & CV
  if (/resume|cv|download/i.test(query)) {
    return `📄 You can download Samuel's official resume directly here:
[Download Samuel Shonde Resume (PDF)](/Shonde-Samuel-Ifeoluwa-Resume.pdf)`;
  }

  // 8. Location & Timezone
  if (/location|where are you|where does samuel live|country|nigeria|lagos/i.test(query)) {
    return "Samuel is based in **Lagos, Nigeria (WAT / UTC+1)** and collaborates smoothly with remote teams worldwide across US, European, and African timezones.";
  }

  // Default fallback with helpful navigation prompts
  return `I'm here to help! You can ask me about:
- **"What's Samuel's tech stack?"**
- **"Tell me about Samuel's experience at Hoste"**
- **"Show me featured projects like Omnishop or Task Manager"**
- **"How can I contact or hire Samuel?"**

Or jump directly to the [Projects page](/projects) or [Contact page](/contact)!`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message || "";
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Return intelligent local knowledge engine reply immediately
      const reply = getLocalKnowledgeReply(message);
      return Response.json({ reply });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: process.env.OPENROUTER_API_KEY ? "https://openrouter.ai/api/v1" : undefined,
    });

    const completion = await openai.chat.completions.create({
      model: process.env.OPENROUTER_API_KEY ? "openai/gpt-4o-mini" : "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Samuel Shonde's elite portfolio AI assistant. You speak authoritatively, warmly, concisely, and with engineering precision.

Knowledge Base:
- Name: Samuel Shonde (Full-Stack Software Engineer)
- Current Role: Frontend Developer at Hoste (building enterprise admin dashboards, RESTful API integrations, design systems).
- Core Stack: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, SQL, Firebase, Framer Motion.
- Education: Bachelor of Engineering (B.Eng) in Computer Engineering at Ekiti State University (EKSU, 500 Level).
- Top Projects:
  1. Omnishop: Next.js + Firebase e-commerce platform with live search, cart, wishlist, and admin panel.
  2. Task Manager: PERN stack + AI insights dashboard with JWT authentication.
  3. Admin Dashboard: Next.js + Shadcn UI enterprise data table interface.
  4. Savora: Restaurant menu & reservation system with Framer Motion animations.
  5. GitHub Profile Checker: Analytics tool with GitHub API & data visualizations.
- Contact Channels:
  - Email: shondesamuel07@gmail.com
  - LinkedIn: https://www.linkedin.com/in/samuelshonde
  - GitHub: https://github.com/SAMCOM-07
  - WhatsApp: +234 906 187 3560
  - Twitter (X): https://x.com/SammyShowed
- Availability: Available for full-time software engineering roles, high-impact contracts, and freelance projects globally (based in Lagos, Nigeria · UTC+1).

Formatting guidelines:
- Use clean Markdown with bolding and bullet points.
- When referencing pages, use markdown links like [Projects](/projects), [Contact](/contact), [About](/about), [Resume](/Shonde-Samuel-Ifeoluwa-Resume.pdf).
- Keep responses concise (2-4 paragraphs max).
`,
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content || getLocalKnowledgeReply(message);
    return Response.json({ reply });
  } catch (err) {
    console.error("Chatbot API error, falling back to local engine:", err);
    const body = await req.json().catch(() => ({ message: "" }));
    const fallbackReply = getLocalKnowledgeReply(body.message || "");
    return Response.json({ reply: fallbackReply });
  }
}
