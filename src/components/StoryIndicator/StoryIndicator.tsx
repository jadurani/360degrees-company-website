import React from 'react';

interface StoryIndicatorProps {
  active: boolean;
  idx: number;
  handleClick: (idx: number) => void;
}

export const StoryIndicator = ({ active, idx, handleClick }: StoryIndicatorProps) => {
  return (
    <button
      onClick={() => handleClick(idx)}
      className={`w-full h-1 rounded-full transition-colors ${
        active ? 'bg-neutral-0/80' : 'bg-neutral-500/80'
      }`}
    >&nbsp;</button>
  );
};
