import s from './Time.module.css'
import clockIcon from './../../assets/img/icon-clock.svg'




function Time(props) {
   return (
      <div className={s.time}>
         <img className={s.timeIcon} src={clockIcon} alt="" />
         <span className={s.timeText}>{props.time}</span>
      </div>
   );
}

export default Time;
