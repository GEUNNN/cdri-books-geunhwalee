export interface ButtonProps {
  variant: "primary" | "secondary";
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant }) => {
  const label = variant === "primary" ? "구매하기" : "상세보기";
  return <button>{label}</button>;
};

export default Button;
