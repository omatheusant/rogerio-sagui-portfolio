import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-none  border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-4 flex items-center justify-between text-sm lg:flex-col lg:py-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built by&nbsp;
          <Link
            href="https://instagram.com/atlasadvantage"
            target="_blank"
            className="underline underline-offset-2"
          >
            Atlas Advantage
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
