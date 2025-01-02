// pages/404.js

import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Custom404() {
  return (
    <div className=" py-80 flex  items-center justify-center bg-black">
      <div className="relative w-60 lg:w-[500px]">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 786.94 294.29"
          className="animate-swirl"
        >
          <path
            className="fill-none stroke-[#f5eded] stroke-[12]"
            strokeDasharray="200 100"
            d="M151.13,226.53H26.2v-56.4L151.13,21.64h59.77v151.69h30.98v53.2h-30.98v46.13h-59.77V226.53z M151.13,173.33V95.65
        l-66.01,77.67H151.13z"
          />
          <path
            className="fill-none stroke-[#f5eded] stroke-[12]"
            strokeDasharray="200 100"
            d="M669.99,226.53H545.07v-56.4L669.99,21.64h59.77v151.69h30.98v53.2h-30.98v46.13h-59.77V226.53z M669.99,173.33V95.65
        l-66.01,77.67H669.99z"
          />
          <path
            className="fill-none stroke-[#E82B52] stroke-[12]"
            strokeDasharray="200 100"
            d="M393.47,80.81c36.58,0,66.34,29.76,66.34,66.34c0,36.58-29.76,66.34-66.34,66.34s-66.34-29.76-66.34-66.34
        C327.13,110.57,356.89,80.81,393.47,80.81 M393.47,21.81c-69.22,0-125.34,56.11-125.34,125.34s56.11,125.34,125.34,125.34
        s125.34-56.11,125.34-125.34S462.69,21.81,393.47,21.81L393.47,21.81z"
          />
        </svg>
        <h1 className="absolute inset-x-0 mt-10 flex flex-col justify-center lg:gap-3 text-center lg:text-5xl text-3xl font-bold text-white lg:flex-row">
          Go Back to{" "}
          <Link href="/" className="text-[#E82B52]">
            <p className="flex items-center justify-center">
              {" "}
              HomePage{" "}
              <span>
                <LuArrowRight />{" "}
              </span>{" "}
            </p>
          </Link>
        </h1>
      </div>
    </div>
  );
}
