import ReactDOM from "react-dom";

const EXT_CDN = "https://360degreessystemscorporation-25102023.imgix.net";

export function PreloadResources() {

  // React 18.3 does not yet include type definitions for ReactDOM.preload, ReactDOM.preconnect, and ReactDOM.preconnectDNS.
  // @ts-ignore
  ReactDOM.preconnect(EXT_CDN, { crossOrigin: 'anonymous' });
  // @ts-ignore
  ReactDOM.prefetchDNS(EXT_CDN);

  return null;
}