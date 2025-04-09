import s from "./Footer.module.scss";

const socialArr = [
  {
    name: "TELEGRAM",
    link: "https://t.me/shlyahtunov_rehab",
  },
  {
    name: "INSTA*",
    link: "https://www.instagram.com/shlyahtunov?igsh=MWEzbTIwajI3Z2c5cw==",
  },
];

function Footer() {
  return (
    <footer className={s.root} id="Contacts">
      <div className={s.row}>
        <div className={s.row_contact}>КОНТАКТЫ</div>
        <div className={s.row_mail}>mikhail.shlykhtunov@gmail.com</div>
        <div className={s.row_social}>
          {socialArr.map((el) => (
            <a className={s.row_link} target="_blank" href={el.link}>
              {el.name}
            </a>
          ))}
        </div>
      </div>
      <div className={s.stroke}>
        <a
          href="https://www.klerk.ru/cdoc/view/federalnyj-zakon-ot-27072006-no-152-fz-o-personalnyh-dannyh/"
          target="_blank"
          className={s.stroke_link}
        >
          Ваши данные защищены и не передаются третьим лицам.
        </a>
        *Meta Platforms Inc. (Instagram, Facebook) запрещена в РФ.
      </div>
    </footer>
  );
}

export default Footer;
