'use client';

import { BlogPost } from "@/interfaces";
import Link from "next/link";
import BlogCard from "./blogcard";
import { useMyStore } from "@/app/store";


const FeaturedBlogs = () => {
    const blogs: BlogPost[] = useMyStore((state) => state.blogs);

  return (
    <div className="">
      <div style={{ height: "7vh" }}></div>
      <p className="font-bold text-2xl mb-4 ">Blogs</p>
      <div className="grid grid-cols md:grid-cols-2 gap-8">
        {blogs?.map((bl, key) => (
          <BlogCard key={key} bl={bl} />
        ))}
      </div>
      <div style={{ height: "5vh" }}></div>
      <div className="text-center mt-">
        <Link
          href={"/blogs"}
          className="shadow-inner py-2 text-sm px-4 rounded-md hover:bg-zinc-50 mx-auto border border-black/10 font-semibold"
        >
          Show all blogs
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
