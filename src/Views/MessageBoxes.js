import React from 'react';
import PropTypes from 'prop-types';

export const MessageBoxRight = (props) => (
  <div className='row'>
    <div className="talk-bubble tri-right round right-top pull-right">
       <div className="talktext">
         <p>{props.text}</p>
      </div>
   </div>
  </div>
)


export const MessageBoxLeft = (props) => (
  <div className='row'>
    <div className="tri-left talk-bubble tri-right round left-top">
       <div className="talktext">
        <p>{props.text}</p>
     </div>
    </div>
  </div>
)

MessageBoxRight.propType = {
  text: PropType.string,
}

MessageBoxLeft.propTypes = {
  text: PropType.string,
}
