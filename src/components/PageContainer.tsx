import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode
}

const PageContainer = ({children}: ContainerProps) => {

  return (
    <div className={`2xl:container h-full w-full flex flex-col sm:flex-row overflow-y-hidden`}>
      {children}
    </div>
  )
}

export default PageContainer;