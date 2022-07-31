import { useState } from "react";
import Link from "next/link";
import { pages } from "../../fluff.config";
import SiteIcon from "../Common/SiteIcon";
import Socials from "../Common/Socials";
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [visibleMobileNav, setVisibleMobileNav] = useState(false);
  const router = useRouter();
  const tr = getTranslation(router);

  const hamburgerClicked = () => {
    setVisibleMobileNav(!visibleMobileNav);
  };

  return (
    <>
      <div className='container mx-auto max-w-screen-lg'>
        <div
          className={
            "flex justify-center transition-all " +
            (visibleMobileNav ? "bg-me-inverted md:bg-[#00000000] " : "")
          }
        >
          <nav
            className={
              "flex min-h-[80px] text-center md:mt-0 md:mb-0 md:ml-0 md:flex-row md:space-y-0 md:space-x-8 md:px-0 md:pt-0 lg:space-x-16 xl:space-x-20 " +
              (visibleMobileNav
                ? "ml-[10vw] mb-4 flex-col items-center space-y-8 pt-4"
                : "px-[20vw]")
            }
          >
            <SiteIcon />

            {/* Primary Nav */}
            <div
              className={
                "flex flex-col items-center space-y-4 p-2 md:relative md:flex md:flex-row md:space-y-0 " +
                (visibleMobileNav ? "" : "hidden")
              }
            >
              <div
                className={
                  "flex flex-col space-y-4 transition-all  md:flex-row md:space-y-2 md:space-x-8 lg:space-x-16 xl:space-x-20 " +
                  (visibleMobileNav ? "" : "")
                }
              >
                {pages.map(([title, url]) => (
                  <div
                    key={title}
                    className='link link-underline link-underline-black my-2 min-w-fit px-1 py-2 text-xl font-medium text-me-base'
                  >
                    {/* We use translated titles here */}
                    <Link href={url}>{tr.navbar[title]}</Link>
                  </div>
                ))}
              </div>
              {/* Secondary Nav */}
              <div className='md:ml-8 lg:ml-16 xl:ml-20'>
                <Socials />
              </div>
            </div>
          </nav>

          <div
            className={
              "rounded-2xl bg-me-inverted p-2 text-3xl text-me-base hover:bg-me-base hover:text-me-inverted md:hidden " +
              (visibleMobileNav ? "mt-4 self-start" : "self-center")
            }
            onClick={hamburgerClicked}
          >
            {visibleMobileNav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
