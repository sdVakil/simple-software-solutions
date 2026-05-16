"use client";

import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE } from "./cal";

export default function CalBookButton({
  className,
  children,
  onClick,
  ...props
}) {
  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
