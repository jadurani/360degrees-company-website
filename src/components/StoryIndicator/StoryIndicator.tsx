import React from 'react';

interface StoryIndicatorProps {
  active: boolean;
  idx: number;
  onClick: (idx: number) => void;
}

export const StoryIndicator = ({ active, idx, onClick }: StoryIndicatorProps) => {
  return (
    <button
      onClick={() => onClick(idx)}
      className={`w-full h-1 rounded-full transition-colors ${
        active ? 'bg-neutral-0/80' : 'bg-neutral-500/80'
      }`}
    >&nbsp;</button>
  );
};
