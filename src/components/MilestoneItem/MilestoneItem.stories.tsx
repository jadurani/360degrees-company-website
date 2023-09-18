import type { Meta, StoryObj } from "@storybook/react";
import { MilestoneItem } from "./MilestoneItem";

const meta = {
  title: "MilestoneItem",
  component: MilestoneItem
} satisfies Meta<typeof MilestoneItem>

export default meta;

type Story = StoryObj<typeof meta>;

export const Year2010: Story = {
  args: {
    year: '2010',
    direction: 'right',
    mainEvent: 'Company was founded',
    otherEvents: ['Signed first fit-out project for a 2,000 sqm Cebu site']
  }
};

export const Year2011: Story = {
  args: {
    year: '2011',
    direction: 'left',
    mainEvent: 'Purchased first delivery truck'
  }
};
