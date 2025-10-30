'use client';

import ExperienceCard from "@/components/experiencecard";
import { useMyStore } from "../store";


const Experience = () => {
  const experiences = useMyStore((state) => state.experiences);
  return (
    <div>
      <p className="font-extrabold text-5xl text-center">Work Experiences</p>
      <p className="font-medium text-lg text-center text-zinc-400 my-5">
        My work experiences across different companies and roles.
      </p>
      <hr className="border-t border-zinc-200 my-10" />
      <p className="font-extrabold text-2xl mb-7">
        All Experiences{" "}
        <span className="font-semibold text-base  md:text-sm text-zinc-400">
          ({experiences.length} experiences)
        </span>
      </p>
      {experiences?.map((ex) => (
        <div key={ex._id}>
          <ExperienceCard ex={ex} />
          <div style={{ height: "5vh" }}></div>
        </div>
      ))}
    </div>
  );
}

export default Experience