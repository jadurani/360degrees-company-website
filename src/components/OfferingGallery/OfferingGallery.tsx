"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { StoryArrow } from "@components/StoryArrow/StoryArrow";
import Image from "next/image";
import { ImageProps } from "@lib/generateBlurPlaceholder";

export interface OfferingGalleryProps {
  slug: string;
  photos: ImageProps[];
}

const setNextItemIdx = (
  currIdx: number,
  arrLength: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) => {
  const nextItemIdx = currIdx + 1;
  if (nextItemIdx < arrLength) {
    setSelectedOption(nextItemIdx);
  } else {
    // reset to start
    setSelectedOption(0);
  }
};

const setPrevItemIdx = (
  currIdx: number,
  arrLength: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) => {
  const nextItemIdx = currIdx - 1;
  const lastItemIdx = arrLength - 1;
  if (nextItemIdx >= 0) {
    setSelectedOption(nextItemIdx);
  } else {
    // reset to last
    setSelectedOption(lastItemIdx);
  }
};

export const OfferingGallery = (props: OfferingGalleryProps) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const { photos } = props;
  const arrLength = photos.length;

  return (
    <div className="relative w-full h-full">
      {/* Navigation by arrow */}
      <div className="flex gap-1 absolute z-40 bottom-3 right-3 ">
        <StoryArrow
          direction="left"
          handleClick={() =>
            setPrevItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)
          }
        />
        <StoryArrow
          direction="right"
          handleClick={() =>
            setNextItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)
          }
        />
      </div>

      {/* Navigation by edge taps - mobile only */}
      <button
        className="top-0 left-0 absolute z-30 h-full w-32 bg-transparent"
        onClick={() =>
          setPrevItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)
        }></button>
      <button
        className="top-0 right-0 absolute z-30 h-full w-32 bg-transparent"
        onClick={() =>
          setNextItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)
        }></button>

      {/* Story content goes here */}
      <div className="relative w-full min-h-[500px] lg:min-h-full">
        <div className="z-20 h-full w-full absolute"></div>
        {photos.map((photo, idx) => (
          <Image
            key={idx}
            hidden={idx != activeStoryIndex}
            {...photo}
            placeholder="blur"
            alt="header"
            fill
            className="z-10 object-cover"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};
