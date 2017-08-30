import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import ScreenChat from './ScreenChat';
import { MessageBoxRight, MessageBoxLeft } from './MessageBoxes';
import TextBoxChat from './TextBoxChat';
import {question, answer, saenaConoce, saenaDespide} from '../utils/objectList';

class MainChat extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      messages: [],
      inputText:'',
      isWriting: false,
      showMenuDot: false,
      redirectOptionSelect:'',
      saenaTalk:0,
      saenaAnswer:0
    }
  }
onChange = (e) => {
  console.log('lenght', this.state.inputText.length);

  if(e.target.value) {
      this.setState({...this.state, inputText: e.target.value, isWriting: true})
   }
   else{
     console.log('letter in', this.state.inputText);
     this.setState({...this.state, inputText: e.target.value, isWriting:false});
   }
}

onClickSendText = () => {


    if(this.state.inputText) {
      let messages = this.state.messages.map(item => item);
      messages.push(<MessageBoxRight text={this.state.inputText}/>);
      this.setState({...this.state, messages: messages, inputText: '', isWriting:false});
      document.getElementsByClassName("chat-screen")[0].scrollTop += 10000;
      if(this.state.inputText !== "Saena"){
      window.setTimeout(this.SaenaTalk,700);
    }

    }

}

SaenaTalk = () => {
  let text;
  let messages = this.state.messages.map(item => item);
  if(this.state.saenaTalk < 2) {
    console.log('entro a contestar');
    text = saenaConoce[this.state.saenaTalk];
    messages.push(<MessageBoxLeft text={text}/>);
    this.setState({...this.state, messages: messages, isWriting:false, saenaTalk: this.state.saenaTalk+1});
    document.getElementsByClassName("chat-screen")[0].scrollTop += 10000;

}
else if(this.state.saenaAnswer < 2) {
  text = answer[this.state.saenaAnswer];
  messages.push(<MessageBoxLeft text={text}/>);
  if(this.state.saenaAnswer == 1){
    text = answer[2];
    messages.push(<MessageBoxLeft text={text}/>);
  }
  this.setState({...this.state, messages: messages, isWriting:false, saenaAnswer: this.state.saenaAnswer+1});
  document.getElementsByClassName("chat-screen")[0].scrollTop += 10000;

  }
else {
  text = saenaDespide[0];
  messages.push(<MessageBoxLeft text={text}/>);
  this.setState({...this.state, messages: messages, isWriting:false});
  document.getElementsByClassName("chat-screen")[0].scrollTop += 10000;
}
}

onClickShowMenuDot = () => {
  this.setState({...this.state, showMenuDot: !this.state.showMenuDot});
}

onClickMenuOption = (option) => {
  let num_option = parseInt(option);
  this.setState({...this.state, redirectOptionSelect: num_option, showMenuDot: false})
}
onKeyPressInputChat = (e) => {
  if(e.key == 'Enter' && this.state.inputText) {
     this.onClickSendText();
  }
}
componentDidUpdate() {
  var objDiv = document.getElementsByClassName("chat-screen");
objDiv.scrollTop = objDiv.scrollHeight;
}

  render() {
    switch(this.state.redirectOptionSelect){
      case 1:
        return <Redirect to='/calc_contrataciones_empleado'/>
      case 2:
        return <Redirect to='/calc_isr'/>
      case 3:
        return <Redirect to='/option1'/>
      default:

       return (
        <div className="container-fluid main">
        <div className="text-center">

          <img className="img-responsive logo_img" src={require("../image/Saena-03.jpg")}/>

        </div>

          <ScreenChat
            messages={ this.state.messages}
          />
          <TextBoxChat
             onChange={this.onChange}
             sendText={this.onClickSendText}
             text={this.state.inputText}
             isWriting={this.state.isWriting}
             onClickShowMenuDot={this.onClickShowMenuDot}
             showMenuDot={this.state.showMenuDot}
             onKeyPressInputChat={this.onKeyPressInputChat}
             onClickMenuOption={this.onClickMenuOption}
          />
        </div>
      )
    }

  }
}

export default MainChat;
