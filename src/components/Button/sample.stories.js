import { Button } from "./sample";

export default {
  title: "./Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
