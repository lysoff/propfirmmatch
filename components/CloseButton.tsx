import Image from "next/image";
import minusSvg from "@/public/minus-outline.svg";

const CloseButton = () => {
  return (
    <div className="p-3">
      <Image src={minusSvg} width={14} height={14} alt="" />
    </div>
  );
};

export default CloseButton;
