import React from "react";

interface IProps {
  isSaved: boolean;
  width: number;
  height: number;
}
export const BoxSavedIcon: React.FC<IProps> = ({ height, isSaved, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.12 1.929L5.23 7.505.9 5.375 11.6.09a.877.877 0 01.78 0l3.74 1.838zM23.088 5.374l-11.082 5.49-4.15-2.045-.6-.305L18.16 2.94l.6.304 4.33 2.131zM11.118 12.447L11.106 24 .492 18.46A.927.927 0 010 17.645V6.958l4.498 2.216v3.896c0 .498.408.912.9.912.492 0 .9-.413.9-.912v-2.996l.6.293 4.22 2.08zM23.988 6.969l-11.07 5.465-.012 11.554L24 18.195l-.012-11.226z"
        fill={isSaved ? "#4844FF" : "#D3D3D3"}
      />
    </svg>
  );
};
