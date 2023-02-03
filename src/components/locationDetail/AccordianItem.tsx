import * as React from "react";
import RtfConverter from "@yext/rtf-converter";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type props = {
  propsFaq: any;
};

const AccordionItem = (props: props) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const { propsFaq } = props;
  // console.log("propsFaq====>", propsFaq);
  return (
    <div className="accordion" id="accordionExample">
      {propsFaq.map((faqData: any , index: number) => {
        return (
          <Fragment>
            <Accordion open={open === index +1}>
              <AccordionHeader onClick={() => handleOpen(index + 1)}>
                {faqData?.question}
              </AccordionHeader>
              <AccordionBody>{faqData?.answer}</AccordionBody>
            </Accordion>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AccordionItem;
