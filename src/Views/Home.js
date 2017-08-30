import React from 'react';
import HomeSlide from '../slide/HomeSlide';


const Home = () => (
  <div>
    <div className="row slide_row">
      <HomeSlide/>
    </div>

    <div className="row body-home">
      <div className="col-lg-6">
          <div className="talk-bubble tri-right round right-top">
             <div className="talktext">
                <p>talk form right side</p>
             </div>
          </div>
      </div>
      <div className="col-lg-6">
          <div className="talk-bubble tri-right round left-top">
             <div className="talktext">
                <p>talk form right side</p>
             </div>
          </div>
      </div>
    </div>
  </div>
)


export default Home;
