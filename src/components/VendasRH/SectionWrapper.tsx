import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  variant: "dark" | "light";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({
  variant,
  children,
  className,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4",
        variant === "dark" ? "section-dark" : "section-light",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </section>
  );
};
