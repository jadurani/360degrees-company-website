type FactColor = "primary" | "accent";

interface FactProps {
  /**
   * Color of the `title` and `num`
   */
  color: FactColor;
  /**
   * Background number
   */
  bgNum: string;
  /**
   * Title of the fact (core value or offering)
   */
  title: string;
  /**
   * Description of the fact (core value or offering)
   */
  description: string;
}

const getBgColor = (color: FactColor) => {
  if (color == "accent") {
    return "text-accent-50";
  }

  return "text-primary-100";
};

const getTitleColor = (color: FactColor) => {
  if (color == "accent") {
    return "text-accent-600";
  }

  return "text-primary-600";
};

export const Fact = ({ color, bgNum, title, description }: FactProps) => {
  const bgColor = getBgColor(color);
  const titleColor = getTitleColor(color);

  return (
    <div className="relative p-4">
      {/* number at the back */}
      <div
        className={`${bgColor} absolute font-header -top-8 -left-0 font-bold text-[96px] lg:-top-14 lg:-left-4 lg:text-[128px]`}>
        {bgNum}
      </div>

      <div className="p-2 relative z-10">
        {/* title */}
        <h2 className={`${titleColor} text-h4 font-bold font-header`}>
          {title}
        </h2>

        {/* description */}
        <p className="font-body text-neutral-800 text-justify">{description}</p>
      </div>
    </div>
  );
};
