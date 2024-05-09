"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export function ChangeTheme() {
  const { systemTheme, setTheme, theme } = useTheme();
  const [activeTheme, setActiveTheme] = useState<boolean>(false);

  useEffect(() => {
    setActiveTheme(systemTheme === "light" ? false : true);
  }, [systemTheme]);

  return (
    <div className="pr-10  font-bold text-white">
      <label htmlFor="theme-switch" className="flex items-center justify-center gap-1">
        Theme:
        {/* <Switch
          id="theme-switch"
          className="border-zinc-600"
          checked={activeTheme}
          onCheckedChange={() => {
            setActiveTheme(!activeTheme);
            setTheme(activeTheme ? "light" : "dark");
          }}
        /> */}
        <Button
          className=""
          variant={"default"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-yellow-500 text-yellow-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-zinc-500 text-zinc-300" />
        </Button>
      </label>
    </div>
  );
}
