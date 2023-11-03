import ReactDOM from "react-dom";

const IMGIX_URL = process.env?.NEXT_PUBLIC_IMGIX_URL || ''

export function PreloadResources() {
  if (!IMGIX_URL) return;

  // React 18.3 does not yet include type definitions for ReactDOM.preload, ReactDOM.preconnect, and ReactDOM.preconnectDNS.
  // @ts-ignore
  ReactDOM.preconnect(IMGIX_URL, { crossOrigin: 'anonymous' });
  // @ts-ignore
  ReactDOM.prefetchDNS(IMGIX_URL);
  return null;
}