import Image from "next/image";
import infoSvg from "@/public/info-outline.svg";

const Info = () => {
  return <Image src={infoSvg} width={12} height={12} alt="" />;
};

export default Info;
