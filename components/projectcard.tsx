import { Project } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import github from "@/public/github.svg";
import website from "@/public/websiteIcon.svg";
import tryproject from "@/public/tryprojectwallpaper.jpg";
import React from 'react'
import {motion} from 'motion/react';
import { usePathname } from 'next/navigation';
const ProjectCard = ({pr}:{pr:Project}) => {
  const pathname = usePathname();
  return (
    <motion.div
      key={pr._id + pathname}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Image src={tryproject} alt="project" className="rounded-xl" />
        <div className="p-3 grid grid-rows-[2fr_1fr]">
          <div className="">
            <div className="flex justify-between items-start">
              <p className="font-bold text-lg flex-2">{pr.title}</p>
              <div className="flex gap-3 flex-1 justify-end">
                {pr.repoUrl && (
                  <Link href={pr.repoUrl}>
                    <Image src={github} alt="github" width={20} height={20} />
                  </Link>
                )}
                {pr.projectUrl && (
                  <Link href={pr.projectUrl}>
                    <Image src={website} alt="website" width={20} height={20} />
                  </Link>
                )}
              </div>
            </div>
            <p className="mt-3 text-zinc-400 font-medium">{pr.description}</p>
          </div>
          <div className="mt-auto">
            <p className="mt-3 text-zinc-400 font-medium text-sm">
              Technologies used:-
            </p>
            <div className="flex gap-3 mt-2">
              {pr.techStack?.map((tech) => (
                <div key={tech._id}>
                  <Image
                    src={tech.logo}
                    height={25}
                    width={25}
                    alt="tech logo"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">
              {pr.status === "Completed" ? (
                <div className="px-2 py-1 rounded-lg bg-green-50 flex items-center gap-1">
                  <div className="rounded-full bg-green-500 size-2 animate-pulse"></div>
                  <p className="m-0 text-xs text-green-500 font-semibold">
                    Completed
                  </p>
                </div>
              ) : (
                <>
                  <div className="px-2 py-1 rounded-lg bg-red-50 flex items-center gap-1">
                    <div className="rounded-full bg-red-500 size-2 animate-pulse"></div>
                    <p className="m-0 text-xs text-red-500 font-semibold">
                      Ongoing
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard