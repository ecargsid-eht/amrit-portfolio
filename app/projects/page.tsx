"use client";

import ProjectCard from "@/components/projectcard";
import { useMyStore } from "../store";

const Project = () => {
  const projects = useMyStore((state) => state.projects);
  return (
    <div>
      <p className="font-extrabold text-5xl text-center">Projects</p>
      <p className="font-medium text-lg text-center text-zinc-400 my-5">
        My projects and work across different technologies and domains.
      </p>
      <hr className="border-t border-zinc-200 my-10" />
      <p className="font-extrabold text-2xl mb-7">
        All Projects{" "}
        <span className="font-semibold text-base  md:text-sm text-zinc-400">
          ({projects.length} projects)
        </span>
      </p>
      <div className="grid grid-cols md:grid-cols-2 gap-8">
        {projects?.map((pr) => (
          <div
            key={pr._id}
            className=" rounded-xl p-2 border border-black/5 shadow-sm hover:shadow-lg duration-500 "
          >
            <ProjectCard key={pr._id} pr={pr} />
            <div style={{ height: "5vh" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
