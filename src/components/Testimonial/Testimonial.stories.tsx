import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "./Testimonial";

const meta = {
  title: "Testimonial",
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleTestimonial: Story = {
  args: {
    person: {
      name: "Jadurani Davalos",
      company: "Company",
    },
    date: "10 March 2015",
    statement:
      "Sed volutpat convallis ipsum non aliquet. Integer cursus vitae mi ut lobortis. Sed efficitur viverra dolor ac ultrices. Cras in egestas elit, vitae fringilla nunc.",
  },
  decorators: [
    (Story) => (
      <div className="p-16">
        <Story />
      </div>
    ),
  ],
};
