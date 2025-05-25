import { cn } from "@/lib/utils"

export const styles = {
  card: {
    base: "rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6",
    interactive: "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  },
  button: {
    primary: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
    secondary: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
  },
  icon: {
    wrapper: "flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
  }
}

export const getCardClassName = (className?: string, interactive?: boolean) => {
  return cn(
    styles.card.base,
    interactive && styles.card.interactive,
    className
  )
}

export const getButtonClassName = (variant: "primary" | "secondary", className?: string) => {
  return cn(
    variant === "primary" ? styles.button.primary : styles.button.secondary,
    className
  )
}

export const getIconWrapperClassName = (className?: string) => {
  return cn(styles.icon.wrapper, className)
}
