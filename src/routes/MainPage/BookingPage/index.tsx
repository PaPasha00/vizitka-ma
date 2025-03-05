import { useMemo, useState } from "react";
import ButtonArrow from "../../../assets/ButtonArrow";
import Modal from "../../../components/Modal";
import { useGetAvailableTimesQuery } from "../../../services/dates";
import s from "./BookingPage.module.scss";
import { USE_STATE_STARTER } from "./constants";
import { IData } from "./types";
import { transformData } from "./helpers";

function BookingPage() {
  const { data, isLoading } = useGetAvailableTimesQuery("name");
  const [modalData, setModalData] = useState(USE_STATE_STARTER);
  const [bookingPageState, setBookingStatePage] = useState(0);

  const setPrevPage = () => {
    setBookingStatePage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return 0;
    });
  };

  const setNextPage = () => {
    setBookingStatePage((prev) => {
      if (Math.ceil(transformData(data).length / 7) > prev + 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const transformedData = useMemo(() => {
    return transformData(data).slice(
      bookingPageState * 7,
      (bookingPageState + 1) * 7
    );
  }, [data, bookingPageState]);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.container_header}>Доступные записи</div>
        <div className={s.container_buttons}>
          <div onClick={setPrevPage} className={s.container_buttons_left}>
            <ButtonArrow />
          </div>
          <div className={s.container_text}>24.03 - 30.03</div>
          <div onClick={setNextPage} className={s.container_buttons_right}>
            <ButtonArrow />
          </div>
        </div>
        <div className={s.container_wrapper}>
          {!isLoading &&
            transformedData.map((el, index) => (
              <div key={el.monthsDay + index} className={s.card}>
                <div className={s.card_title}>{el.monthsDay}</div>
                {el.items.map((time) => (
                  <div
                    onClick={() => setModalData({ isOpen: true, data: time })}
                    style={{
                      backgroundColor: !time.is_available
                        ? "#4D4949"
                        : "#857E7E",
                      color: !time.is_available ? "#857E7E" : "#FFFFFF",
                      cursor: !time.is_available ? "not-allowed" : "pointer",
                    }}
                    className={s.card_time}
                  >
                    {time.start_time.slice(0, -3)} —{" "}
                    {time.end_time.slice(0, -3)}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      {modalData.isOpen && (
        <Modal
          body={
            <div className={s.modal}>
              <div className={s.modal_title}>
                Записать на {modalData.data.date} в {modalData.data.start_time}
              </div>
              <input placeholder="Имя" className={s.modal_input} type="text" />
            </div>
          }
          onClose={() => setModalData(USE_STATE_STARTER)}
        />
      )}
    </div>
  );
}

export default BookingPage;
