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
import clockIcon from './assets/img/icon-clock.svg'

function App() {
  return (
    <div className="App">
      <Headliner clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image1} title="Hate speech vs free speech" />
      <Headliner clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image2} title="Ontario Liberal leadership" />
      <Headliner clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="BBS NEWS" thumbnail={image3} title="Victim of Scarborough" />
      <Headliner style={{color: "red", backgroundColor: "pink"}} clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="ABS NEWS" thumbnail={image4} title="Mother who left her baby" />
      <Headliner clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="CW6 NEWS" thumbnail={image5} title="Mother of Stefanie Rengel" />
      <Headliner clockIcon={clockIcon} dislikeIcon={dislikeIcon} likeIcon={likeIcon} labelText="CNN NEWS" thumbnail={image6} title="World Cup: Popular items" />
    </div>
  );
}

export default App;
