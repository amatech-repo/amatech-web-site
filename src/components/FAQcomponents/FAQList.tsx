import Image from "next/image";
import { FAQ } from "./FAQ";

type FAQ = {
  q: string;
  a: string;
  emoji: string;
  flipped?: boolean;
};

type FAQs = {
  faqs: FAQ[];
};

export const FAQList = ({ faqs }: FAQs) => {
  return (
    <div className="flex flex-col mx-6 space-y-4 sm:space-y-6">
      {faqs.map((faq, i) => (
        <FAQ key={i} {...faq} flipped={i % 2 === 0 ? false : true} />
      ))}
    </div>
  );
};
