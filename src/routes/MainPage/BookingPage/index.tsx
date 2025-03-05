import { useMemo, useState } from "react";
import ButtonArrow from "../../../assets/ButtonArrow";
import Modal from "../../../components/Modal";
import {
  useGetAvailableTimesQuery,
  useGetServicesQuery,
  useSetBookingSlotMutation,
} from "../../../services/dates";
import s from "./BookingPage.module.scss";
import { USE_STATE_STARTER } from "./constants";
import { Form, Input, Select, Button } from "antd";
import { transformData } from "./helpers";
const { Option } = Select;

function BookingPage() {
  const { data, isLoading } = useGetAvailableTimesQuery("");
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesQuery("");
  const [bookService, { isLoading: bookingLoading }] =
    useSetBookingSlotMutation();
  console.log(bookingLoading);

  const [modalData, setModalData] = useState(USE_STATE_STARTER);
  const [bookingPageState, setBookingStatePage] = useState(0);

  const [form] = Form.useForm();
  const [selectedMessenger, setSelectedMessenger] = useState("");

  const onFinish = (values: {
    service: string;
    name: string;
    email: string;
    phone: string;
    messengerUsername: string;
    messenger: string;
  }) => {
    bookService({
      service: values.service,
      time_slot: modalData.data.id,
      client_name: values.name,
      email: values.email,
      phone_number: values.phone,
      telegram_contact:
        values.messenger === "telegram" ? values.messengerUsername : "",
      whatsapp_contact:
        values.messenger === "whatsapp" ? values.messengerUsername : "",
      preferred_contact_method: values.messenger,
    });
    //   {
    // "service": "6b2acd43-b6bc-4938-a2f5-706b510f04f1",
    // "time_slot": "eb2123fa-b28a-43b0-8262-7db0d40a19b4",
    // "client_name": "тест3",
    // "email": "ivan@example.com",
    // "phone_number": "+79001234567",
    // "telegram_contact": "@gettyz",
    // "whatsapp_contact": "+79001234567",
    // "preferred_contact_method": "telegram"
    // }
  };

  const handleMessengerChange = (value: string) => {
    setSelectedMessenger(value);
  };

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
          <div className={s.container_text}>
            {transformedData?.[0]?.monthsDay} —{" "}
            {transformedData?.[transformedData.length - 1]?.monthsDay}
          </div>
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
                    onClick={() => {
                      if (time.is_available) {
                        setModalData({ isOpen: true, data: time });
                      }
                    }}
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
                Запись на {modalData.data.date} в{" "}
                {modalData.data.start_time.slice(0, -3)}
              </div>

              <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                  className={s.modal_input}
                  label="Имя"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите ваше имя!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Введите ваше имя"
                    className={s.custom_select}
                  />
                </Form.Item>

                <Form.Item
                  label="Email (Будет отправлена информаци по записи)"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите ваш email!",
                    },
                    { type: "email", message: "Введите корректный email!" },
                  ]}
                >
                  <Input
                    placeholder="Введите ваш email"
                    className={s.custom_select}
                  />
                </Form.Item>

                <Form.Item
                  label="Номер телефона"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите ваш номер телефона!",
                    },
                    {
                      pattern: /^(\+7|8)[0-9]{10}$/,
                      message: "Введите корректный российский номер телефона!",
                    },
                  ]}
                >
                  <Input
                    placeholder="+7 XXX XXX XX XX"
                    className={s.custom_select}
                  />
                </Form.Item>

                <Form.Item
                  label="Выберите услугу"
                  name="service"
                  rules={[
                    { required: true, message: "Пожалуйста, выберите услугу!" },
                  ]}
                >
                  <Select
                    placeholder="Выберите услугу"
                    loading={isLoadingServices}
                    className={s.custom_select}
                  >
                    {services.map((service: { id: string; name: string }) => (
                      <Option
                        key={service.id}
                        value={service.id}
                        className={s.custom_select}
                      >
                        {service.name}{" "}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Выберите мессенджер для обратной связи"
                  name="messenger"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, выберите мессенджер!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Выберите мессенджер"
                    onChange={handleMessengerChange}
                    className={s.custom_select}
                  >
                    <Option value="telegram" className={s.custom_select}>
                      Telegram
                    </Option>
                    <Option value="whatsapp" className={s.custom_select}>
                      WhatsApp
                    </Option>
                  </Select>
                </Form.Item>

                {/* Поле для ввода никнейма выбранного мессенджера */}
                {selectedMessenger && (
                  <Form.Item
                    label={`Никнейм в ${
                      selectedMessenger === "telegram" ? "Telegram" : "WhatsApp"
                    }`}
                    name="messengerUsername"
                    rules={[
                      {
                        required: true,
                        message: "Пожалуйста, введите ваш никнейм!",
                      },
                    ]}
                  >
                    <Input
                      placeholder={`Введите ваш никнейм в ${selectedMessenger}`}
                      className={s.custom_select}
                    />
                  </Form.Item>
                )}

                {/* Кнопка отправки формы */}
                <Form.Item>
                  <Button className={s.sent} type="primary" htmlType="submit">
                    Отправить
                  </Button>
                </Form.Item>
              </Form>
            </div>
          }
          onClose={() => setModalData(USE_STATE_STARTER)}
        />
      )}
    </div>
  );
}

export default BookingPage;
