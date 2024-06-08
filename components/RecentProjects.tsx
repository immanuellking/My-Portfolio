import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGlobe, FaGithub } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-0 mt-5 sm:gap-y-8 lg:mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, github }) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[600px] lg:w-[570px] w-[80vw] overflow-hidden md:h-[34vh] lg:h-[39vh] h-[27vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0 w-full h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={link}
                    target="_blank"
                    className="flex justify-center items-center gap-1"
                  >
                    <FaGlobe className="ms-3" size={20} color="#fff" />
                    <p className="lg:text-xl md:text-xs text-sm text-purple md:flex hidden">
                      Live
                    </p>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    className="flex justify-center items-center gap-1"
                  >
                    <FaGithub className="ms-3" size={20} color="#fff" />
                    <p className="lg:text-xl md:text-xs text-sm text-purple md:flex hidden">
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
