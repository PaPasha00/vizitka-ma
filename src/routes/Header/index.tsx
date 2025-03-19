import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import clsx from "clsx";

const routes = [
  {
    name: "ОБО МНЕ",
    to: "#About",
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
        <Link className={clsx(s.button, s.button_visible)} to={"/"}>
          Михаил <br /> Андреевич
        </Link>
        <div className={s.rigthPart}>
          {routes.map((el) => (
            <a
              className={clsx(
                s.button,
                el.name === "ОБО МНЕ" && s.button_visible
              )}
              href={el.to}
            >
              {el.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
