import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialSlider } from "./TestimonialSlider";

const meta = {
  title: "TestimonialSlider",
  component: TestimonialSlider,
} satisfies Meta<typeof TestimonialSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

const SAMPLE_TESTIMONIAL_1 = {
  person: {
    name: "Julie Ann San Jose",
    position: "Position",
    company: "Company",
  },
  date: "10 March 2015",
  statement:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate nibh nec nulla aliquam, at luctus ligula accumsan. Integer ullamcorper massa at ligula volutpat, at mollis sapien congue. Integer ullamcorper massa at ligula congue.",
};

const SAMPLE_TESTIMONIAL_2 = {
  person: {
    name: "Jadurani Davalos",
    company: "Company",
  },
  date: "10 March 2015",
  statement:
    "Sed volutpat convallis ipsum non aliquet. Integer cursus vitae mi ut lobortis. Sed efficitur viverra dolor ac ultrices. Cras in egestas elit, vitae fringilla nunc.",
};

const SAMPLE_TESTIMONIAL_3 = {
  person: {
    name: "Stell Ajero",
    position: "Position",
    company: "Company",
  },
  date: "10 March 2015",
  statement:
    "Donec maximus tellus mauris, ac imperdiet ex ultricies sit amet. Suspendisse potenti. Vestibulum rutrum, risus id tempus porttitor, tortor neque luctus leo, in porta erat quam id sem. Etiam vel nibh vehicula, bibendum justo at, tincidunt mi. Nam ut vulputate metus, vitae interdum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec velit sit amet est ornare elementum id quis lorem. Nulla at est felis. Nam tempor nunc vitae risus elementum, pretium finibus metus rhoncus. Suspendisse potenti. Suspendisse vestibulum, purus nec efficitur ultrices, nunc diam viverra dolor, accumsan pharetra tellus diam vitae elit. Vestibulum id quam ullamcorper, tristique diam a, convallis purus.",
};

const SAMPLE_TESTIMONIAL_LIST = [
  SAMPLE_TESTIMONIAL_1,
  SAMPLE_TESTIMONIAL_2,
  SAMPLE_TESTIMONIAL_3,
];

export const SampleTestimonial: Story = {
  args: {
    testiList: SAMPLE_TESTIMONIAL_LIST,
  },
  decorators: [
    (Story) => (
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
};

export const TESTIMONIALS = [
  {
    statement:
      "What sets 360Degrees apart is their unparalleled workmanship. The attention to detail and the quality of their work are second to none. We have completed several successful projects together, and each one has exceeded our expectations.",
    person: {
      name: "Christopher Cornejo",
      position: "APAC Facilities Manager",
      company: "Remitly, Inc.",
    },
  },
  {
    statement:
      "It was evident that your team possessed a deep understanding of design and construction. They consistently demonstrated craftsmanship and attention to detail, ensuring that every aspect of the project was executed to perfection.",
    person: {
      name: "Bam Terol",
      position: "Senior Global Project Manager",
      company: "TOA Global",
    },
  },
  {
    statement:
      "You always kept me informed and you were very fair when unexpected issues came up. Your high-quality work and your excellent service gave us the results we expected. It is pricy but it paid off with high integrity, good quality, unique designs, and high value work.",
    person: {
      name: "Phoebe",
      company: "SynergyGroup Operations Inc.",
    },
  },
  {
    statement:
      "The employees love the moveable desk despite the changes from a big working table to a smaller size, half-size from the original. Also, the modified seating arrangement fits the team for collaboration and communication in the office.",
    person: {
      name: "Marivic Pagdonsolan",
      position: "Manager",
      company: "Weir ESCO",
    },
  },
  {
    statement:
      "Their team was instrumental in the completion of over 10 builds and 10,000's of sqm throughout the Philippines. I've also tapped them multiple times for build consultations in Taiwan, Malaysia, Europe, and North America.",
    person: {
      name: "David Ford",
      position: "VP of Capital Investments",
      company: "Athena",
    },
  },
  {
    statement:
      "What was most remarkable was their commitment to staying on schedule and within budget. They coordinated all aspects of the project, from permits to punchlisting and project closure, they kept us informed at every stage, making the entire process smooth and stress-free.",
    person: {
      name: "Diesel Cristobal",
      position: "Director of Workplace Enablement",
      company: "Support Ninja",
    },
  },
];
