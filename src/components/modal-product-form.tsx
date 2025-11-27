import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export const ModalProductForm: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  const sizeClass =
    size === "sm" ? "max-w-md" : size === "lg" ? "max-w-4xl" : "max-w-2xl";

  return createPortal(
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
      "
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`
          w-full ${sizeClass}
          rounded-2xl bg-white
          shadow-[0_20px_45px_rgba(15,23,42,0.25)]
          border border-gray-100
          animate-[fadeIn_0.18s_ease-out]
        `}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            {title ?? "Детали"}
          </h2>

          <button
            onClick={onClose}
            className="
              inline-flex items-center justify-center
              rounded-full p-1.5
              hover:bg-gray-100 active:bg-gray-200
              transition
            "
          >
            <FiX className="text-xl text-gray-500" />
          </button>
        </div>

        <div className="px-5 py-4 max-h-[70vh] overflow-y-auto">{children}</div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(12px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </div>,
    document.body
  );
};
