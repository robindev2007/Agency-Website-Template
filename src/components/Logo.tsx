import { logoSrc } from "@/lib/constance";
import Image from "next/image";
import { FC } from "react";

type LogoProps = {};

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="w-28">
      <Image
        src={logoSrc}
        height={600}
        width={600}
        alt="digital agency webiste logo by robin"
      />
    </div>
  );
};

export default Logo;
