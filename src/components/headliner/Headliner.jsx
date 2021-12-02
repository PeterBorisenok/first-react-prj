import './Headliner.css'




function Headliner(props) {
   return (
      <article className="headliner">
         <img className="thumbnail-img" src={props.thumbnail} alt="" />
         <div className="info">
            <h1 className="title">{props.title}</h1>
            <div className="rating">
               <div className="like">
                  <img className="like-icon" src={props.likeIcon} alt="" />
                  <span className="text">10.8k</span>
               </div>
               <div className="dislike">
                  <img className="dislike-icon" src={props.dislikeIcon} alt="" />
                  <span className="text">10.8k</span>
               </div>
            </div>
            <div className="wrapper">
               <span className="label" style={props.style}>{props.labelText}</span>
               <div className="time">
                  <img className="time-icon" src={props.clockIcon} alt="" />
                  <span className="time-text">2: 00 pm</span>
               </div>
            </div>
         </div>
      </article>
   );
}

export default Headliner;