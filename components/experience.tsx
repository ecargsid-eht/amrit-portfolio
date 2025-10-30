'use client'

import Link from "next/link";
import ExperienceCard from "./experiencecard";
import { useMyStore } from "@/app/store";

const FeaturedExperience = () => {
  const experiences = useMyStore((state) => state.experiences)
  return (
    <div className="">
      <div style={{ height: "7vh" }}></div>
      <p className="font-bold text-2xl mb-4">Work Experiences</p>
      {experiences?.map((ex) => (
        <div key={ex._id}>
          <ExperienceCard ex={ex} />
          <div style={{ height: "5vh" }}></div>
        </div>
      ))}
      <div className="text-center">
        <Link
          href={"/experience"}
          className="shadow-inner py-2 text-sm px-4 rounded-md hover:bg-zinc-50 mx-auto border border-black/10 font-semibold"
        >
          Show all work experiences
        </Link>
      </div>
    </div>
  );
};

export default FeaturedExperience;
