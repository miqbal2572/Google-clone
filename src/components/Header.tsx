import React from "react";
import { PiFlaskFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const url: string =
    "https://lh3.googleusercontent.com/a/ACg8ocL_b7Wa8svv6SSRQ0S-fI6hCkWdPzxIOIzsR1sP-J4hl0NMJg=s288-c-no";
  return (
    <div className="flex justify-end space-x-4 mt-3 text-xs items-center pr-4">
      <Link
        href="https://www.google.com/search?q=gmail&sca_esv=5d62d90034b84f0f&sxsrf=ADLYWIJ3yojGID-BXmMfF2gipzuLajQMOw%3A1721544354983&ei=oq6cZpbeO8eWxc8PmsuZ4Ac&ved=0ahUKEwiWt_m9xLeHAxVHS_EDHZplBnwQ4dUDCA8&uact=5&oq=gmail&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWdtYWlsMgoQIxiABBgnGIoFMhAQABiABBixAxhDGIMBGIoFMhAQABiABBixAxhDGIMBGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDSIRDUK4qWKg1cAV4BJABAZgBlAagAf4VqgEJMy0xLjAuMy4xuAEDyAEA-AEBmAIMoALKEagCEMICBBAAGEfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGNEDGEMYxwEYyAMYigXYAQHCAgcQIxgnGOoCwgIcEC4YgAQY0QMYQxi0AhjHARjIAxiKBRjqAtgBAcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAgoQABiABBhDGIoFwgIQEC4YgAQY0QMYQxjHARiKBZgDEOIDBRIBMSBAiAYBkAYTugYGCAEQARgIkgcJOC4zLTEuMi4xoAeNJQ&sclient=gws-wiz-serp"
        className=" hover:underline cursor-pointer "
      >
        Gmail
      </Link>
      <Link
        href="https://www.google.com/imghp?hl=en&ogbl"
        className=" hover:underline cursor-pointer"
      ></Link>
      <Link
        href={
          "https://labs.google.com/search?source=hphttps://labs.google.com/search?source=hp"
        }
      >
        <PiFlaskFill className="size-7 hover:underline cursor-pointer hover:bg-neutral-100 rounded-full p-1" />
      </Link>
      <CgMenuGridO className="size-7 hover:underline cursor-pointer hover:bg-neutral-100 rounded-full p-1" />
      <Image
        src={url}
        alt="M"
        height={35}
        width={35}
        className="cursor-pointer hover:bg-neutral-100 rounded-full p-1 object-full"
      />
    </div>
  );
};

export default Header;
