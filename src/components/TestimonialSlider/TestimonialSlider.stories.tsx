import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialSlider } from "./TestimonialSlider";

const meta = {
  title: "TestimonialSlider",
  component: TestimonialSlider
} satisfies Meta<typeof TestimonialSlider>

export default meta;

type Story = StoryObj<typeof meta>;

const SAMPLE_TESTIMONIAL_1 = {
  person: {
    name: 'Julie Ann San Jose',
    position: 'Position',
    company: 'Company'
  },
  date: '10 March 2015',
  statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate nibh nec nulla aliquam, at luctus ligula accumsan. Integer ullamcorper massa at ligula volutpat, at mollis sapien congue. Integer ullamcorper massa at ligula congue.'
};

const SAMPLE_TESTIMONIAL_2 = {
  person: {
    name: 'Jadurani Davalos',
    company: 'Company'
  },
  date: '10 March 2015',
  statement: 'Sed volutpat convallis ipsum non aliquet. Integer cursus vitae mi ut lobortis. Sed efficitur viverra dolor ac ultrices. Cras in egestas elit, vitae fringilla nunc.'
};

const SAMPLE_TESTIMONIAL_3 = {
  person: {
    name: 'Stell Ajero',
    position: 'Position',
    company: 'Company'
  },
  date: '10 March 2015',
  statement: 'Donec maximus tellus mauris, ac imperdiet ex ultricies sit amet. Suspendisse potenti. Vestibulum rutrum, risus id tempus porttitor, tortor neque luctus leo, in porta erat quam id sem. Etiam vel nibh vehicula, bibendum justo at, tincidunt mi. Nam ut vulputate metus, vitae interdum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec velit sit amet est ornare elementum id quis lorem. Nulla at est felis. Nam tempor nunc vitae risus elementum, pretium finibus metus rhoncus. Suspendisse potenti. Suspendisse vestibulum, purus nec efficitur ultrices, nunc diam viverra dolor, accumsan pharetra tellus diam vitae elit. Vestibulum id quam ullamcorper, tristique diam a, convallis purus.'
};

export const SAMPLE_TESTIMONIAL_LIST = [
  SAMPLE_TESTIMONIAL_1,
  SAMPLE_TESTIMONIAL_2,
  SAMPLE_TESTIMONIAL_3
]

export const SampleTestimonial: Story = {
  args: {
    testiList: SAMPLE_TESTIMONIAL_LIST
  },
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    )
  ]
};
