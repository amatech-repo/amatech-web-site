import { WeekCard } from "./WeekCard";

export default {
  title: "Components/HoldingFormat/WeekCard",
  component: WeekCard,
  argTypes: {
    holdingWeek: {
      control: {
        type: "select",
        options: ["毎週", "第1週", "第2週", "第3週", "第4週"],
      },
    },
    dayOfWeek: {
      control: {
        type: "select",
        options: [
          "月曜日",
          "火曜日",
          "水曜日",
          "木曜日",
          "金曜日",
          "土曜日",
          "日曜日",
        ],
      },
    },
    text: {
      control: {
        type: "text",
        defaultValue: "対面・オンラインで毎週交互に開催しています！",
      },
    },
  },
};

const Template = (args) => <WeekCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  holdingWeek: "毎週",
  dayOfWeek: "月曜日",
  text: "対面・オンラインで毎週交互に開催しています！",
};
