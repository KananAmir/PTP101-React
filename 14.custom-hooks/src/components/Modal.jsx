import { useEffect } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  // ESC ilə bağlama
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Modal açıq deyilsə render etmə
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
