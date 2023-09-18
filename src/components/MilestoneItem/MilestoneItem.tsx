type Direction = 'left' | 'right';
export interface MilestoneItemProps {
  direction: Direction;
  year: string;
  mainEvent: string;
  otherEvents?: string[];
}

const partialArrow = (direction: Direction) => (
  <svg
    className={`${direction == "left" ? "" : "rotate-180"}`}
    width="49"
    height="52"
    viewBox="0 0 49 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.6274 48.2563L3.05176e-05 25.6289L22.6274 3.00144L45.2549 25.6289L22.6274 48.2563Z"
      fill="#FAFAFA"
    />
    <path
      d="M24.043 1.59033L24.041 1.59234L48.0573 25.6025L24.0149 49.6528L24.0086 49.6464L22.5988 51.0552V48.231L22.6036 48.2357L45.2294 25.6024L22.6251 3.00482L22.6288 3.00109V0.177002L24.043 1.59033Z"
      fill="#444041"
    />
  </svg>
);

export const MilestoneItem = ({
  direction,
  year,
  mainEvent,
  otherEvents = [],
}: MilestoneItemProps) => {
  return (
    <>
      <div className="relative z-10 flex mt-8 flex-col">
        <div className="font-bold my-2 font-header text-h3 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
          {year}
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="font-bold my-2 min-w-[180px] max-w-[280px] text-center font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
            {mainEvent}
          </div>

          {
            otherEvents.map((e, idx) => (
              <div key={idx} className="font-bold my-2 min-w-[180px] max-w-[280px] text-center font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto">
              {e}
              </div>
            ))
          }


        </div>

        {/* Desktop view */}
        <div className={`hidden lg:block absolute ${direction == 'right' ? 'left-1/2 translate-x-1/3': 'right-1/2 -translate-x-1/3'}`}>
          <div className={`relative min-h-[98px] min-w-[350px] max-w-[350px] flex items-center -mt-2 font-bold my-2 font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto ${direction == 'right' ? '': 'justify-end'}`}>
            {mainEvent}
            <span className={`absolute top-1/2 -translate-y-1/2 ${direction == 'right' ? '-left-6 -ml-[2.5px]' : '-right-6 -mr-[2.5px]' }`}>
              {partialArrow(direction)}
            </span>
          </div>

          {
            otherEvents.map((e, idx) => (
              <div key={idx} className={`my-2 min-w-[350px] max-w-[350px] font-header text-h6 solid border-2 border-neutral-800 py-2 px-8 bg-neutral-50 mx-auto ${direction == 'right' ? '': 'text-right'}`}>
                {e}
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
