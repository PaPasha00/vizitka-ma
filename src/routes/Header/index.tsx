import s from "./Header.module.scss";
import clsx from "clsx";

const routes = [
  {
    name: "ОБО МНЕ",
    to: "#About",
  },
  {
    name: "ЗАПИСЬ",
    to: "#Booking",
  },
  {
    name: "КОНТАКТЫ",
    to: "#Contacts",
  },
];

function Header() {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <a className={clsx(s.button, s.button_visible)} href="#preview">
          Михаил <br /> Андреевич
        </a>
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
