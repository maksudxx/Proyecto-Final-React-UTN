import { toast } from "react-toastify";
import "./confirmToast.css";

export const confirmToast = ({ text, onConfirm }) => {
  toast(
    ({ closeToast }) => (
      <div className="confirm-toast">
        <p className="confirm-text">{text}</p>

        <div className="confirm-actions">
          <button
            className="confirm-btn confirm-yes"
            onClick={() => {
              onConfirm();
              closeToast();
            }}
          >
            Sí
          </button>

          <button
            className="confirm-btn confirm-no"
            onClick={closeToast}
          >
            Cancelar
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      className: "confirm-toast-wrapper",
    }
  );
};
