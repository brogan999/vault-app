import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  /** Page title */
  title: ReactNode;
  /** Optional description below the title */
  description?: ReactNode;
  /** Optional right-side actions (e.g. buttons, export) */
  actions?: ReactNode;
  /** Optional content below the title/description row (e.g. mirror upgrade CTA description) */
  children?: ReactNode;
  className?: string;
}

/**
 * Consistent section header for app pages (vault, settings, store, mirror).
 * Same margin, title size, and optional actions slot so all app pages feel aligned.
 */
export function PageHeader({
  title,
  description,
  actions,
  children,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn("mb-8", className)}
      data-slot="page-header"
    >
      <div
        className={cn(
          actions && "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
        )}
      >
        <div>
          <h1 className="text-2xl font-medium text-foreground font-serif lg:text-3xl text-balance">
            {title}
          </h1>
          {description != null && (
            <p className="text-muted-foreground mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {actions != null && <div className="shrink-0">{actions}</div>}
      </div>
      {children != null && <div className="mt-2">{children}</div>}
    </header>
  );
}
