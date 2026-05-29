import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: "wide" | "narrow";
};

export default function Container({ children, className, width = "wide" }: Props) {
  return (
    <div
      className={cn(
        width === "wide" ? "container-prose" : "container-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
}
