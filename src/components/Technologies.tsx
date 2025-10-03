import React from "react";
import Card from "./Card";

const Technologies = () => {
  return (
    <div className="conpad mt-22">
      <h1 className="mb-8 text-center">Technologies & Tools</h1>
      <div className=" max-w-5xl mx-auto overflow-hidden relative">
        <div className="flex items-center gap-2 animate-scroll-horizontal">
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
          <Card>CODING</Card>
        </div>
        <div className="absolute w-16 h-36 bg-background blur-md z-30 -left-6 -top-6"></div>
        <div className="absolute w-16 h-36 bg-background blur-md z-30 -right-6 -top-6"></div>
      </div>
    </div>
  );
};

export default Technologies;
