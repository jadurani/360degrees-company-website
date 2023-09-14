import type { Meta, StoryObj } from "@storybook/react";
import { StoryArrow } from "./StoryArrow";

const meta = {
  title: "StoryArrow",
  component: StoryArrow
} satisfies Meta<typeof StoryArrow>

export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    direction: 'left'
  }
};

export const Right: Story = {
  args: {
    direction: 'right'
  }
};
