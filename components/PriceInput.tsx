import Image from "next/image";
import plusSvg from "@/public/plus-outline.svg";
import minusSvg from "@/public/minus-outline (1).svg";

interface PriceInputProps {
  value: number;
}

const PriceInput = ({ value }: PriceInputProps) => {
  return (
    <div className="flex-row">
      <button>
        <Image src={minusSvg} width={16} height={16} alt="" />
      </button>
      <input value={value} />
      <button>
        <Image src={plusSvg} width={16} height={16} alt="" />
      </button>
    </div>
  );
};

export default PriceInput;
