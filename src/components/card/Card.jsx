import style from './Card.module.css';
import arrowImg from './../../img/icons/arrow.svg';
const Card = (props) => {
  console.log(props);
  return (
    <div className={style.card}>
      <a href="#!" className={style.card__link}></a>
      <img className={style.card_img} src={props.img} alt="card" />
      <div className={style.card_body}>
        <div className={style.card_text}>
          <div className={style.card_title}>
            {props.title}
          </div>
          <div className={style.card_mute}>
            Explore Now
          </div>
        </div>
        <div className={style.card_icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Card;