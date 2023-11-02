"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    // what happens if there's no back??? is this possible??
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    // disable scrolling of background when modal's open
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed z-[100] h-screen w-screen top-0 left-0">
      <div className="relative">
        {/* backdrop */}
        <div
          ref={overlay}
          onClick={onClick}
          className="absolute top-0 h-screen w-screen bg-neutral-900 md:bg-neutral-900/90"></div>

        {/* content */}
        <div className="flex items-center justify-center w-screen h-screen">
          <div
            ref={wrapper}
            className="w-screen h-screen md:w-[768px] md:h-[520px] lg:w-[1024px] lg:h-[768px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
