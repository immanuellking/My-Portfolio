"use client";

import React from "react";

import { techStack, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> colleagues</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {techStack.map((company) => (
            <div
              className="flex items-center md:max-w-60 max-w-32 gap-2 md:gap-3"
              key={company.id}
            >
              <img
                src={company.img}
                alt={company.name}
                className="md:w-14 w-5"
              />
              <h1 className="text-lg font-semibold text-white">
                {company.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
