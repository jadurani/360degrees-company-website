import type { Meta, StoryObj } from "@storybook/react";
import { StoryViewer } from "./StoryViewer";
import { COMPLETED_PROJECTS } from "@app/projects/completed-projects.constant";

const meta = {
  title: "StoryViewer",
  component: StoryViewer,
  decorators: [
    (Story) => (
      <div className="w-screen h-screen lg:w-[640px] lg:h-[480px] lg:p-8">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof StoryViewer>

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectLumina: Story = {
  args: {
    name: 'Project Lumina',
    location: 'Imus, Cavite',
    photoUrls: [
      '/images/project-lumina/lumina-0.png',
      '/images/project-lumina/lumina-1.png',
      '/images/project-lumina/lumina-2.png',
    ],
  }
};

export const ProjectSupima: Story = {
  args: COMPLETED_PROJECTS[5],
}
