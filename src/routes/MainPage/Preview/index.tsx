import s from "./Preview.module.scss";
import image from "./../../../assets/MA.jpg";
import Arrow from "../../../assets/Arrow";

function Preview() {
  return (
    <div className={s.root} id="preview">
      <div className={s.row}>
        <div className={s.text}>
          Михаил Шляхтунов <br/> Психолог, преподаватель психологии, наставник
        </div>
        <img className={s.image} src={image} alt="Михаил Андреевич" />
      </div>
      <div className={s.arrow}>
        <Arrow />
      </div>
    </div>
  );
}

export default Preview;
