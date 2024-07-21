import Image from "next/image";
import minusSvg from "@/public/minus-outline (1).svg";

const CloseButton = () => {
  return (
    <div>
      <Image src={minusSvg} width={14} height={14} alt="" />
    </div>
  );
};

export default CloseButton;
