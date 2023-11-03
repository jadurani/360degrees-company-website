"use client";

import { useEffect } from "react";
import { BlocksShuffleThree } from "react-svg-spinners";

export default function Loading() {
  useEffect(() => {
    // disable scrolling of background when modal's open
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed z-[100] h-screen w-screen top-0 left-0 bg-neutral-900/90 text-neutral-0 flex items-center justify-center">
      <BlocksShuffleThree color="white" height={32} width={32} />
    </div>
  );
}
