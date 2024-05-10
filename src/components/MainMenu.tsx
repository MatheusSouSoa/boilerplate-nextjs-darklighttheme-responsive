import { useMenuContext } from "@/context/MenuContext";
import UseSideMenuItems from "@/hooks/UseSideMenuItems";
import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = () => {

  const { isMenuOpen } = useMenuContext();

  const sideMenuItems = UseSideMenuItems()

  const router = useRouter();

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
              className={`w-full flex items-center p-2 rounded-lg ${router.pathname === item.path ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
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
