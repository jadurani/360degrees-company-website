import logoFull from "@assets/icons/logo-full.svg";
import logoDesktopWhite from "@assets/icons/logo-desktop-white.svg";
import Image from "next/image";

interface LogoProps {
  topDown?: boolean;
}

export const Logo = ({ topDown = false }: LogoProps) => {
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
    );
  }

  return (
    <Image
      src={logoDesktopWhite}
      alt="logo"
      className="max-w-[147px] max-h-[40px] lg:max-w-[257px] lg:max-h-[56px]"
      priority
    />
  );
};
