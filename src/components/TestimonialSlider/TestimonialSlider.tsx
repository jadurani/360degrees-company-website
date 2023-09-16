"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  Testimonial,
  TestimonialProps,
} from "@components/Testimonial/Testimonial";

interface TestimonialSliderProps {
  testiList: TestimonialProps[];
}

const setNextItemIdx = (
  currIdx: number,
  arrLength: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) => {
  const nextItemIdx = currIdx + 1;
  if (nextItemIdx < arrLength) {
    setSelectedOption(nextItemIdx);
  }
};

const setPrevItemIdx = (
  currIdx: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) => {
  const nextItemIdx = currIdx - 1;
  if (nextItemIdx >= 0) {
    setSelectedOption(nextItemIdx);
  }
};

export const TestimonialSlider = ({
  testiList = [],
}: TestimonialSliderProps) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const isFirstItem = selectedOption === 0
  const isLastItem = selectedOption + 1 === testiList.length

  return (
    <div className="h-fit flex items-center justify-center relative">
      <div className={`flex items-center ${ isFirstItem ? 'invisible' : '' }`}>
        <button
          onClick={() => setPrevItemIdx(selectedOption, setSelectedOption)}
          className="text-h4 text-neutral-0 hover:bg-neutral-50/50 transition-colors p-4 rounded-full w-10 h-10 flex items-center justify-center">
          ‹
        </button>
      </div>

      <ol className="mx-2">
        {testiList?.map((testi, idx) => (
          <li key={idx} hidden={idx != selectedOption}>
            <Testimonial person={testi.person} statement={testi.statement} />
          </li>
        ))}
      </ol>

      <div className={`flex items-center ${ isLastItem ? 'invisible' : '' }`}>
        <button
          onClick={() => setNextItemIdx(selectedOption, testiList.length, setSelectedOption)}
          className="text-h4 text-neutral-0 hover:bg-neutral-50/50 transition-colors p-4 rounded-full w-10 h-10 flex items-center justify-center">
          ›
        </button>
      </div>
    </div>
  );
};
