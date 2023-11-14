import Image from "next/image";
import { FAQ, FAQType } from "./FAQ";
import React from "react";

type FAQs = {
  faqs: FAQType[];
};

export const FAQList = ({ faqs }: FAQs) => {
  return (
    <div className="mx-6 flex flex-col space-y-4 sm:space-y-6">
      {faqs.map((faq, i) => (
        <FAQ key={i} {...faq} flipped={i % 2 === 0 ? false : true} />
      ))}
    </div>
  );
};
