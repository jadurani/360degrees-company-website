import type { Meta, StoryObj } from "@storybook/react";
import { ProjectThumbnail } from "./ProjectThumbnail";

const meta = {
  title: "ProjectThumbnail",
  component: ProjectThumbnail
} satisfies Meta<typeof ProjectThumbnail>

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectSample: Story = {
  args: {
    bgImageSrc: '/images/page-header/about-us.jpg',
    title: 'Project Title',
    location: 'Location'
  },
  decorators: [
    (Story) => (
      <div className="w-60 h-60">
        <Story />
      </div>
    )
  ]
};
