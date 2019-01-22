import React from "react";
import './App.css';
import MarkdownRenderer from 'react-markdown-renderer';
import {connect} from "react-redux";
import {socket} from "../index";

@connect((store) => {
    return {
        messages: store.chat.messages
    }
})
export class App extends React.Component {
    constructor(props) {
        super(props);

        // React state
        this.state = {
            user_message: ""
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitMessage(event) {
        if (event !== 'button') {
            if (event.shiftKey) {
                return;
            }
            if (event.keyCode !== 13) {
                return;
            } else {
                event.preventDefault();
            }
        }

        if (this.state.user_message) {
            console.log(this.state.user_message);
            socket.emit("message", {
                "contents": this.state.user_message
            });
            this.setState({
                user_message: ""
            })
        }
    }
    handleChange(event) {
        this.setState({
            user_message: event.target.value
        });
    }

    render() {
        // Javascript level logic here
        let chat_log = this.props.messages.map((value) => {
            return (
                <span className='chat-item' key={value.contents + " " + Math.random()}>
                    <MarkdownRenderer
                        options={{
                            preset: 'full'
                        }}
                        markdown={value.contents}/>
                </span>
            )
        });

        // JSX (Html) Render logic here
        return (
            <React.Fragment>

            <div className='chat-box'>
                {chat_log}
            </div>

            <textarea
                onKeyDown={this.submitMessage}
                value={this.state.user_message}
                onChange={this.handleChange} />

            <button
                onClick={() => this.submitMessage('button')}
            > Submit
            </button>

            </React.Fragment>
        )
    }
}
