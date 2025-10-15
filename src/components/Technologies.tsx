import React from "react";
import Card from "./Card";
import { stackData } from './../lib/data/data';
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="conpad mt-22">
      <h1 className="mb-8 text-center">Technologies & Tools</h1>
      <div className=" max-w-5xl mx-auto overflow-hidden relative">
        <div className="flex items-center gap-6 animate-scroll-horizontal py-4">
          {
            stackData && stackData.map((stack, index) =>
              <div className="shadow-[0_0_5px] shadow-foreground h-fit w-fit rounded-md animate-pulse">
                <Card key={index}>
                  <div className="w-[100px] h-[150px] overflow-hidden">
                    <Image src={stack.img} alt="stack.name" width={100} height={100} className="w-full h-[70%] object-contain mx-auto bg-foreground/10 p-1 rounded-md" />
                    <h2 className="mt-4 text-center">{stack.name}</h2>
                  </div>
                </Card>
              </div>
            )
          }
        </div>
        <div className="absolute w-16 h-60 bg-background blur-md z-30 -left-6 -top-6"></div>
        <div className="absolute w-16 h-60 bg-background blur-md z-30 -right-6 -top-6"></div>
      </div>
    </div>
  );
};

export default Technologies;
