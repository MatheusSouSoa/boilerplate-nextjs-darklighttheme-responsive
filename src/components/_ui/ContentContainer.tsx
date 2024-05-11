import { useTheme } from "@/context/ThemeProvider";

export interface ContentContainerProps {
  className?: string;
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

const ContentContainer = ({ className, children, height, width} : ContentContainerProps) => {

  const { getThemeClassName } = useTheme();

  const theme = getThemeClassName();

  return (
    <div style={{height, width}} className={`w-full calc-c-content rounded-md ${className} ${theme} shadow-md p-4`}>
      {children}
    </div>
  )
}

export default ContentContainer;