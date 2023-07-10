import { Member } from "./index";
import { MemberList } from "./list";

export default {
  title: "./Components/Member",
  component: Member,
};

const mocks = [
  {
    imagePath: "/icons/sample.svg",
    name: "あまてく　太郎",
    role: "代表",
    grade: "2回生",
    twitter: "",
    instagram: "",
    github: "maple-fm",
  },
  {
    imagePath: "/icons/sample.svg",
    name: "あまてく　太郎2",
    role: "副代表",
    grade: "1回生",
    twitter: "",
    instagram: "",
    github: "maple-fm",
  },
  {
    imagePath: "/icons/sample.svg",
    name: "あまてく　太郎2",
    role: "副代表",
    grade: "1回生",
    twitter: "",
    instagram: "",
    github: "maple-fm",
  },
];

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

// TODO: Storybook内でオブジェクトの修正ができない
const ListTemplate = (args) => <MemberList {...args} />;
export const List = ListTemplate.bind({});

List.args = {
  members: mocks,
};
