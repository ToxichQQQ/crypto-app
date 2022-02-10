import React, { FC } from "react";

interface HeaderProps {
  text: string;
}

export const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <h1 style={{ textAlign: "center", color: "white", marginTop: 0 }}>
      {text}
    </h1>
  );
};
