import './App.css';

import Headliner from './components/headliner/Headliner';
import image1 from './assets/img/img1.jpg'
import image2 from './assets/img/img2.jpg'
import image3 from './assets/img/img3.jpg'
import image4 from './assets/img/img4.jpg'
import image5 from './assets/img/img5.jpg'
import image6 from './assets/img/img6.jpg'
import likeIcon from './assets/img/icon-like.svg'
import dislikeIcon from './assets/img/icon-dislike.svg'


function App() {
  return (
    <div className="App">
      <Headliner time="2:00 pm" dislikes="1.4k" likes="10.8k" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image1} title="Hate speech vs free speech" />
      <Headliner time="2:00 pm" dislikes="3.4k" likes="10.8k" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image2} title="Ontario Liberal leadership" />
      <Headliner time="2:00 pm" dislikes="1.1k" likes="20.8k" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image3} title="Victim of Scarborough" />
      <Headliner time="2:00 pm" dislikes="20k" likes="0" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="ABS NEWS" thumbnail={image4} title="Mother who left her baby" />
      <Headliner time="2:00 pm" dislikes="1.4k" likes="10.8k" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="CW6 NEWS" thumbnail={image5} title="Mother of Stefanie Rengel" />
      <Headliner time="2:00 pm" dislikes="1.4k" likes="10.8k" dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="CNN NEWS" thumbnail={image6} title="World Cup: Popular items" />
    </div>
  );
}

export default App;
