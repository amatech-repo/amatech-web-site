import { SponsorLogo } from "./SponsorLogo";

export default {
  title: "./Components/Sponsors",
  component: SponsorLogo,
  //   ここでpropsみたいなのを定義
  argTypes: {
    imagePath: { control: "text" },
  },
};

const Template = (args) => <SponsorLogo {...args} />;
export const Default = Template.bind({});
// ここでimageどうするかみたいな
Default.args = {
  imagePath: "/logo/vega.svg",
};
