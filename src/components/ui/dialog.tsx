import { cn } from "@/lib/utils";
import * as React from "react";
import { useEffect, useRef } from "react";

interface DialogMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogMenu = React.forwardRef<HTMLDivElement, DialogMenuProps>(
  ({ className, children, open, setOpen, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    // Merge forwarded ref with internal ref
    const combinedRef = (node: HTMLDivElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
      (internalRef as React.MutableRefObject<HTMLDivElement | null>).current =
        node;
    };

    useEffect(() => {
      let timer: number | null = null;
      const handler = (event: MouseEvent) => {
        // If ref is set and the click is outside the dialog element, close the dialog
        if (
          internalRef.current &&
          !internalRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      if (open) {
        // Delay registering the event so the current click doesn't close the dialog immediately
        timer = window.setTimeout(() => {
          document.addEventListener("click", handler);
        }, 0);
      } else {
        document.removeEventListener("click", handler);
      }

      return () => {
        if (timer !== null) {
          clearTimeout(timer);
        }
        document.removeEventListener("click", handler);
      };
    }, [open, setOpen]);

    if (!open) return null;

    return (
      <div
        ref={combinedRef}
        className={cn("dialog-menu", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

DialogMenu.displayName = "DialogMenu";
export default DialogMenu;
