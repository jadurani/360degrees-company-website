import React, { Dispatch, SetStateAction, useState } from "react";
import { StoryIndicator } from "@components/StoryIndicator/StoryIndicator";
import { StoryArrow } from "@components/StoryArrow/StoryArrow";
import Image from "next/image";
import mapPinIcon from "@assets/icons/map-pin.svg";

export interface StoryViewerProps {
  name: string;
  location: string;
  slug: string;
  /**
   * These are photo URLs
   */
  photoUrls: string[];
}


const setNextItemIdx = (
  currIdx: number,
  arrLength: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) => {
  const nextItemIdx = currIdx + 1;
  if (nextItemIdx < arrLength) {
    setSelectedOption(nextItemIdx);
    console.log(currIdx)
  } else {
    // reset to start
    setSelectedOption(0);
    console.log(currIdx)
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
    console.log(currIdx)
  } else {
    // reset to last
    setSelectedOption(lastItemIdx);
    console.log(currIdx)
  }
};


export const StoryViewer = ({ name, location, photoUrls }: StoryViewerProps) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const arrLength = photoUrls.length;

  return (
    <div className="relative w-full h-full">
      {/* Story Indicators */}
      <div className="absolute top-2 flex w-full gap-1 z-20 px-3">
        {photoUrls.map((url, index) => (
          <StoryIndicator
            key={index}
            idx={index}
            active={activeStoryIndex == index}
            onClick={(idx) => setActiveStoryIndex(idx)}
          />
        ))}
      </div>

      <div className="flex gap-1 top-4 font-body text-body2 absolute text-neutral-0 drop-shadow-xl px-3 z-20">
        <Image src={mapPinIcon} alt="map icon" />
        {location}
      </div>

      <div className="px-3 font-header font-bold text-neutral-0 drop-shadow-xl absolute z-20 bottom-3 text-h6">
        {name}
      </div>

      <div className="flex gap-1 absolute z-30 bottom-3 right-3">
        <StoryArrow direction="left" handleClick={() => setPrevItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)} />
        <StoryArrow direction="right" handleClick={() => setNextItemIdx(activeStoryIndex, arrLength, setActiveStoryIndex)} />
      </div>

      {/* Story content goes here */}
      <div className="relative w-full h-full">
        <div className="z-20 h-full w-full absolute"></div>
        <Image src={photoUrls[activeStoryIndex]} alt="header" fill className="z-10 object-contain lg:object-cover" />
      </div>
    </div>
  );
};
