import { useMenuContext } from "@/context/MenuProvider";

interface ComponentContainerProps {
  children: React.ReactNode;
}

const ComponentContainer = ({ children }: ComponentContainerProps) => {

  const { isMenuOpen } = useMenuContext();

  return (
    <div
      className={`calc-c-header w-full xl:w-full shadow-md overflow-y-auto ${
        isMenuOpen && "hidden sm:block"
      } p-4`}
    >
      {children}
    </div>
  );
};

export default ComponentContainer;
