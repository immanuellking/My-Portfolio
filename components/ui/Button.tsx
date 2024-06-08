import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative flex justify-center items-center h-12 w-48 md:w-52 md:mt-10 overflow-hidden rounded-lg focus:outline-none border-[1px] border-[bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-gradient-to-r from-[#E2CBFF] via-[#393BB2] to-[#E2CBFF] text-sm font-medium text-white p-[1.5px]"
      onClick={handleClick}
    >
      <span className={`bg-black-100 w-full h-full rounded-[calc(0.5rem-1px)] flex items-center justify-center gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default Button;
