import { toast } from "react-toastify";

export const confirmToast = ({
  text = "¿Confirmar acción?",
  onConfirm,
  onCancel,
}) => {
  toast(
    ({ closeToast }) => (
      <div>
        <p>{text}</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            onClick={() => {
              onConfirm?.();
              closeToast();
            }}
          >
            Confirmar
          </button>

          <button
            onClick={() => {
              onCancel?.();
              closeToast();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
    }
  );
};
