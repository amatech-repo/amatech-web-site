import { NewsCard } from "./NewsCard";
import { NewsList } from "./NewsList";

export default {
  title: "./Components/News",
  component: NewsCard,
  //   ここでpropsみたいなのを定義
  argTypes: {
    imagePath: { control: "text" },
  },
};

const newsListState = [
  {
    title: "関西ビギナーズハッカソン開催！",
    place: "Tomosuba河原町店",
    day: "2/28",
    imageMaruPath: "/icons/DayMaru.svg",
    imageNewsPath: "/icons/newsLeft.svg",
    isRight: false,
  },
  {
    title: "関西ビギナーズハッカソン開催！",
    place: "Tomosuba河原町店",
    day: "2/28",
    imageMaruPath: "/icons/DayMaru.svg",
    imageNewsPath: "/icons/newsRight.svg",
    isRight: true,
  },
  {
    title: "関西ビギナーズハッカソン開催！",
    place: "Tomosuba河原町店",
    day: "2/28",
    imageMaruPath: "/icons/DayMaru.svg",
    imageNewsPath: "/icons/newsLeft.svg",
    isRight: false,
  },
  {
    title: "関西ビギナーズハッカソン開催！",
    place: "Tomosuba河原町店",
    day: "2/28",
    imageMaruPath: "/icons/DayMaru.svg",
    imageNewsPath: "/icons/newsRight.svg",
    isRight: true,
  },
];

const Template = (args) => <NewsCard {...args} />;
export const Default = Template.bind({});
// ここでimageどうするかみたいな
Default.args = {
  title: "関西ビギナーズハッカソン開催！",
  place: "Tomosuba河原町店",
  day: "2/28",
  imageMaruPath: "/icons/DayMaru.svg",
  imageNewsPath: "/icons/newsRight.svg",
  isRight: true,
};

const ListTemplate = (args) => <NewsList {...args} />;
export const List = ListTemplate.bind({});

List.args = {
  newsCards: newsListState,
};
