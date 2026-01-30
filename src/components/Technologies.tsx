"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import { stackData } from "@/lib/data/data";
import Image from "next/image";

const Technologies = () => {
  return (
    <section className="conpad mt-22">
      <h1 className="mb-8 text-center">Technologies & Tools</h1>

      <div className="max-w-5xl mx-auto relative overflow-hidden">
        {/* Main scroll wrapper */}
        <motion.div
          className="flex items-center gap-6 py-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15, // adjust speed here (lower = faster)
          }}
        >
          {/* Duplicate the stackData to make a seamless loop */}
          {[...stackData, ...stackData].map((stack, index) => (
            <div
              key={index}
              className=" h-fit w-fit rounded-md"
            >
              <Card>
                <div className="w-[80px] h-[120px] overflow-hidden">
                  <Image
                    src={stack.img}
                    alt={stack.name}
                    width={70}
                    height={100}
                    className="w-full h-[70%] object-contain mx-auto bg-primary/20 p-1 rounded-md"
                  />
                  <h2 className="mt-4 text-center">{stack.name}</h2>
                </div>
              </Card>
            </div>
          ))}
        </motion.div>

        {/* Faded edges for better look */}
        <div className="absolute w-18 h-60 bg-background blur-md z-30 -left-12 -top-6"></div>
        <div className="absolute w-18 h-60 bg-background blur-md z-30 -right-12 -top-6"></div>
      </div>
    </section>
  );
};

export default Technologies;