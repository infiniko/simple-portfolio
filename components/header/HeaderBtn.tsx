import React from "react";
import { LiquidButton } from "../animate-ui/primitives/buttons/liquid";

const HeaderBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiquidButton
      hoverScale={1.05}
      className="text-sm rounded-full font-medium px-4 py-2 h-10 overflow-hidden [--liquid-button-color:var(--primary)] [--liquid-button-background-color:#0f766e] text-header-btn group/icon"
    >
      {children}
    </LiquidButton>
  );
};

export default HeaderBtn;
