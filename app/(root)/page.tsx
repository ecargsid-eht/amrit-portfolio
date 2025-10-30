import Image from "next/image";
import typeScript from "@/public/typescript.svg";
import react from "@/public/react.svg";
import node from "@/public/node.svg";
import django from "@/public/django.svg";
import socket from "@/public/socket.svg";
import resume from "@/public/resume.svg";
import blog from "@/public/blog.svg";
import { lazy } from "react";
import Link from "next/link";
import FeaturedExperience from "@/components/experience";
import FeaturedProjects from "@/components/projects";
import Github from "@/components/github";
import FeaturedBlogs from "@/components/blogs";
import { BlogPost, Experience, Project } from "@/interfaces";
import StoreInitializer from "@/components/storeInitializer";
const IconButton = lazy(() => import('@/components/iconbutton'));



const Home = async() => {


  return (
    <div className="">

      {/* <div style={{ height: "8vh" }} /> */}
      <div>
        <Image
          src={"/amritlogo.png"}
          width={"100"}
          height={"100"}
          alt="image"
          className="rounded-full bg-blue-300 shadow"
        />
        <div style={{ height: "3vh" }} />
        <div>
          <p className="intro leading-10 text-5xl font-semibold font-pixel">
            <span>Hi, Amrit here.</span>
            <br />
            <span className="text-zinc-400 text-3xl font-sans">
              I architect and build full-stack solutions.
            </span>
          </p>

          <div className="bio mt-10 text-zinc-400 font-light leading-9">
            I engineer sleek web and app experiences using{" "}
            <IconButton
              name="Typescript"
              code={typeScript}
              link={"https://typescriptlang.org"}
            />{" "}
            , &nbsp;
            <IconButton
              name="React"
              code={react}
              link={"https://reactjs.org"}
            />{" "}
            , &nbsp;
            <IconButton name="Node" code={node} link="https://nodejs.org" /> ,
            and &nbsp;
            <IconButton
              name="Django"
              code={django}
              link="https://djangoproject.com"
            />{" "}
            —fueled by{" "}
            <IconButton
              name="Socket.IO"
              code={socket}
              link="https://socket.io"
            />{" "}
            , optimized for <span className="font-semibold">performance</span>,
            and crafted with a designer’s precision.
          </div>
        </div>
        <div className="flex mt-5 gap-5">
          <Link
            href={
              "https://drive.google.com/file/d/1IFbUNhSQwJoRs6vGrL814yxOKorByqbE/view?usp=sharing"
            }
            className="flex gap-1 shadow-inner font-semibold hover:bg-zinc-100 border rounded-lg text-center py-2 px-2 border-black/20"
          >
            <Image priority src={resume} alt="resume" width={18} />
            Get Resume
          </Link>
          <Link
            href={
              "/blogs"
            }
            className="flex gap-2 shadow-inner font-semibold hover:bg-gray-800 bg-black text-white border rounded-lg text-center py-2 px-2 border-black/20"
          >
            <Image priority src={blog} alt="resume" width={18} />
            Check Blogs
          </Link>
        </div>

        <FeaturedExperience />
        <FeaturedProjects />
        <Github />
        <FeaturedBlogs />
      </div>
    </div>
  );
};

export default Home;
