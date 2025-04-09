import s from "./Modal.module.scss";

function Modal({ body, onClose, buttonText }: { body: any; onClose: any, buttonText: string }) {
  return (
    <div className={s.container} onClick={onClose}>
      <div
        className={s.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {body}
        <div className={s.modal_closeButton} onClick={onClose}>
          {buttonText}
        </div>
      </div>
      
    </div>
  );
}

export default Modal;
