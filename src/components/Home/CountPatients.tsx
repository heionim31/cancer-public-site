// CountPatients.tsx
import React from "react";

interface TextProps {
  count: number;
  text: string;
}

const CountPatients: React.FC<TextProps> = ({ count, text }) => {
  return (
    <div className="text-center px-20">
      <h3 className="text-3xl font-bold mb-1">{count}+</h3>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default CountPatients;
