interface SwitchProps {
  value?: boolean;
}

const Switch = ({ value }: SwitchProps) => {
  return (
    <div className="relative w-[40px] h-[20px] rounded-full bg-primary-500">
      <div
        className={`absolute top-[2px] w-[16px] h-[16px] bg-white transition-transform rounded-full ${
          value ? "left-[2px]" : "right-[2px]"
        }`}
      />
    </div>
  );
};

export default Switch;
