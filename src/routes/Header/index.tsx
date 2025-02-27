import { Link, useNavigate } from "react-router-dom";
import s from "./Header.module.scss";

const routes = [
  {
    name: "ОБО МНЕ",
    to: "/account",
  },
  {
    name: "ЗАПИСЬ",
    to: "/account",
  },
  {
    name: "КОНТАКТЫ",
    to: "/account",
  },
];

function Header() {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Link className={s.button} to={"/"}>
          Михаил <br /> Андреевич
        </Link>
        <div className={s.rigthPart}>
          {routes.map((el) => (
            <Link className={s.button} to={el.to}>
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
