import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ChangeTheme } from "../theme/ChangeTheme";
import { useTheme } from "next-themes";

const Header = () => {

  const {theme} = useTheme();

  return (
    <div className={`fixed flex w-full items-center justify-between ${theme === 'light' ? 'bg-blue-900' : "bg-zinc-800"}`}>
      <NavigationMenu className="w-full">
        <NavigationMenuList className="px-4 p-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ChangeTheme/>
    </div>
  );
};

export default Header;
