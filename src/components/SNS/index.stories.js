import { SNS } from "./index";

export default {
  title: "./Components/SNS",
  component: SNS,
};

const Template = (args) => <SNS {...args} />;
export const Default = Template.bind({});
Default.args = {
  sns: "twitter",
  snsID: "",
};
