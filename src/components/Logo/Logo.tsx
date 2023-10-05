import logoMobileWhite from "@assets/icons/logo-mobile-white.svg";
import logoFull from "@assets/icons/logo-full.svg";
import logoDesktopWhite from "@assets/icons/logo-desktop-white.svg";
// import logoDesktopDefault from "@assets/icons/logo-desktop-default.svg";
// import logoMobileDefault from "@assets/icons/logo-mobile-default.svg";
import Image from "next/image";


interface LogoProps {
  topDown?: boolean;
}


export const Logo = ({ topDown = false}: LogoProps) => {

  if (topDown) {
    return (
      <>
        <div className="inline-block lg:hidden">
          <Image src={logoDesktopWhite} alt="logo" priority />
        </div>
        <div className="hidden lg:inline-block">
          <Image src={logoFull} alt="logo" priority />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="inline-block lg:hidden">
        <Image src={logoMobileWhite} alt="logo" />
      </div>
      <div className="hidden lg:inline-block">
        <Image src={logoDesktopWhite} alt="logo" />
      </div>
    </>
  )
};
