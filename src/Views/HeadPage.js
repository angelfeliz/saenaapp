import React from 'react';
import PropTypes from 'prop-types';


const HeadPage = (props) => (
  <div className="row main">
    <div className="col-lg-1 col-md-1 col-sm-1 col-xs1">
      <div className="text-center arrow_back">
        <i onClick={() => {props.goTo()}} className="fa fa-arrow-left back_arrow_color fa-2x" aria-hidden="true"></i>
      </div>
    </div>
    <div className="text-center">
      <img className="img-responsive logo_img" src={require("../image/Saena-03.jpg")}/>
    </div>
  </div>
)

HeadPage.propTypes = {
  goTo = propTypes.func,
};


export default HeadPage;
