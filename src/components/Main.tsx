"use client";
import React, { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Image from "next/image";
import { MdOutlineSearch } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Main = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.push(`https://www.google.com/search?q=${search}`);
  };

  return (
    <div className="items-center flex flex-col mt-2">
      <Image src="/Google.png" height={100} width={270} alt="google" />
      <form
        onSubmit={handleSubmit}
        className="flex border mt-7 px-5 rounded-full w-2/5 items-center hover:shadow-md"
      >
        <MdOutlineSearch className="text-2xl text-slate-400" />
        <input
          className="w-full focus:outline-none ml-4 h-10"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          value={search}
        />

        <CiMicrophoneOn className="text-2xl mr-4 text-slate-400" />

        <IoCameraOutline className="text-2xl text-slate-400" />
      </form>
      <div className="flex space-x-6 mt-8">
        <button
          className="bg-slate-100 hover:shadow-md border rounded-sm text-sm py-1 px-2"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <Link href="https://doodles.google/">
          <button className="bg-slate-100 hover:shadow-md border rounded-sm text-sm py-1 px-2">
            I'm Feeling Lucky
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
