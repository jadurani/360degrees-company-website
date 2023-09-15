import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";

const meta = {
  title: "NavMenu",
  component: NavMenu
} satisfies Meta<typeof NavMenu>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story | any = {};
