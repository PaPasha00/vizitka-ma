import { useState } from "react";
import Arrow from "../../../assets/Arrow";
import Modal from "../../../components/Modal";
import s from "./BlockInfo.module.scss";

function BlockInfo() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={s.root} id="About">
      <div className={s.row}>
        <div className={s.text}>
        Более 15 лет я веду частную практику и помогаю людям справляться с непростыми жизненными ситуациями. <br/><br/>Мой опыт - от работы в психиатрическом отделении клинического госпиталя до наставничества подростков и коучинга первых лиц компаний. <br/><br/>Занимаюсь научной работой, являюсь автором научных статей и кандидатом наук.
        <br/><br/>Но всё это не главное. <br/><br/>Самое важное - я от души служу своему делу и верю, что после нашей встречи ваша жизнь станет лучше. 
        </div>
      </div>
      <div onClick={() => setModalOpen(true)} className={s.button}>
        УЗНАТЬ БОЛЬШЕ ОБО МНЕ
      </div>
      <div className={s.arrow}>
        <Arrow />
      </div>

      {modalOpen && 
      <Modal buttonText={'Отлично!'} body={<div className={s.infoBlock}>
        <div className={s.infoBlock_scroll}><div className={s.infoBlock_problem}>С какой проблематикой я работаю?</div>
        <div className={s.infoBlock_text}>Эмоциональные проблемы, личностные кризисы, семейные отношения, самооценка, профессиональное самоопределение и многое другое. Если вы ощущаете себя в состоянии кризиса, конфликта, депрессии, переживаете развод, панику, утрату близкого или карьерный тупик, чувствуете неуверенность в себе, потерю смыслов, трудности с выражением чувств и идей, одиночество и страхи, то я буду рад вам помочь. </div>
        <div className={s.infoBlock_text}>В практике применяю:
        классический психоанализ, а также методики из клинической, семейной и детской психологии. Работаю со взрослыми, детьми, подростками и семейными парами. Могу провести тренинг для рабочего коллектива.</div>
        <div className={s.infoBlock_text}>Стоимость консультации - от 5000р/час. Скидка на первичный приём и диагностику. Приём ведётся очно или онлайн по предварительномй записи. </div>
        <div className={s.infoBlock_text}>Совет начинающим: Начните! Жду вашего обращения. </div></div>
        
      </div>} onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default BlockInfo;
