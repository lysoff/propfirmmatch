import Image from "next/image";
import eyeSvg from "@/public/eye-outline.svg";
import settingsSvg from "@/public/cog-outline.svg";
import Separator from "@/components/Separator";
import CloseButton from "@/components/CloseButton";

const Account = () => {
  return (
    <div>
      <div>
        <div>
          <span>Account Info</span>
          <Image src={eyeSvg} width={16} height={16} alt="" />
        </div>
        <div>
          <Image src={settingsSvg} width={16} height={16} alt="" />
          <Separator />
          <CloseButton />
        </div>
      </div>
      <div>
        <span>Name:</span>
        <span>{}</span>
      </div>
    </div>
  );
};

export default Account;
