import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
}

const Grid: React.FC<GridProps> = ({ children, className, cols = 3 }) => {
  return (
    <div className={`grid gap-2 grid-cols-1 md:grid-cols-${cols} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
