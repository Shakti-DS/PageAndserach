import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global";
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

type props = {
  c_aboutsa: any;
  c_ourServicess: any;
  c_resourcess: any;
  c_menus: any;
};

const Footer = (props: any) => {
  // console.log("props===f", props);
  const { c_aboutsa, c_ourServicess, c_resourcess, c_menus } = props;
  // const [isNavVisible, setNavVisibility] =  useState(false);
  //   const [isSmallScreen, setIsSmallScreen] = useState(false);
  //   console.log(footer);
  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia("(max-width: 1024px)");
  //     mediaQuery.addListener(handleMediaQueryChange);
  //     handleMediaQueryChange(mediaQuery);

  //     return () => {
  //       mediaQuery.removeListener(handleMediaQueryChange);
  //     };
  //   }, []);

  //   const handleMediaQueryChange = (mediaQuery) => {
  //     if (mediaQuery.matches) {
  //       setIsSmallScreen(true);
  //     } else {
  //       setIsSmallScreen(false);
  //     }
  //   };
  //   // if (typeof window !== "undefined") {
  //   // 	mediaQuery = window?.innerWidth;
  //   // }

  return (
    <>
      <footer className="footer-1 bg-light-grey py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              {c_aboutsa?.map((about: any) => {
                return (
                  <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                      {about.label}
                    </h5>
                  </>
                );
              })}
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              {c_resourcess?.map((resource: any) => {
                return (
                  <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                      {resource.label}
                    </h5>
                  </>
                );
              })}
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              {c_ourServicess?.map((ourService: any) => {
                return (
                  <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                      {ourService.label}
                    </h5>
                  </>
                );
              })}
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              {c_menus?.map((menus: any) => {
                return (
                  <>
                    <h5 className="text-xl font-bold mb-6 hover:text-header-cta-bg-color">
                      {menus.label}
                    </h5>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
//   throw new Error("Function not implemented.");
// }
