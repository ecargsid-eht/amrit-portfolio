"use client"; // This is a Client Component

import { useEffect, useRef } from "react";
import { useMyStore } from "@/app/store"; // Adjust path to your store.ts
import { BlogPost, Experience, Project } from "@/interfaces";

// Define the props it will receive from the Server Component
type StoreInitializerProps = {
  experiences: Experience[];
  projects: Project[];
  blogs: BlogPost[];
};

function StoreInitializer({
  experiences,
  projects,
  blogs
}: StoreInitializerProps) {
  // Use a ref to ensure this initialization only runs ONCE
  const initialized = useRef(false);

  // Get the setter functions from your store
  const setExperiences = useMyStore((state) => state.setExperiences);
  const setProjects = useMyStore((state) => state.setProjects);
  const setBlogs = useMyStore((state) => state.setBlogs);

  // On the first render, load the server data into the store
 useEffect(() => {
   if (!initialized.current) {
     setExperiences(experiences);
     setProjects(projects);
     setBlogs(blogs)
     // Mark as initialized
     initialized.current = true;
   }
 }, [
   experiences,
   projects,
   setExperiences,
   setProjects,
   blogs, setBlogs
 ]);


  // This component renders nothing
  return null;
}

export default StoreInitializer;
