import { Admin } from "./index";

export default {
  title: "./Components/Admin",
  component: Admin,
};

const Template = (args) => <Admin {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "あまてく　太郎",
  role: "代表",
  grade: "2回生",
};
