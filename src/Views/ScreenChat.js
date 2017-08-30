import React from 'react';
import PropTypes from 'prop-types';

const ScreenChat = (props) => {
  return (
      <div className="container-fluid">
        <div className="chat-screen">
          {props.messages}
        </div>
      </div>
  )
}

ScreenChat.propTypes = {
  messages: PropTypes.string,
}

export default ScreenChat;
