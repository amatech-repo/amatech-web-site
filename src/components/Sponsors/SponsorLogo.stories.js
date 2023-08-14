import { SponsorLogo } from "./SponsorLogo";
import { SponsorLogoList } from "./SponsorLogoList";

export default {
  title: "./Components/SponsorLogo",
  component: SponsorLogo,
  //   ここでpropsみたいなのを定義
  argTypes: {
    imagePath: { control: "text" },
  },
};

const sponsorstate = [
  {
    imagePath: "/logo/vega.svg",
  },
  {
    imagePath: "/logo/techTrain.svg",
  },
  {
    imagePath: "/logo/tomosube.svg",
  },
];

const Template = (args) => <SponsorLogo {...args} />;
export const Default = Template.bind({});
// ここでimageどうするかみたいな
Default.args = {
  imagePath: "/logo/vega.svg",
};

const ListTemplate = (args) => <SponsorLogoList {...args} />;
export const List = ListTemplate.bind({});

List.args = {
  sponsors: sponsorstate,
};
