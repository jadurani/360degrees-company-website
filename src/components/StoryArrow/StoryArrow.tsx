type ArrowDirection = "left" | "right";

interface StoryArrowProps {
  /**
   * By default, the SVG arrow points to the left
   */
  direction: ArrowDirection;
}

export const StoryArrow = ({ direction = 'left' }: StoryArrowProps) => {
  const directionClass = direction == 'right' ? '-scale-x-100' : ''

  return (
    <button className={`${directionClass} bg-neutral-800/50  hover:bg-neutral-800 transition-colors rounded-full w-8 h-8 flex items-center justify-center`}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
