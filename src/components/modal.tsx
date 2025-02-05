import React from "react";
import { formatCurrency } from "../lib/utils";
import logo from "../assets/Logo.png";

interface ModalProps {
  isOpen: boolean;
  title: string;
  amount: number;
  statusMessage?: string;
  primaryButton?: { text: string; onClick: () => void };
  secondaryButton: { text: string; onClick: () => void };
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  amount,
  statusMessage,
  primaryButton,
  secondaryButton,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <div className="w-12 h-12 mx-auto flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
        </div>
        <h2 className="text-sm font-normal mt-4">{title}</h2>
        <p className="text-xl font-bold">{formatCurrency(amount)}</p>
        <p className="text-gray-500 mt-2">{statusMessage}</p>
        <div className="mt-4 space-y-2">
          {primaryButton && (
            <button
              onClick={primaryButton.onClick}
              className="w-full text-sm bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer"
            >
              {primaryButton.text}
            </button>
          )}
          <button
            onClick={secondaryButton.onClick}
            className="w-full text-sm text-gray-400 py-2 rounded-lg hover:underline cursor-pointer"
          >
            {secondaryButton.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
