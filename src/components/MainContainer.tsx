import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode
}

const MainContainer = ({children}: ContainerProps) => {

  return (
    <div className="container h-full w-full text-black flex flex-col sm:flex-row">
      {children}
    </div>
  )
}

export default MainContainer;