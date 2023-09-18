import type { Meta, StoryObj } from "@storybook/react";
import { Person } from "./Person";

const meta = {
  title: "Person",
  component: Person
} satisfies Meta<typeof Person>

export default meta;

type Story = StoryObj<typeof meta>;

export const RafaelaSantos: Story = {
  args: {
    name: 'Rafaela Santos',
    title: 'Co-Founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc tortor, viverra ut aliquam id, aliquam vitae enim.',
    photoSrc: '/images/unsplash_92z4a5V7y4I.png',
    website: 'https://www.360degreessystemscorporation.com/',
    instagram: 'http://instagram.com/',
    linkedin: 'https://linkedin.com/',
    email: 'info@360degrees.com.ph'
  }
};