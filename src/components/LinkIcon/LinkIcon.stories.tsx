import type { Meta, StoryObj } from "@storybook/react";

import LinkIcon from "./index";

const meta: Meta<typeof LinkIcon> = {
  title: "./Components/LinkIcon",
  component: LinkIcon,
};

export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const Primary: Story = {
  args: {
    url: "https://twitter.com/amatech1006",
    img: "/icons/twitter.svg",
    alt: "Twitter",
  },
};
