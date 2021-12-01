import './Headliner.css'

import image1 from './../../assets/img/img1.jpg'
import likeIcon from './../../assets/img/icon-like.svg'
import dislikeIcon from './../../assets/img/icon-dislike.svg'
import clockIcon from './../../assets/img/icon-clock.svg'

function Headliner() {
   return (
      <article className="headliner">
         <img className="thumbnail-img" src={image1} alt="" />
         <div className="info">
            <h1 className="title">Hate speech vs free speech</h1>
            <div className="rating">
               <div className="like">
                  <img className="like-icon" src={likeIcon} alt="" />
                  <span className="text">10.8k</span>
               </div>
               <div className="dislike">
                  <img className="dislike-icon" src={dislikeIcon} alt="" />
                  <span className="text">10.8k</span>
               </div>
            </div>
            <div className="wrapper">
               <span className="label">BBC NEWS</span>
               <div className="time">
                  <img className="time-icon" src={clockIcon} alt="" />
                  <span className="time-text">2: 00 pm</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;