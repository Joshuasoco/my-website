import React from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  outline:
    "border border-gray-300 text-gray-900 bg-white hover:bg-gray-100 focus:ring-gray-300",
  ghost:
    "text-gray-900 bg-transparent hover:bg-gray-100 focus:ring-gray-300",
  link: "text-blue-600 underline hover:text-blue-700 focus:ring-transparent",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  icon: "p-2",
};

/**
 * A basic Tailwind CSS button component.
 * @param {object} props
 */
const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const classes = `${baseStyles} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
