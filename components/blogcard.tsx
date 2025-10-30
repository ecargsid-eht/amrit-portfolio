import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import calendar from "@/public/calendar.svg";
import { BlogPost } from '@/interfaces';

const BlogCard = ({bl}:{bl: BlogPost}) => {
  return (
    <Link
      href={bl.node.url}
      key={bl.node.slug}
      target="_blank"
      rel="noopener noreferrer"
      className=" rounded-xl p-2 border border-black/5 shadow-sm hover:shadow-lg duration-500"
    >
      <Image
        src={bl.node.coverImage.url}
        width={400}
        height={210}
        alt="project"
        className="rounded-xl object-contain w-full h-2/5"
      />
      <div className=" p-3">
        <div className="flex justify-between items-start">
          <p className="font-bold text-lg flex-2 line-clamp-2">
            {bl.node.title}
          </p>
          <div className="flex gap-3 flex-1 justify-end">
            <p>GIT</p>
            <p>LINK</p>
          </div>
        </div>

        <p className="mt-3 text-zinc-400 font-medium">{bl.node.brief}</p>
        <div className="flex size-3"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src={calendar} alt="calendar icon" height={20} width={20} />
            <p className=" text-zinc-400 font-medium text-sm">
              {new Date(bl.node.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
          <p className="text-sm text-zinc-400">
            {bl.node.readTimeInMinutes} mins read
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard