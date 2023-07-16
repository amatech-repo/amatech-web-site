import { HomepageTop } from "./HomepageTop";

export default {
  title: "./Components/HomepageTop",
  component: HomepageTop,
  //   ここでpropsみたいなのを定義
  argTypes: {
    imagePath1: { control: "text" },
    imagePath2: { control: "text" },
    imagePath3: { control: "text" },
  },
};

const Template = (args) => <HomepageTop {...args} />;
export const Default = Template.bind({});
// ここでimageどうするかみたいな
Default.args = {
  imagePath1: "/logo/amatech.svg",
  imagePath2: "/icons/material-symbols_arrow-right-rounded.svg",
  imagePath3: "/background/Group 87.svg",
};
