import { SNS } from "./index";
import { SNSList } from "./SNSList";

export default {
  title: "./Components/SNS",
  component: SNS,
};

const snsstate = [
  {
    snsImagePath: "/icons/TwitterCard.svg",
    snsLink: "https://twitter.com/amatech1006",
    alt: "twitter",
  },
  {
    snsImagePath: "/icons/GithubCard.svg",
    snsLink: "https://github.com/amatech1006",
    alt: "Github",
  },
  {
    snsImagePath: "/icons/QiitaCard.svg",
    snsLink: "https://qiita.com/organizations/amatech",
    alt: "Qitta",
  },
];

const Template = (args) => <SNS {...args} />;
export const Default = Template.bind({});
Default.args = {
  snsImagePath: "/icons/TwitterCard.svg",
  snsLink: "https://twitter.com/amatech1006",
  alt: "twitter",
};

const ListTemplate = (args) => <SNSList {...args} />;
export const List = ListTemplate.bind({});

List.args = {
  snss: snsstate,
};
