import Image from "next/image";

export interface ButtonProps {
  variant: "primary" | "secondary";
  folded?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant, folded }) => {
  const isPrimary = variant === "primary";
  const label = isPrimary ? "구매하기" : "상세보기";
  return (
    <button
      className={`rounded-2xl px-7 py-4 ${
        isPrimary ? "bg-[#007AFF]" : "bg-[#F2F4F6]"
      } ${isPrimary ? "px-7" : "pl-5 pr-4"}`}
    >
      <div
        className={`flex items-center gap-2 text-base font-medium ${
          isPrimary ? "text-white" : "text-[#6D7582]"
        }`}
      >
        {label}
        {!isPrimary && (
          <Image
            src="/button_option.svg"
            alt="arrow-right"
            width={14}
            height={8}
            className={`${folded ? "transform rotate-180" : ""}`}
          />
        )}
      </div>
    </button>
  );
};

export default Button;
