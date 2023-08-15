import { Header } from "./index";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {};
