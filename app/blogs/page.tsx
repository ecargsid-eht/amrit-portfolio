"use client";

import BlogCard from "@/components/blogcard";
import { useMyStore } from "../store";

const Blog = () => {
  const blogs = useMyStore((state) => state.blogs);
  return (
    <div>
      <p className="font-extrabold text-5xl text-center">Blogs</p>
      <p className="font-medium text-lg text-center text-zinc-400 my-5">
        Thoughts, tutorials, and insights on engineering, and programming.
      </p>
      <hr className="border-t border-zinc-200 my-10" />
      <p className="font-extrabold text-2xl mb-7">
        All Blogs{" "}
        <span className="font-semibold text-base  md:text-sm text-zinc-400">
          ({blogs.length} projects)
        </span>
      </p>
      <div className="grid grid-cols md:grid-cols-2 gap-8">
        {blogs?.map((bl, key) => (
          <div
            key={key}
            className=" rounded-xl p-2 border border-black/5 shadow-sm hover:shadow-lg duration-500 "
          >
            <BlogCard bl={bl} />
            <div style={{ height: "5vh" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
