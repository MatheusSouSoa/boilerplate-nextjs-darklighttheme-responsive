import { useMenuContext } from "@/context/MenuProvider";
import { useTheme } from "@/context/ThemeProvider";

const HomeComponent = () => {
  const { isMenuOpen } = useMenuContext();

  const { theme } = useTheme();

  return (
    <div
      className={`calc-c-header w-4/5 xl:w-4/5 shadow-md overflow-y-auto ${
        isMenuOpen && "hidden sm:block"
      }`}
    >
      <div className="w-full h-full p-3">
        {/* <div className="w-full h-[5000px] bg-red-500 "> */}
        <h1>Hello world</h1>
        <p>This is my first Next.js app {theme}</p>
      </div>
    </div>
  );
};

export { HomeComponent };
