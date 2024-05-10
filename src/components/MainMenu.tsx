import { useMenuContext } from "@/context/MenuContext";
import sideMenuItems from "@/useCases/MainMenuItems";
import Link from "next/link";

const MainMenu = () => {

  const { isMenuOpen } = useMenuContext();

  return (
    <div className={`calc-c-header border w-auto xl:w-1/5 shadow-md bg-white ${!isMenuOpen && 'hidden sm:block'}`}>
      <ul className="grid gap-2 p-2 font-bold">
        {sideMenuItems.map((item, index) => (
          <li
            key={index}
            className=" w-full"
          >
            <Link
              href={item.path}
              className="p-2 rounded-md flex gap-1 items-center sm:justify-center xl:justify-start bg-zinc-100 hover:bg-zinc-200 cursor-pointer"
            >
              <span className="xl:mr-2">{item.icon}</span>
              <p className=" sm:hidden xl:block">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MainMenu };
