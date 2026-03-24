// tech stacks

export const stackData = [
  {
    name: "Next.js",
    img: "/stack-images/next-logo.png",
    category: "frontend",
    documentation: "https://nextjs.org/docs",
  },
  {
    name: "React.js",
    img: "/stack-images/react-logo.png",
    category: "frontend",
    documentation: "https://react.dev",
  },
  {
    name: "Tailwind CSS",
    img: "/stack-images/tailwind-logo.png",
    category: "frontend",
    documentation: "https://tailwindcss.com/docs",
  },
  {
    name: "HTML5",
    img: "/stack-images/html-logo.png",
    category: "frontend",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    img: "/stack-images/css-logo.png",
    category: "frontend",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    img: "/stack-images/javascript-logo.png",
    category: "frontend",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    img: "/stack-images/typescript-logo.png",
    category: "frontend",
    documentation: "https://www.typescriptlang.org/docs",
  },
  {
    name: "Node.js",
    img: "/stack-images/node-logo.png",
    category: "backend",
    documentation: "https://nodejs.org/docs/latest/api",
  },
  {
    name: "Firebase",
    img: "/stack-images/firebase-logo.png",
    category: "backend",
    documentation: "https://firebase.google.com/docs",
  },
  {
    name: "Cloudinary",
    img: "/stack-images/cloudinary-logo.png",
    category: "backend",
    documentation: "https://cloudinary.com/documentation",
  },
  {
    name: "Git",
    img: "/stack-images/git-logo.png",
    category: "tools",
    documentation: "https://git-scm.com/docs",
  },
  {
    name: "GitHub",
    img: "/stack-images/github-logo.png",
    category: "tools",
    documentation: "https://docs.github.com",
  },
  {
    name: "Shadcn/ui",
    img: "/stack-images/shadcn-logo.png",
    category: "frontend",
    documentation: "https://ui.shadcn.com",
  },
  {
    name: "Vite",
    img: "/stack-images/vite-logo.png",
    category: "tools",
    documentation: "https://vite.dev",
  },
];

// projects data
export const projectsData = [
  {
    id: 1,
    name: "Omnishop",
    description:
      "An ecommerce website template that provides a seamless shopping experience. It features product listings, filtering & sorting, a shopping cart, a checkout process, wishlist and order history. Built with Next.js and Tailwind CSS for optimal performance and responsiveness.",
    img: ["/projects-images/omnishop.png"],
    githubUrl: "https://github.com/SAMCOM-07/omnishop",
    liveUrl: "https://omnishop-ng.vercel.app/",
    status: "In Progress 📍",
    stacks: [
      {
        name: "Next.js",
        img: "/stack-images/next-logo.png",
      },
      {
        name: "React.js",
        img: "/stack-images/react-logo.png",
      },
      {
        name: "Firebase",
        img: "/stack-images/firebase-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
      {
        name: "TypeScript",
        img: "/stack-images/typescript-logo.png",
      },
      {
        name: "Cloudinary",
        img: "/stack-images/cloudinary-logo.png",
      },
    ],
    details: {
      introduction:
        "Omnishop is a modern, full-featured e-commerce platform designed to provide users with an intuitive and seamless online shopping experience. Built with cutting-edge technologies like Next.js and Firebase, the platform offers a robust foundation for both customers and administrators.",
      purpose:
        "The primary goal of Omnishop is to create a production-ready e-commerce template that businesses can customize and deploy quickly. It addresses the need for a performant, scalable, and user-friendly shopping platform with comprehensive features.",
      features: [
        "Product catalog with advanced filtering and sorting capabilities",
        "Real-time search functionality with autocomplete",
        "Shopping cart with persistent storage",
        "Secure checkout process with multiple payment options",
        "User wishlist and saved items",
        "Order history and tracking",
        "User authentication and profile management",
        "Admin dashboard for inventory management",
        "Image optimization with Cloudinary integration",
        "Responsive design for all devices",
      ],
      motivation:
        "I built Omnishop to create a modern alternative to traditional e-commerce platforms. The inspiration came from the need for a customizable, developer-friendly solution that combines the best practices of modern web development with a focus on user experience and performance.",
      howToContribute:
        "Contributions are welcome! To contribute:\n\n1. Fork the repository on GitHub\n2. Create a feature branch: `git checkout -b feature/your-feature-name`\n3. Make your changes and commit: `git commit -m 'Add some feature'`\n4. Push to the branch: `git push origin feature/your-feature-name`\n5. Submit a Pull Request\n\nPlease ensure your code follows the existing style and includes appropriate tests.",
    },
  },
  {
    id: 2,
    name: "Admin Dashboard",
    description:
      "This is a modern admin dashboard template built using Next.js and Shadcn UI. It features a sleek design, responsive layout, and a variety of components to help you get started quickly with your admin panel needs.",
    img: [
      "/projects-images/shadcn-dashboard-lightmode.avif",
      "/projects-images/shadcn-dashboard-dark-mode.avif",
    ],
    githubUrl: "https://github.com/SAMCOM-07/shadcn-dashboard",
    liveUrl: "https://shadcn-dashboard-hazel.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "Next.js",
        img: "/stack-images/next-logo.png",
      },
      {
        name: "React.js",
        img: "/stack-images/react-logo.png",
      },
      {
        name: "Shadcn UI",
        img: "/stack-images/shadcn-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
      {
        name: "TypeScript",
        img: "/stack-images/typescript-logo.png",
      },
    ],
    details: {
      introduction:
        "The Admin Dashboard is a professional, production-ready template designed for enterprise applications. It provides a comprehensive set of pre-built components and layouts that serve as a solid foundation for building sophisticated admin interfaces.",
      purpose:
        "This project aims to reduce development time for admin panel creation by providing a fully functional, customizable dashboard template with modern design patterns and best practices built-in.",
      features: [
        "Responsive dashboard layout with sidebar navigation",
        "Pre-built data table components with sorting and filtering",
        "Analytics overview with charts and statistics",
        "User management interface",
        "Dark/Light theme support",
        "Form components and validation",
        "Modal and dialog components",
        "Alert and notification components",
        "Authentication pages (login, signup)",
        "Professional UI components library",
      ],
      motivation:
        "I created this dashboard template to showcase best practices in modern dashboard design. It serves as an excellent starting point for developers building admin interfaces and demonstrates proper component organization, state management, and styling patterns.",
      howToContribute:
        "We appreciate contributions! Here's how to get started:\n\n1. Fork the repository\n2. Clone your fork locally\n3. Create a feature branch\n4. Make your improvements\n5. Test thoroughly\n6. Submit a Pull Request with a clear description of changes\n\nFor major changes, please open an issue first to discuss proposed changes.",
    },
  },
  {
    id: 3,
    name: "Music Desk",
    description:
      "A music streaming web application that allows users to filter and play their favorite songs. Built with React and Tailwind CSS, it offers a sleek and responsive design for an optimal listening experience.",
    img: [
      "/projects-images/music-app-lightmode.avif",
      "/projects-images/music-app-darkmode.avif",
    ],
    githubUrl: "https://github.com/SAMCOM-07/music-app",
    liveUrl: "https://music-app-zeta-ebon.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "React.js",
        img: "/stack-images/react-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
    ],
    details: {
      introduction:
        "Music Desk is a lightweight, user-friendly music streaming application that delivers an intuitive interface for discovering and playing music. With its focus on simplicity and elegance, it provides an excellent listening experience across all devices.",
      purpose:
        "The goal of Music Desk is to demonstrate a clean, functional music player application while maintaining a minimalist design philosophy. It showcases core web audio API capabilities and modern React patterns.",
      features: [
        "Browse and search music library",
        "Advanced filtering by artist, genre, and album",
        "Play, pause, and skip controls",
        "Volume control and progress bar",
        "Playlist creation and management",
        "Responsive mobile-friendly design",
        "Dark and light theme support",
        "Shuffle and repeat functionality",
        "Currently playing display",
        "Smooth transitions and animations",
      ],
      motivation:
        "Music Desk was created to explore music application design patterns and demonstrate how to build engaging media interfaces. It combines functional audio playback with an aesthetically pleasing user interface.",
      howToContribute:
        "Interested in helping? Follow these steps:\n\n1. Fork and clone the repository\n2. Install dependencies: `npm install`\n3. Create a feature branch for your work\n4. Make your changes with clear commit messages\n5. Ensure the app runs without errors\n6. Push your changes and create a Pull Request",
    },
  },
  {
    id: 4,
    name: "Anon Website",
    description:
      "A landing page for Anon, a fictional product or service. The design is clean and modern, focusing on user engagement and conversion.",
    img: ["/projects-images/anon.avif"],
    githubUrl: "https://github.com/SAMCOM-07/anon",
    liveUrl: "https://anon-black.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "HTML5",
        img: "/stack-images/html-logo.png",
      },
      {
        name: "TailwinCss",
        img: "/stack-images/tailwind-logo.png",
      },
    ],
    details: {
      introduction:
        "Anon is a sleek, modern landing page designed for a fictional privacy-focused product. It demonstrates professional web design principles with a focus on conversion optimization and user engagement.",
      purpose:
        "This project showcases landing page best practices, including compelling copy, strategic call-to-action placement, and responsive design. It serves as a portfolio piece demonstrating web design skills.",
      features: [
        "Hero section with compelling headline",
        "Product features showcase",
        "Pricing plans section",
        "Testimonials from users",
        "Call-to-action buttons",
        "Responsive navigation",
        "Smooth scrolling",
        "Contact form",
        "Footer with links",
        "Mobile optimized layout",
      ],
      motivation:
        "I designed Anon to practice creating high-converting landing pages. The project emphasizes visual hierarchy, user experience, and the principles of effective web design in a clean, modern aesthetic.",
      howToContribute:
        "Contributions to improve this landing page are welcome:\n\n1. Fork the repository\n2. Make improvements or fixes\n3. Test your changes across devices\n4. Submit a Pull Request with details of improvements",
    },
  },
  {
    id: 5,
    name: "Product Filtering",
    description:
      "A product filtering web application that allows users to filter products based on various criteria such as category, with cart functionalities. Built with HTML, CSS, and JavaScript, it provides a user-friendly interface for an enhanced shopping experience.",
    img: ["/projects-images/product-filter.avif"],
    githubUrl: "https://github.com/SAMCOM-07/product-filtering",
    liveUrl: "https://product-filtering-red.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "HTML5",
        img: "/stack-images/html-logo.png",
      },
      {
        name: "Css3",
        img: "/stack-images/css-logo.png",
      },
      {
        name: "JavaScript",
        img: "/stack-images/javascript-logo.png",
      },
    ],
    details: {
      introduction:
        "Product Filtering is a vanilla JavaScript application that demonstrates dynamic product filtering and cart management. Built with pure HTML, CSS, and JavaScript, it shows how powerful vanilla web technologies can be without frameworks.",
      purpose:
        "This project showcases core JavaScript skills including DOM manipulation, event handling, and state management. It serves as a great learning resource for understanding client-side application logic.",
      features: [
        "Filter products by category",
        "Price range filtering",
        "Sort products by various criteria",
        "Add/remove items from shopping cart",
        "Persistent cart storage",
        "Real-time cart updates",
        "Product detail view",
        "Search functionality",
        "Responsive grid layout",
        "Smooth animations and transitions",
      ],
      motivation:
        "I created this project to master vanilla JavaScript while building a practical application. It demonstrates that complex functionality doesn't always require heavy frameworks and helps developers understand fundamental web technologies.",
      howToContribute:
        "To contribute to this project:\n\n1. Clone the repository\n2. Create a feature branch\n3. Make your improvements\n4. Test functionality across browsers\n5. Submit a Pull Request with a clear description",
    },
  },
  {
    id: 6,
    name: "User Record",
    description:
      "A user record management application that allows users to add, view, edit, and delete user records. Built with React.js and Tailwind CSS, it offers a clean and intuitive interface for managing user information efficiently.",
    img: ["/projects-images/user-record.avif"],
    githubUrl: "https://github.com/SAMCOM-07/user-record",
    liveUrl: "https://user-record-amber.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "React.js",
        img: "/stack-images/react-logo.png",
      },
      {
        name: "MockApi",
        img: "/stack-images/javascript-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
    ],
    details: {
      introduction:
        "User Record is a full-featured CRUD (Create, Read, Update, Delete) application built with React. It integrates with MockAPI to demonstrate working with external data sources and demonstrates fundamental application architecture patterns.",
      purpose:
        "This project demonstrates core React concepts including state management, component lifecycle, API integration, and form handling. It serves as an excellent educational resource for developers learning React.",
      features: [
        "View all user records in a table",
        "Add new user records with form validation",
        "Edit existing user information",
        "Delete user records with confirmation",
        "Search and filter users",
        "Sort users by different fields",
        "Display user details in a modal",
        "API integration with MockAPI",
        "Error handling and loading states",
        "Responsive table design",
      ],
      motivation:
        "I built User Record to practice React fundamentals and API integration. The project demonstrates how to build a complete CRUD application with React, managing data flow, and providing a polished user experience.",
      howToContribute:
        "Contributions are welcome! Here's how:\n\n1. Fork the repository\n2. Install dependencies: `npm install`\n3. Create a feature branch\n4. Make your improvements\n5. Test thoroughly\n6. Submit a Pull Request with description of changes",
    },
  },
  {
    id: 7,
    name: "Browser Extension",
    description:
      "A browser extension that enhances user productivity by providing quick access to useful tools and features. Built with HTML, CSS, and JavaScript, status can be filtered and changed.",
    img: [
      "/projects-images/extension-light-mode.avif",
      "/projects-images/extension-dark-mode.avif",
    ],
    githubUrl: "https://github.com/SAMCOM-07/browser-extension",
    liveUrl: "https://browser-extension-nine.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "HTML5",
        img: "/stack-images/html-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
      {
        name: "JavaScript",
        img: "/stack-images/javascript-logo.png",
      },
    ],
    details: {
      introduction:
        "Browser Extension is a utility tool that extends browser functionality with productivity features. It demonstrates how to build and package browser extensions using modern web technologies.",
      purpose:
        "This extension aims to improve user productivity by providing quick access to commonly used tools and features directly from the browser toolbar. It showcases browser API integration and extension development practices.",
      features: [
        "Quick access to tools from browser toolbar",
        "Task/status management with filtering",
        "Status tracking and updating",
        "Dark and light theme support",
        "Persistent data storage",
        "Quick notes taking",
        "Keyboard shortcuts",
        "Customizable theme",
        "Clean and intuitive UI",
        "Cross-browser compatibility",
      ],
      motivation:
        "I created this extension to explore browser extension development and demonstrate how browser APIs can be leveraged to enhance user experience. It showcases practical skills in extension architecture and design.",
      howToContribute:
        "To contribute:\n\n1. Fork the repository\n2. Review the extension manifest structure\n3. Make improvements or add features\n4. Test the extension in your browser\n5. Submit a Pull Request",
    },
  },
  {
    id: 8,
    name: "Fylo",
    description:
      "A landing page for Fylo, a fictional cloud storage service. The design is modern and responsive, focusing on user engagement and conversion.",
    img: [
      "/projects-images/fylo-light-mode.avif",
      "/projects-images/fylo-dark-mode.avif",
    ],
    githubUrl: "https://github.com/SAMCOM-07/fylo",
    liveUrl: "https://fylo-nu-seven.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "HTML5",
        img: "/stack-images/html-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
      {
        name: "JavaScript",
        img: "/stack-images/javascript-logo.png",
      },
    ],
    details: {
      introduction:
        "Fylo is a modern, professional landing page designed for a fictional cloud storage service. It exemplifies contemporary web design with a focus on clarity, user engagement, and conversion optimization.",
      purpose:
        "This project showcases landing page design best practices, demonstrating how to effectively communicate product value, build user trust, and encourage sign-ups through strategic design and content placement.",
      features: [
        "Hero section with strong value proposition",
        "Feature highlights with icons",
        "How it works section with visual steps",
        "Testimonials from users",
        "Pricing information",
        "Call-to-action buttons",
        "FAQ section",
        "Email signup form",
        "Responsive design",
        "Dark and light themes",
      ],
      motivation:
        "Fylo was created to practice modern landing page design and demonstrate my ability to create compelling web experiences. The project emphasizes visual design, user psychology, and conversion optimization principles.",
      howToContribute:
        "Contributions to enhance this landing page are welcome:\n\n1. Fork the repository\n2. Suggest design or content improvements\n3. Test across different devices\n4. Submit a Pull Request with your enhancements",
    },
  },
  {
    id: 9,
    name: "Shortly",
    description:
      "A URL shortening service that allows users to shorten long URLs for easier sharing. Built with HTML, CSS, and JavaScript, it provides a simple and user-friendly interface for generating short links.",
    img: ["/projects-images/shortly.avif"],
    githubUrl: "https://github.com/SAMCOM-07/Shortly",
    liveUrl: "https://shortly-mu-ten.vercel.app/",
    status: "Completed ✅",
    stacks: [
      {
        name: "HTML5",
        img: "/stack-images/html-logo.png",
      },
      {
        name: "TailwindCss",
        img: "/stack-images/tailwind-logo.png",
      },
      {
        name: "JavaScript",
        img: "/stack-images/javascript-logo.png",
      },
    ],
    details: {
      introduction:
        "Shortly is a practical URL shortening application that converts long URLs into short, shareable links. Built with vanilla JavaScript and external APIs, it demonstrates API integration and practical utility application development.",
      purpose:
        "The goal of Shortly is to provide users with a simple, fast way to create shortened URLs for easier sharing on social media and messaging platforms. It showcases API integration and user-friendly interface design.",
      features: [
        "Instant URL shortening",
        "Copy shortened URL to clipboard",
        "View shortened link statistics",
        "URL validation before shortening",
        "History of shortened URLs",
        "QR code generation",
        "Responsive design",
        "Real-time API integration",
        "Error handling",
        "Intuitive user interface",
      ],
      motivation:
        "I built Shortly to practice API integration and create a practical tool that demonstrates real-world application development. It showcases how to work with external services and create useful applications.",
      howToContribute:
        "To contribute to Shortly:\n\n1. Fork the repository\n2. Review current functionality\n3. Suggest or implement improvements\n4. Test thoroughly\n5. Submit a Pull Request with details",
    },
  },
];

// FAQs
type FaqType = {
  id: number;
  question: string;
  answer: string;
};
export const faqs: FaqType[] = [
  {
    id: 1,
    question: "What technologies do you work with most often?",
    answer:
      "I mainly use Next.js, React, Tailwind CSS, and TypeScript, along with tools like Git, Firebase, and Framer Motion for animations.",
  },
  {
    id: 2,
    question: "Do you work with clients or teams remotely?",
    answer:
      "Yes, I do. I'm flexible and can collaborate effectively through online communication and project management tools.",
  },
  {
    id: 3,
    question: "Can you handle both design and development?",
    answer:
      "Absolutely. While my main strength is development, I pay close attention to visual design and UX, ensuring the websites I build look great and function smoothly.",
  },
  {
    id: 4,
    question: "Are you open to full-time or freelance roles?",
    answer:
      "Yes — I'm open to freelance collaborations, contract roles, and startup projects where I can contribute and grow.",
  },
  {
    id: 5,
    question: "What inspires your work as a developer?",
    answer:
      "Seeing ideas come to life and knowing that something I built helps someone achieve their goal motivates me every day.",
  },
  {
    id: 6,
    question: "What's your long-term vision?",
    answer:
      "To become a top-tier software developer, contribute to innovative projects, and eventually build my own startup that focuses on technology-driven solutions.",
  },
];

// services data

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "💻",
    description:
      "I craft responsive, high-performance interfaces using modern frameworks like Next.js, React, and Tailwind CSS to deliver fast and engaging user experiences.",
  },
  {
    id: 2,
    title: "UI Implementation",
    icon: "🎨",
    description:
      "I bring beautiful designs to life with clean, scalable code — ensuring consistency, accessibility, and precision across all devices.",
  },
  {
    id: 3,
    title: "Website Optimization",
    icon: "⚡",
    description:
      "I optimize websites for performance, SEO, and accessibility, making sure your brand reaches users efficiently and effectively.",
  },
  {
    id: 4,
    title: "Startup & Project Collaboration",
    icon: "🚀",
    description:
      "I love collaborating with teams, agencies, and startups — helping transform ideas into real-world digital products.",
  },
];
