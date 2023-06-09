import { SessionTitle } from "./SessionTitle";
export default {
  title: "SessionTitle",
  component: SessionTitle,
  argTypes: {
    title: { control: "text" },
    label: { control: "text" },
    imagePath: { control: "text" },
  },
};

const Template = (args) => <SessionTitle {...args} />;

export const Small = Template.bind({});
Small.args = {
  title: "FAQ",
  label: "よくある質問",
  imagePath: "bg-small",
};

export const Medium = Template.bind({});
Medium.args = {
  title: "Admin",
  label: "運営メンバー",
  imagePath: "bg-medium",
};

export const Large = Template.bind({});
Large.args = {
  title: "Sponsors",
  label: "協賛・スポンサー企業",
  imagePath: "bg-large",
};
