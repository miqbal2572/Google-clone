"use client";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-neutral-100 border">
      <span className="px-3 py-8 text-sm text-slate-600">Pakistan</span>
      <div className="flex py-3 px-8 border">
        <ul className="flex [&>*]:mr-6 text-sm text-slate-600 ">
          <Link
            href={
              "https://about.google/?utm_source=google-PK&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            }
          >
            <li className="hover:underline">About</li>
          </Link>
          <Link
            href={
              "https://ads.google.com/intl/en_pk/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            }
          >
            <li className="hover:underline">Advertising</li>
          </Link>
          <Link
            href={
              "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            }
          >
            <li className="hover:underline">Business</li>
          </Link>
          <Link href={"https://www.google.com/search/howsearchworks/?fg=1"}>
            <li className="hover:underline">How Search Work</li>
          </Link>
        </ul>
        <ul className="flex [&>*]:mr-6 text-sm text-slate-500 ml-auto">
          <Link href={"https://policies.google.com/privacy?hl=en-PK&fg=1"}>
            <li className="hover:underline">Privacy</li>
          </Link>
          <Link href={"https://policies.google.com/terms?hl=en-PK&fg=1"}>
            <li className="hover:underline">Terms</li>
          </Link>
          <li className="hover:underline">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
