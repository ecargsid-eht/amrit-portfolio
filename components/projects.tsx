'use client'

import Link from "next/link";
import { useMyStore } from "@/app/store";
import ProjectCard from "./projectcard";

const FeaturedProjects =  () => {
  const projects = useMyStore((state) => state.projects)
  return (
    <div className="">
      <div style={{ height: "7vh" }}></div>
      <p className="font-bold text-2xl mb-4 ">Projects</p>
      <div className="grid grid-cols md:grid-cols-2 gap-8">
        {projects?.map((pr) => (
          <div
            key={pr._id}
            className=" rounded-xl p-2 border border-black/5 shadow-sm hover:shadow-lg duration-500 "
          >
            <ProjectCard pr={pr} />
          </div>
        ))}
      </div>
      <div style={{ height: "5vh" }}></div>
      <div className="text-center mt-">
        <Link
          href={"/projects"}
          className="shadow-inner py-2 text-sm px-4 rounded-md hover:bg-zinc-50 mx-auto border border-black/10 font-semibold"
        >
          Show all projects
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
