import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./Testimonial";

const meta = {
  title: "Testimonial",
  component: Testimonial
} satisfies Meta<typeof Testimonial>

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleTestimonial: Story = {
  args: {
    person: {
      name: 'Full Name',
      position: 'Position',
      company: 'Company'
    },
    date: '10 March 2015',
    statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate nibh nec nulla aliquam, at luctus ligula accumsan. Integer ullamcorper massa at ligula volutpat, at mollis sapien congue. Integer ullamcorper massa at ligula congue.'
  },
  decorators: [
    (Story) => (
      <div className="p-16">
        <Story />
      </div>
    )
  ]
};
