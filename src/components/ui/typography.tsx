import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

const variantClasses = {
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  "display-sm": "text-display-sm",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
  "heading-sm": "text-heading-sm",
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
} as const;

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: keyof typeof variantClasses;
  as?: ElementType;
};

export function Typography({
  variant = "body-md",
  as: Component = "div",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}