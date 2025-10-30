// Place where you store states
import { BlogPost, Experience, Project } from "@/interfaces";
import { create } from "zustand";

type Store = {
    experiences: Experience[];
    projects: Project[];
    blogs: BlogPost[];
    setExperiences: (experiences: Experience[]) => void;
    setProjects: (projects: Project[]) => void;
    setBlogs: (blogs: BlogPost[]) => void;
};

export const useMyStore = create<Store>((set) => ({
    experiences: [],
    projects: [],
    blogs: [],
    setExperiences: (experiences: Experience[]) => set({ experiences }),
    setProjects: (projects: Project[]) => set({ projects }),
    setBlogs: (blogs: BlogPost[]) => set({ blogs }),
}));