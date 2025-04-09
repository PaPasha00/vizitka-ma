import Arrow from "../../../assets/Arrow";
import s from "./BlockInfo.module.scss";

function BlockInfo() {
  return (
    <div className={s.root} id="About">
      <div className={s.row}>
        <div className={s.text}>
          Психолог – это не советчик, а проводник в мир ваших эмоций. Я не даю
          готовых ответов, но помогаю вам их найти. Конфиденциальность и
          уважение – основа моей работы.
        </div>
      </div>
      <div className={s.arrow}>
        <Arrow />
      </div>
    </div>
  );
}

export default BlockInfo;
