"use client";

import { motion, Variants } from "framer-motion";
import Card from "./Card";
import { stackData } from "@/lib/data/data";
import Image from "next/image";
import Link from "next/link";

const Technologies = () => {
  const categories = {
    Frontend: stackData.filter(item => item.category === "frontend"),
    Backend: stackData.filter(item => item.category === "backend"),
    Tools: stackData.filter(item => item.category === "tools"),
  };

  // Parent container animation (controls stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // delay between each stack
      },
    },
  };

  // Child animation (bounce up)
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <section className="conpad mt-22">
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
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((stack) => (
                <motion.div
                  key={stack.name}
                  variants={itemVariants}
                  className="h-fit w-fit"
                  whileHover={{ scale: 1.08 }}
                >
                  <Link
                    href={stack.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card>
                      <div className="w-[80px] h-[120px] overflow-hidden">
                        <Image
                          src={stack.img}
                          alt={stack.name}
                          width={70}
                          height={100}
                          className="w-full h-[70%] object-contain mx-auto bg-muted p-1 rounded-md"
                        />
                        <h3 className="mt-4 text-center text-sm">
                          {stack.name}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;