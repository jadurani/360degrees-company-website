import Image from "next/image";
import quoteIcon from "@assets/icons/quote.svg";

type Person = {
  name: string;
  position?: string;
  company?: string;
};

export interface TestimonialProps {
  person: Person;
  date?: string;
  src?: string;
  statement: string;
}

const getStatementEl = (statement: string) => (
  <div className="relative basis-3/4">
    <div className="relative z-10 text-justify px-4 whitespace-pre-line">{statement}</div>
    <Image src={quoteIcon} alt="quote" className="absolute z-0 top-0 left-0" />
  </div>
);

export const Testimonial = (props: TestimonialProps) => {
  const { person, date, statement } = props;
  const longTestimonial = statement.length >= 300; // kind of random limit based on the sample short testimonials Rachel gave me

  return (
    <div className="w-full h-full bg-neutral-100 rounded p-6 font-body flex flex-col lg:flex-row-reverse gap-4">
      {getStatementEl(statement)}
      <ul className={`text-center ${longTestimonial ? 'lg:self-start' : 'self-center'} lg:text-right lg:basis-1/3`}>
        <li className="font-bold">{person.name}</li>
        {person.position && <li className="text-body1">{person.position}</li>}
        {person.company && <li className="text-body1">{person.company}</li>}
        {date && <li>{date}</li>}
      </ul>
    </div>
  );
};
