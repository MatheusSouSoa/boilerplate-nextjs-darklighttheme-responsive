import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode
}

const MainContainer = ({children}: ContainerProps) => {

  return (
    <div className="2xl:container h-full w-full text-black flex flex-col sm:flex-row overflow-y-hidden ">
      {children}
    </div>
  )
}

export default MainContainer;