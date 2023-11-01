"use client";

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

export const StoryViewer = ({
  name,
  location,
  photoUrls,
}: StoryViewerProps) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const arrLength = photoUrls.length;

  return (
    <div className="relative w-full h-full">
      {/* Story Indicators */}
      <div className="absolute top-2 flex w-full gap-1 z-40 px-3">
        {photoUrls.map((url, index) => (
          <StoryIndicator
            key={index}
            idx={index}
            active={activeStoryIndex == index}
            handleClick={(idx) => setActiveStoryIndex(idx)}
          />
        ))}
      </div>

      <div className="flex gap-1 top-5 font-body text-body2 absolute text-neutral-0 px-3 z-20">
        <Image src={mapPinIcon} alt="map icon" />
        <span style={{ textShadow: "0px 0px 16px #231F20" }}>{location}</span>
      </div>

      <div
        className="px-3 font-header font-bold text-neutral-0 absolute z-40 bottom-3 my-2 text-h6 lg:text-h4"
        style={{ textShadow: "0px 0px 16px #231F20" }}>
        {name}
      </div>

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
      <div className="relative w-full h-full">
        <div className="z-20 h-full w-full absolute"></div>
        {photoUrls.map((photoUrl, idx) => (
          <Image
            key={idx}
            hidden={idx != activeStoryIndex}
            src={photoUrl}
            alt="header"
            fill
            sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 1024px"
            className="z-10 object-contain lg:object-cover"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};
