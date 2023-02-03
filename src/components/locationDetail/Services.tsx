import * as React from "react";

type Props = {
  serviceLis: any;
};

export default function Service(props: any) {
  const { serviceLis } = props;
  // console.log("c_serviceList", c_serviceLis);

  return (
    <>
      <h1 className="text-center mb-10">Services</h1>
      <div className="container">
        <div className="servicesList service-mid flex flex-wrap gap-y-5">
          {serviceLis.map((Data: any) => (
            <div className="block-content flex w-1/4 gap-2">
              <svg
                className="check-icon w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.008 16.472"
              >
                <path
                  d="M671.943,10.391,664.63,23.008a1.335,1.335,0,0,1-1.833.491l-6-3.449a1.34,1.34,0,1,1,1.344-2.318l4.835,2.781L669.62,9.055a1.34,1.34,0,0,1,2.323,1.336Z"
                  transform="translate(-655.623 -7.795)"
                  fill="#12a64f"
                  stroke="#014c6b"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-lg">{Data}</span> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
