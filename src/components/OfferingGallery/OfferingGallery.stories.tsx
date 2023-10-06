import type { Meta, StoryObj } from "@storybook/react";
import { OfferingGallery } from "./OfferingGallery";
import { OFFERINGS } from "@app/what-we-do/offerings.constant";

const meta = {
  title: "OfferingGallery",
  component: OfferingGallery,
  decorators: [
    (Story) => (
      <div className="w-screen h-screen lg:w-[640px] lg:h-[480px] lg:p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OfferingGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OfferingAcoustic: Story = {
  args: {...OFFERINGS[0]},
};

export const OfferingSeating: Story = {
  args: {...OFFERINGS[3]},
};
