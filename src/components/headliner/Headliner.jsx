import Label from '../label/Label';
import Time from '../time/Time';
import s from './Headliner.module.css'




function Headliner(props) {
   return (
      <article className={s.headliner}>
         <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
         <div className={s.info}>
            <h1 className={s.title}>{props.title}</h1>
            <div className={s.rating}>
               <div className={s.like}>
                  <img className={s.likeIcon} src={props.likeIcon} alt="" />
                  <span className={s.text}>{props.likes}</span>
               </div>
               <div className={s.dislike}>
                  <img className={s.dislikeIcon} src={props.dislikeIcon} alt="" />
                  <span className={s.text}>{props.dislikes}</span>
               </div>
            </div>
            <div className={s.wrapper}>
               <Label labelText={props.labelText} />
               <Time />
            </div>
         </div>
      </article>
   );
}

export default Headliner;