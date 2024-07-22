interface SeparatorProps {
  type?: "horizontal" | "vertical";
}

const Separator = ({ type = "vertical" }: SeparatorProps) => {
  return (
    <div
      className={`${
        type === "vertical"
          ? "border-l w-[2px] h-[21px]"
          : "border-t w-[21px] h-[2px]"
      } border-gray-300/50`}
    />
  );
};

export default Separator;
