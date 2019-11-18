import React, { Component } from "react";
import { ChatBot } from "aws-amplify-react";
class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let handleComplete = (err, confirmation) => {
      if (err) {
        alert("Bot conversation failed");
        return;
      }
      alert("Welcome");
      return "Thats the list";
    };
    return (
      <div>
        <ChatBot
          title="PlayMusic"
          botName="PlayMusic"
          welcomeMessage="Welcome to Automated chatbot"
          onComplete={handleComplete()}
          voiceEnabled={true}
          clearOnComplete={true}
        />
      </div>
    );
  }
}

export default Chatbot;
