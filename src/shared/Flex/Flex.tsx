import React from "react";
type AlignItems =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start"
  | "baseline"
  | "normal"
  | "stretch";

type JustifyContent =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "normal"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "left"
  | "right";

type FlexDirection =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";
type FlexWrap =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "nowrap"
  | "revert"
  | "unset"
  | "wrap"
  | "wrap-reverse";
interface IProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
  className?: string;
  flexWrap?: FlexWrap;
  onClick?(): void;
}

export const Flex: React.FC<IProps> = ({
  children,
  alignItems,
  justifyContent,
  direction,
  className,
  flexWrap,
  onClick,
}) => {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        display: "flex",
        width: "100%",
        flexWrap: flexWrap || "wrap",
        flexDirection: direction || "row",
        position: "relative",
        alignItems: alignItems || "initial",
        justifyContent: justifyContent || "initial",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
