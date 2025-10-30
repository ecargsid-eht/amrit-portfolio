"use client";

import React, { Suspense } from "react";
import GitHubCalendar from "react-github-calendar";

const githubLightTheme = {
  light: [
    "#ebedf0", // 0 contributions (light gray)
    "#9be9a8", // 1-9 contributions
    "#40c463", // 10-19 contributions
    "#30a14e", // 20-29 contributions
    "#216e39", // 30+ contributions
  ],
  dark: [
    "#161b22", // 0 contributions (dark gray)
    "#0e4429", // 1-9 contributions
    "#006d32", // 10-19 contributions
    "#26a641", // 20-29 contributions
    "#39d353", // 30+ contributions
  ],
};

const Github = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div style={{ height: "7vh" }}></div>
      <div className="font-bold text-2xl ">Github Activity</div>
      <p className="text-zinc-400 text-sm font-medium">
        <span className="font-bold text-zinc-500">Amrit&apos;s </span>
        coding journey over a year
      </p>
      <div className="p-5 border-2 border-dashed border-black/10  rounded-2xl mt-5">
        <GitHubCalendar
          username="ecargsid-eht"
          theme={githubLightTheme}
          colorScheme="light"
        //   hideTotalCount={false}
        />
      </div>
    </Suspense>
  );
};

export default Github;
