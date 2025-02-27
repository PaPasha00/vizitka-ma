import s from "./Footer.module.scss";

const socialArr = [
  {
    name: "LINKEDIN",
    link: "asdasd",
  },
  {
    name: "DRIBBLE",
    link: "asdasd",
  },
  {
    name: "BEHANCE",
    link: "asdasd",
  },
  {
    name: "WEITTER",
    link: "asdasd",
  },
  {
    name: "INSTA",
    link: "asdasd",
  },
];

function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.row}>
        <div className={s.row_contact}>КОНТАКТЫ</div>
        <div className={s.row_mail}>AOSDIFJOAI@AOJDNFOAN</div>
        <div className={s.row_social}>
          {socialArr.map((el) => (
            <a className={s.row_link} target="_blank" href={el.link}>
              {el.name}
            </a>
          ))}
        </div>
      </div>
      <div className={s.stroke}></div>
    </footer>
  );
}

export default Footer;
