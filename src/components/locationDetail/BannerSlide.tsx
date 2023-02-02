
import { SplideSlide } from "@splidejs/react-splide";
import * as React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../assets/css/banner.css";
const BannerSlide = (props: any) => {
  // const images = [
  //   "https://i.pinimg.com/564x/c9/f8/5d/c9f85d1a1dbb9a819afe7c6998c9d159.jpg",
  //   "https://i.pinimg.com/564x/0e/73/4f/0e734f0371d50d6cb59ea698af6940ce.jpg",
  //   "https://images.unsplash.com/photo-1514907283155-ea5f4094c70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // ];

  const { imge } = props;
  const photos = imge?.map((element: any) => (

    <SplideSlide>
      <img src={element?.url} />
    </SplideSlide>
  ));
  return (
    <Slide>
      <div className="each-slide-effect">
        <div>{photos} </div>
      </div>
      {/* <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div> */}
    </Slide>
  );
};

export default BannerSlide;

