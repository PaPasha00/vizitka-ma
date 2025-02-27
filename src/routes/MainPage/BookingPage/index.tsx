import Arrow from "../../../assets/Arrow";
import ButtonArrow from "../../../assets/ButtonArrow";
import s from "./BookingPage.module.scss";

const dataArray = [
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
  {
    name: "24 марта, Пн",
    times: ["13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00", "13:00 - 14:00"],
  },
];

function BookingPage() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.container_header}>Доступные записи</div>
        <div className={s.container_buttons}>
          <div className={s.container_buttons_left}>
            <ButtonArrow />
          </div>
          <div className={s.container_text}>24.03 - 30.03</div>
          <div className={s.container_buttons_right}>
            <ButtonArrow />
          </div>
        </div>
        <div className={s.container_wrapper}>
          {dataArray.map((el) => (
            <div className={s.card}>
              <div className={s.card_title}>{el.name}</div>
              {el.times.map((time, i) => (
                <div
                  style={{
                    backgroundColor: i % 2 === 0 ? "#4D4949" : "#857E7E",
                  }}
                  className={s.card_time}
                >
                  {time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
