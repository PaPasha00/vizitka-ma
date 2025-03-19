import Arrow from "../../../assets/Arrow";
import s from "./BlockInfo.module.scss";

function BlockInfo() {
  return (
    <div className={s.root} id="About">
      <div className={s.row}>
        <div className={s.text}>
          I’m John Surname, a senior UI/UX designer basded in New York, USA. I
          passionate to build mobile UI designs.
        </div>
      </div>
      <div className={s.arrow}>
        <Arrow />
      </div>
    </div>
  );
}

export default BlockInfo;
