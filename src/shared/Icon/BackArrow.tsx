import React from "react";

interface IProps {
  width: number;
  height: number;
  color: string;
}
export const BackArrow: React.FC<IProps> = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.176 8.004L12.13 1.05a.616.616 0 00-.87-.87L3.87 7.567c-.24.24-.24.63 0 .871l7.388 7.388a.616.616 0 00.87-.87L5.176 8.004z"
        fill={color}
      />
    </svg>
  );
};
