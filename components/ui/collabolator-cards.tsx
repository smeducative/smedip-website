"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const CollaboratorCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-full overflow-hidden",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll "
          // pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className='relative flex-shrink-0 px-8 py-6 max-w-full'
            key={item.name}>
            <blockquote>
              <div
                aria-hidden='true'
                className='-top-0.5 -left-0.5 -z-1 absolute w-[calc(100%_+_4px)] h-[calc(100%_+_4px)] pointer-events-none user-select-none'></div>
              <img
                src={item.logo}
                alt={item.name}
                className='relative z-20 w-full h-24'
              />
              {/* <div className='relative z-20 flex flex-row items-center mt-6'>
                <span className='flex flex-col gap-1'>
                  <span className='font-normal text-gray-400 text-sm leading-[1.6]'>
                    {item.name}
                  </span>
                  <span className='font-normal text-gray-400 text-sm leading-[1.6]'>
                    {item.title}
                  </span>
                </span>
              </div> */}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
