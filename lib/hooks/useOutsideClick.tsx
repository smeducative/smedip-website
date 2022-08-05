import { useEffect, useRef } from "react";

const useOutsideClick = (callback: CallableFunction) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLInputElement)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};

export default useOutsideClick;
