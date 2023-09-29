import type { Meta, StoryObj } from "@storybook/react";
import { StoryViewer } from "./StoryViewer";

const meta = {
  title: "StoryViewer",
  component: StoryViewer
} satisfies Meta<typeof StoryViewer>

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleProject: Story = {
  args: {
    name: 'Project Lumina',
    location: 'Imus, Cavite',
    photoUrls: [
      '/images/project-lumina/lumina-0.png',
      '/images/project-lumina/lumina-1.png',
      '/images/project-lumina/lumina-2.png',
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[640px] h-[480px] p-8">
        <Story />
      </div>
    )
  ]
};
