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
    <div className="w-full h-[998px] flex flex-col justify-center mx-3">
      {faqs.map((faq, index) => (
        <FAQ key={index} imagePath={faq.imagePath} isRight={faq.isRight} />
      ))}
    </div>
  );
};
