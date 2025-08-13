interface Props {
  type: "primary" | "secondary";
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick: () => void;
}

export default function Button({
  type,
  children,
  className,
  style,
  onClick,
}: Props) {
  return (
    <button
      className={`flex justify-center gap-4 px-4 py-2 rounded-lg bg-${type} ${
        type === "secondary" ? "text-primary" : "text-white"
      } ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
