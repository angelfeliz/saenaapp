import React from 'react';
import PropTypes from 'prop-types';

const TextBoxChat = (props) => (
  <div className="container-fluid">
  {props.showMenuDot ?
    <div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dot_menu">
        <ul className="dot_menu_ul">
          <li onClick={() => {props.onClickMenuOption(1)}}>
              <h4>Calcular Contrataciones empleado</h4>
          </li>
          <li onClick={() => {props.onClickMenuOption(2)}}>
            <h4>Calcular ISR</h4>
          </li>
          <li onClick={() => {props.onClickMenuOption(3)}}>
            <h4>Calculo de Gastos Educativos</h4>
          </li>
        </ul>
      </div>
    </div>
    </div>
    :
    null
  }

    <div className="text-box-container">
    <div className="row">
      <div className="col-lg-11 col-md-9 col-sm-9 col-xs-9" >
        <input type="text" value={props.text}
        onKeyPress={(e)=> {props.onKeyPressInputChat(e)}} onChange={(e)=>{props.onChange(e)}} className="input-text_box_chat"/>
      </div>

      <div className="col-lg-1 col-md-3 col-sm-2 col-xs-2">
        {props.isWriting ?
          <span className="fa-stack fa-lg send_icon" onClick={()=>{props.sendText()}}>
            <i className="fa fa-square-o fa-stack-2x"></i>
            <i className="fa fa-paper-plane fa-stack-1x"></i>
          </span>
          :
          <i onClick={() => {props.onClickShowMenuDot()}} className="fa fa-ellipsis-h dot_menu_button fa-2x" aria-hidden="true"></i>
        }
      </div>
     </div>
    </div>
  </div>
)

TextBoxChat.propTypes = {
  showMenuDot: PropTypes.bool,
  onClickMenuOption: PropTypes.func,
  text: PropTypes.string,
  onKeyPressInputChat: PropTypes.func,
  onChange: PropTypes.func,
  isWriting: PropTypes.bool,
  sendText: PropTypes.func,
  onClickShowMenuDot: PropTypes.func,
}

export default TextBoxChat;
