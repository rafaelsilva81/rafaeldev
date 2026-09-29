import { ReactNode } from "react";

const BoldText = ({ children }: { children: ReactNode }) => (
  <strong className="text-accent font-bold">{children}</strong>
);

export default BoldText;
