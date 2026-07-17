import * as React from "react";
import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title={isDark ? "Mode terang" : "Mode gelap"}
      className='inline-flex relative justify-center items-center bg-transparent hover:bg-accent hover:text-accent-foreground rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring w-9 h-9 transition-colors'>
      {mounted ? (
        isDark ? (
          <SunIcon className='w-5 h-5' />
        ) : (
          <MoonIcon className='w-5 h-5' />
        )
      ) : (
        <span className='w-5 h-5' />
      )}
    </button>
  );
}
