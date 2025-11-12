import React from "react";
import "./SlideInPanel.css";

type SlideInPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function SlideInPanel({ isOpen, onClose, children }: SlideInPanelProps) {
  return (
    <>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`slide-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-content">{children}</div>
      </div>
    </>
  );
}
