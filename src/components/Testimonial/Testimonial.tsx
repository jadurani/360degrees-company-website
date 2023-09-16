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
  <div className="relative">
    <div className="relative z-10 text-center lg:text-left lg:px-4">{statement}</div>
    <Image src={quoteIcon} alt="quote" className="absolute z-0 top-0 left-0" />
  </div>
);

const getPositionAndCompanyStr = (person: Person) => {
  if (person.company && person.position) {
    return `${person.position}, ${person.company}`
  }

  if (person.company) {
    return person.company
  }

  if (person.position) {
    return person.position
  }

  return null
}

export const Testimonial = (props: TestimonialProps) => {
  const { person, date, statement } = props;

  const positionCompany = getPositionAndCompanyStr(person);
  return (
    <div className="w-full h-full bg-neutral-50 rounded p-6 font-body flex flex-col lg:flex-row-reverse gap-4 max-w-2xl">
      {getStatementEl(statement)}
      <ul className="text-center self-center lg:text-right lg:w-4/5">
        <li className="font-bold">{person.name}</li>
        {positionCompany && <li>{positionCompany}</li>}
        {date && <li>{date}</li>}
      </ul>
    </div>
  );
};
