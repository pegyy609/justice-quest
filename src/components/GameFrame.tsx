import { ReactNode } from "react";

interface GameFrameProps {
  children: ReactNode;
  background?: string;
}

const GameFrame = ({ children, background }: GameFrameProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-navy-deep p-2 sm:p-4">
      <div className="game-frame scanlines">
        {background && (
          <img
            src={background}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/55 to-navy-deep/85" />
        <div className="relative z-10 w-full h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameFrame;
