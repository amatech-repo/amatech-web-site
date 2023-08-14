import { Member } from "./index";

export default {
  title: "./Components/Member",
  component: Member,
};

const Template = (args) => <Member {...args} />;
export const Default = Template.bind({});
Default.args = {
  imagePath: "/icons/sample.svg",
  name: "あまてく　太郎",
  role: "代表",
  grade: "2回生",
  twitter: "",
  instagram: "",
  github: "",
};
