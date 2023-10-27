import { FAQ } from "./FAQ";
import { FAQList } from "./FAQList";

export default {
  title: "./Components/FAQcomponents",
  component: FAQ,

  argTypes: {
    imagePath: { control: "text" },
  },
};

const Template = (args) => <FAQ {...args} />;
export const Default = Template.bind({});
// ここでimageどうするかみたいな
Default.args = {
  imagePath: "/images/FAQ1.svg",
  isRight: false,
};

const FAQstate = [
  {
    imagePath: "/images/FAQ1.svg",
    isRight: false,
  },
  {
    imagePath: "/images/FAQ2.svg",
    isRight: true,
  },
  {
    imagePath: "/images/FAQ3.svg",
    isRight: false,
  },
  {
    imagePath: "/images/FAQ4.svg",
    isRight: true,
  },
];

const ListTemplate = (args) => <FAQList {...args} />;
export const List = ListTemplate.bind({});

List.args = {
  faqs: FAQstate,
};
