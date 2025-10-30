'use client'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { JSX } from "react";

const IconButton = ({
  name,
  code,
  link,
}: {
  name: string;
  code: StaticImport | string;
  link: string | null;
}): JSX.Element => {
  return (
    <a
      href={link!}
      className=" border border-dashed inline-flex items-center gap-1 py-0.5 font-semibold text-sm px-2 rounded-lg shadow-inner text-zinc-700 border-black/20 bg-black/5"
    >
      <div className="shrink-0 size-4">
        <Image priority src={code} alt="typescript" width={15} height={15} />
      </div>
      <p>{name}</p>
    </a>
  );
};

export default IconButton