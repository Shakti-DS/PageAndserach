import { Link } from "@yext/pages/components";
import * as React from "react";
import abbanner from "../../images/ab-banner.jpg";
import dt12 from "../../images/dtl2.jpg";
import PhotoSlider from "./PhotoSlider";
import RtfConverter from "@yext/rtf-converter";

type props = {
  img: any;
  btn: any;
  dsc: any;
};

export default function About(props: any) {
  const { img, btn, dsc } = props;
  

  function convertToRtf(rtf: any) {
    rtf = rtf?.replace(/\\par[d]?/g, "");
    rtf = rtf?.replace(
      /\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g,
      ""
    );
    rtf = rtf?.replace("/", "");
    rtf = rtf?.replace(";", "");
    rtf = rtf?.replace("-", "");
    return rtf?.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }
  return (
    <>
      <div className="about-sec ">
      <h2 className="for-mob text-center mb-6">About</h2>
  

        <div className="container-custom">
          <div className="about-inner-sec">

            <div className="w-full lg:w-2/5 xl:w-[47%] relative  left-0">
              <div className="lg:h-full">
                {img?.map((element: any) => (
                  <img
                    height={518}
                    width={658}
                    src={element?.url}
                    alt="photo"
                  />
                ))}
              </div>
            </div>
            <div className="about-content">
              <div className="mb-4">
                {dsc?.map((data: any) => (
                  <h6>{data}</h6>
                ))}
                <div className="">
                  <div className="about-content-inner"></div>
                </div>

                <div className="content-center w-full ">
                  {btn?.map((btndata: any) => (
                  <Link
                    href="#"
                    className="button-red"
                    data-ya-track={`about-button`}
                    eventName={`about-button`}
                    rel="noopener noreferrer"
                  >
                      {btndata?.label}
                    </Link>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
