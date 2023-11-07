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
      name: "Phoebe Baczynski",
      position: "Head of Finance and Admin Department",
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

export const COMPLETE_TESTIMONIALS = [
  {
    statement: `On behalf of Synergygroup Operations Inc, We would like to thank you, 360Degrees Systems Corporation for the outstanding work done for our office. Your professional and practical approach to detail and service has proved to be efficient. <span class="text-primary-500">You always kept me informed and you were very fair when unexpected issues came up. Your high-quality work and your excellent service gave us the results we expected. It is pricy but it paid off with high integrity, good quality, unique designs, and high value work.</span> We truly appreciate your commitment on this project, you proved to be wonderful at listening to our needs, understanding our priorities and communicating with us about our options. The quality and timeliness of the work was very good, your customer service skills are first-rate. It has been a pleasure to work with you again. We would recommend your company to anyone!`,
    person: {
      name: "Phoebe Baczynski",
      position: `Head of Finance and <br class="hidden lg:inline" />Admin Department`,
      company: "SynergyGroup Operations Inc.",
    },
  },
  {
    statement: `I am delighted to provide this testimonial for 360Degrees, our trusted general contractor. Our working relationship has been nothing short of exceptional. Their efficiency and speed of service are truly commendable. They consistently deliver projects on time and within budget, which is a testament to their dedication and professionalism.

    <span class="text-accent-500">What sets 360Degrees apart is their unparalleled workmanship. The attention to detail and the quality of their work are second to none. We have completed several successful projects together, and each one has exceeded our expectations.</span>

    I want to highlight the extraordinary service of the project manager assigned to us, Ms. Gen Somera. Her authentic care for us as their client and her keen attention to detail ensure that no stone is left unturned. Ms. Somera's dedication to our projects has been a driving force behind their success.

    Moreover, 360Degrees' commitment doesn't end with project turnover. They stand by their work and are always ready to address any concerns or issues that may arise.

    In summary, I can confidently say that 360Degrees is a top-tier general contractor, and Ms. Gen Somera's exceptional project management skills enhance their service even further. Their efficiency, workmanship, and post-turnover service make them a valuable partner in any construction project. I wholeheartedly recommend their services to anyone seeking excellence in construction.`,
    person: {
      name: "Christopher Cornejo",
      position: "APAC Facilities Manager",
      company: "Remitly, Inc.",
    },
  },
  {
    statement: `360Degrees has been a great vendor for all my previous fit-out projects. From the initial consultation to the final walkthrough, your company demonstrated professionalism, expertise, and teamwork that exceeded my expectations.

    <span class="font-semibold">Communication</span>: Throughout the project, your team maintained open and transparent communication. They listened attentively to the concerns, providing regular updates on the progress. This made us feel involved and confident in the project's success.

    <span class="font-semibold">Expertise</span>: <span class="text-accent-500">It was evident that your team possessed a deep understanding of design and construction. They consistently demonstrated craftsmanship and attention to detail, ensuring that every aspect of the project was executed to perfection.</span>

    <span class="font-semibold">Teamwork</span>: Your crew worked seamlessly together, showcasing their dedication and synergy. Evidently, they had a strong camaraderie, translating into efficient and practical work. Their ability to collaborate and problem-solve on the spot was truly remarkable.

    <span class="font-semibold">Timeliness</span>: The project was completed on time, which was a pleasant surprise given the complexity of the work involved. Your team's commitment to meeting deadlines was greatly appreciated and made a difference in our delivery of projects on time and within budget.

    <span class="font-semibold">Cleanliness</span>: Your crew took great care to maintain a tidy work environment.

    <span class="font-semibold">Respectful and Friendly</span>: Your team was not only highly skilled but also respectful and friendly. They were approachable and willing to address my questions or concerns throughout the project.

    Overall, my experience with your general contracting team was outstanding, and I couldn't be happier with the results. I would not hesitate to recommend your services to anyone seeking a reliable, skilled, dedicated contractor. Looking forward to more projects with your team.`,
    person: {
      name: "Bam Terol",
      position: "Senior Global Project Manager",
      company: "TOA Global",
    },
  },
  {
    statement: `Working with 360Degrees as our general contractor on our Office Buildout project was a great experience from start to finish. Their expertise in their field, as well as their professionalism and dedication to getting the job done, impressed us very much.

    They demonstrated a deep understanding of our vision of the office space since the initial consultation. They have captured well our requirements and provided valuable insights that made way for the improvement of the design and functionality of the space. During the entire project, they provided excellent and constant communication, keeping us updated on their progress, roadblocks if there are any, and necessary adjustments to close the gaps.

    <span class="text-primary-500">What was most remarkable was their commitment to staying on schedule and within budget. They coordinated all aspects of the project, from permits to punchlisting and project closure, they kept us informed at every stage, making the entire process smooth and stress-free.</span>

    Their attention to detail was evident in every aspect of the buildout, resulting in a finished office that perfectly aligns with our needs and brand identity.

    We recommend them to anyone seeking a partner for their office buildout needs. Their expertise transformed our vision into a reality, and we couldn't be happier with the outcome.`,
    person: {
      name: "Diesel Cristobal",
      position: "Director of Workplace Enablement",
      company: "Support Ninja",
    },
  },
  {
    statement: `Over the five years, our team in the Manila office has constantly expanded the portfolio, and the number of employees is continuously growing. In spite of this, we would like to utilize the existing facility instead of moving into a bigger space more practically by adding more seating capacity. Also, due to the pandemic, we have a hybrid setup that does not require reporting to the office very often.

    <span class="text-primary-500">Working with 360Degrees helped us strategize how to double up the original seating capacity from 43 while maintaining employee satisfaction with organized seating arrangements and office ergonomics. The employees love the moveable desk despite the changes from a big working table to a smaller size, half-size from the original. Also, the modified seating arrangement fits the team for collaboration and communication in the office.</span>

    During the construction, the communication with 360Degrees really worked well. They are very cooperative and responsive to all our questions. They have provided the essential needs we requested. Also, they meet the lead time of the turnover based on the agreement despite the minor issues of the outcome.

    Opportunities for improvement to 360Degrees:
    I am looking forward to 306Degrees still being cooperative and responsive even if the project has already been turned in, especially if the contract is still under warranty and the project is still within validity. The additional constructions should be at a reasonable cost.

    Overall, we are pleased with the outcome.`,
    person: {
      name: "Marivic Pagdonsolan",
      position: "Manager | Manila GBS Engineering",
      company: "Weir ESCO",
    },
  },
  {
    statement: `I've had the pleasure of working with 360Degrees since 2015 and I can say that it has been one of the most fulfilling and productive partnerships I have ever had in my career.

    <span class="text-primary-500">Their team was instrumental in the completion of over 10 builds and 10,000's of sqm throughout the Philippines. I've also tapped them multiple times for build consultations in Taiwan, Malaysia, Europe, and North America.</span>

    360Degrees brings a unique blend of creativity, efficiency, excellence of execution, accountability, and consistency that makes working with them a pleasure.

    Above all else, 360Degrees is a true partner. They care deeply about their business but also for their clients. They have the humility to admit when they've made a mistake, the character to fix it, and the courage to confront when they believe there is a better path forward.

    Needless to say, I recommend them wholeheartedly and look forward to working with them many more times in the future.`,
    person: {
      name: "David Ford",
      position: "VP of Capital Investments",
      company: "Athena",
    },
  },
];
