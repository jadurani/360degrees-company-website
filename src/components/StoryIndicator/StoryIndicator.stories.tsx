import type { Meta, StoryObj } from "@storybook/react";
import { StoryIndicator } from "./StoryIndicator";

const meta = {
  title: "StoryIndicator",
  component: StoryIndicator
} satisfies Meta<typeof StoryIndicator>

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
    idx: 1,
    handleClick: (idx) => alert(idx)
  }
};

export const Inactive: Story = {
  args: {
    active: false,
    idx: 2,
    handleClick: (idx) => alert(idx)
  }
};
