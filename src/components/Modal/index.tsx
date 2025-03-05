import s from "./Modal.module.scss";

function Modal({ body, onClose }: { body: any; onClose: any }) {
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
          Отмена
        </div>
      </div>
    </div>
  );
}

export default Modal;
