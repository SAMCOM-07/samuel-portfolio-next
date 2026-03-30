"use client";

import { stackData } from "@/lib/data/data";
import TechStack from "./TechStack";

const Technologies = () => {
  const categories = {
    Frontend: stackData.filter(item => item.category === "frontend"),
    Backend: stackData.filter(item => item.category === "backend"),
    Tools: stackData.filter(item => item.category === "tools"),
  };


  return (
    <section className="">
      <h1 className="mb-8 text-center text-primary">
        Technologies & Tools
      </h1>

      <div className="max-w-5xl mx-auto">
        {Object.entries(categories).map(([categoryName, items]) => (
          <div key={categoryName} className="mb-12">
            <h2 className="text-xl font-semibold text-muted-foreground text-center mb-6">
              {categoryName}
            </h2>

            {/* Motion container for stagger */}
            <TechStack stacks={items} style='justify-center mx-auto'/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;