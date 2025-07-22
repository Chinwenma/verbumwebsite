import Link from "next/link";

type  ButtonProps = {
  link: string;
  label?: string;
  className?: string;
  variant?: "primary" | "outline";
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  link,
  label = "Donate Now",
  className = "",
}) => {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      className={`inline-block bg-[#ff0000] hover:bg-red-700 text-white font-semibold py-2 px-5 rounded shadow-md transition-all duration-300 ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;
