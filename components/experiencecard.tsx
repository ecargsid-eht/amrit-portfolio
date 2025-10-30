import React from 'react'
import IconButton from './iconbutton';
import { Experience } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import websiteIcon from "@/public/websiteIcon.svg";
import linkedinIcon from "@/public/linkedinIcon.svg";
import companyLogo from "@/public/companylogo.svg";

const ExperienceCard = ({ex}:{ex:Experience}) => {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex gap-3 items-center">
          <Image
            src={
              ex.website != null
                ? `https://logo.clearbit.com/${ex.website}`
                : companyLogo
            }
            alt="logo"
            width={50}
            height={50}
          />
          <div>
            <div className="flex gap-4 items-center">
              <p className="text-xl font-bold mb-0 pb-0">{ex.company_name}</p>
              <div className="flex gap-2 items-center">
                {ex.website && (
                  <Link href={ex.website}>
                    <Image
                      src={websiteIcon}
                      alt="website"
                      width={17}
                      height={17}
                    />
                  </Link>
                )}
                {ex.linkedin && (
                  <Link href={ex.linkedin}>
                    <Image
                      src={linkedinIcon}
                      alt="linkedin"
                      width={18}
                      height={18}
                    />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-sm text-zinc-400">{ex.role}</p>
          </div>
        </div>
        <div className="max-md:mt-3 md:text-right">
          {
            <>
              <p className=" text-zinc-400">
                {new Date(ex.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}{" "}
                -{" "}
                {ex.endDate !== null
                  ? new Date(ex.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })
                  : "Present"}
              </p>
              <p className="text-zinc-400">{ex.location}</p>
            </>
          }
        </div>
      </div>
      <div className="mt-5">
        <p className="font-semibold mb-2">Technologies Used:</p>
        <div className="flex gap-2 flex-wrap">
          {ex.techStack.map((tech) => (
            <IconButton
              key={tech.slug}
              code={tech.logo}
              name={tech.name}
              link={null}
            />
          ))}
        </div>
        <ul className="mt-3 text-zinc-400 list-disc list-inside">
          {ex.description?.map((desc, key) => (
            <li key={key} className="mt-1 font-medium">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard