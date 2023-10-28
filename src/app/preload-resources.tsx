"use client";

import ReactDOM from "react-dom";

const EXT_CDN = "https://360degreessystemscorporation-25102023.imgix.net";

export function PreloadResources() {
  // ReactDOM.preload('...', { as: '...' });

  // React 18.3 does not yet include type definitions for ReactDOM.preload, ReactDOM.preconnect, and ReactDOM.preconnectDNS. You can use // @ts-ignore as a temporary solution to avoid type errors.
  // @ts-ignore
  ReactDOM.preconnect(EXT_CDN);
  // @ts-ignore
  ReactDOM.prefetchDNS(EXT_CDN);

  return null;
}
