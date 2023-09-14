import type { Meta, StoryObj } from "@storybook/react";
import { Fact } from "./Fact";

const meta = {
  title: "Fact",
  component: Fact
} satisfies Meta<typeof Fact>

export default meta;

type Story = StoryObj<typeof meta>;

export const CoreValue: Story = {
  args: {
    color: 'accent',
    bgNum: '01',
    title: 'Innovation',
    description: 'We believe in continuously evolving and improving our techniques, tools, and strategies to provide unique and creative construction solutions.'
  }
};

export const Offering: Story = {
  args: {
    color: 'primary',
    bgNum: '01',
    title: 'Acoustic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget augue at lorem cursus ultrices a finibus enim. Fusce blandit sem odio, ut maximus turpis tempor sed.',
  }
};
