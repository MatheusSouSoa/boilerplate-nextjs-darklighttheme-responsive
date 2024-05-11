import { ReactNode } from "react";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type AlignItems = "start" | "end" | "center" | "stretch" | "baseline";
type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "beetwen"
  | "around"
  | "evenly";
type flexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface DisplayFlexProps {
  children: ReactNode;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  gap?: number;
  flexWrap?: flexWrap;
}

const DisplayFlex = ({
  children,
  alignItems,
  flexDirection,
  justifyContent,
  gap,
  flexWrap,
}: DisplayFlexProps) => {
  if (!children) return null;

  if (justifyContent == "beetwen") {
    return (
      <div
        className="flex flex-col justify-between w-full h-full"
        style={{ alignItems, justifyContent, flexDirection, gap, flexWrap }}
      >
        {children}
      </div>
    );
  }
  if(justifyContent == "around"){
    return (
      <div
        className="flex flex-col justify-around w-full h-full"
        style={{ alignItems, justifyContent, flexDirection, gap, flexWrap }}
      >
        {children}
      </div>
    );
  }
  if(justifyContent == "evenly"){
    return (
      <div
        className="flex flex-col justify-evenly w-full h-full"
        style={{ alignItems, justifyContent, flexDirection, gap, flexWrap }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col w-full h-full "
      style={{ alignItems, justifyContent, flexDirection, gap, flexWrap }}
    >
      {children}
    </div>
  );
};

export { DisplayFlex };
