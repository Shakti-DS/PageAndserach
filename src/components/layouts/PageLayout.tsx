import * as React from "react";
import BannerSlide from "../locationDetail/BannerSlide";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
};

const PageLayout = ({ title ,_site, global, children }: Props) => {
  return (
    <>
      <Nav
        c_logos={global?.c_logo.image?.url}
        c_menus={global?.c_menu}
      />
     
      {children}
      <Footer
        c_aboutsa={global?.c_abouts}
        c_ourServicess={global?.c_ourServices}
        c_resourcess={global?.c_resources}
        c_menus={global?.c_menu}
      />
    </>
  );
};

export default PageLayout;
