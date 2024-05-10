import { useMenuContext } from "@/context/MenuContext";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <header className=" w-full bg-blue-800 p-3 flex">
      <div className="flex gap-2">
        <button
          onClick={toggleMenu}
          className={`w-7 flex-col gap-1 items-center justify-center flex sm:hidden`}
        >
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
        </button>
        <h1>My App</h1>
      </div>
    </header>
  );
};

export default Header;
