import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";

const meta = {
  title: "NavBar",
  component: NavBar
} satisfies Meta<typeof NavBar>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story | any = {};
