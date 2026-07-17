import { useEffect, useState } from "react";
import { ChevronUp } from "react-feather";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Kembali ke atas'
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ backgroundColor: "#18382f" }}>
      <ChevronUp className='h-6 w-6' />
    </button>
  );
}
