import React, { useState } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const CollapsiblePanel: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ width: isOpen ? 200 : 50, overflow: "hidden" }}>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default CollapsiblePanel;
