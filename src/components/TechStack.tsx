"use client";

import { motion, Variants } from "framer-motion";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

interface StackItem {
  name: string;
  img: string;
  documentation?: string;
}

interface TechStackProps {
  stacks: StackItem[];
  align: "left" | "center" | "right";
}

export default function TechStack({ stacks, align }: TechStackProps) {
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
      <motion.div
        className={`flex flex-wrap gap-4 max-w-2xl mx-auto justify-${align}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stacks.map((stack) => (
          <motion.div
            key={stack.name}
            variants={itemVariants}
            className="h-fit w-fit"
            whileHover={{ scale: 1.08 }}
          >
            {stack.documentation ? (
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
            ) : (
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
            )}
          </motion.div>
        ))}
      </motion.div>
  );
}
