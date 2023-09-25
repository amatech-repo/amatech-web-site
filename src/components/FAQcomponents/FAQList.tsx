import Image from "next/image";
import { FAQ } from "./FAQ";

type FAQ = {
  imagePath: string;
  isRight: boolean;
};

type FAQs = {
  faqs: FAQ[];
};

export const FAQList = ({ faqs }: FAQs) => {
  return (
    <div className="w-[1001px] h-[998px]">
      {faqs.map((faq, index) => (
        <FAQ key={index} imagePath={faq.imagePath} isRight={faq.isRight} />
      ))}
    </div>
  );
};
