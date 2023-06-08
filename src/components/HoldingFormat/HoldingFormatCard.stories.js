import { HoldingFormatCard } from "./HoldingFormatCard";

// const {discordLogo, holdingFormat, image, place, time } = props;

export default {
  title: "Components/HoldingFormat/HoldingFormatCard",
  component: HoldingFormatCard,
  argTypes: {
    discordLogo: { control: "text" },
    holdingFormat: { control: "text" },
    image: { control: "text" },
    place: { control: "text" },
    time: { control: "text" },
  },
};

const Template = (args) => <HoldingFormatCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  discordLogo: "./icons/discord.svg",
  holdingFormat: "Holding Format",
  image: "./images/online.svg",
  place: "会場",
  time: "時間",
};
