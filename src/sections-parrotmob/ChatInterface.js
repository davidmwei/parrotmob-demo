import React from 'react';

import ChatBubble from '../components-parrotmob/ChatInterface/ChatBubble';

class ChatInterface extends React.Component {
    logData
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            log: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.logData = JSON.parse(localStorage.getItem('log: ' + this.props.customer["name"]))

        if (localStorage.getItem('log: ' + this.props.customer["name"])) {
            this.setState({
                message: this.logData.message,
                log: this.logData.log
            })
        } else {
            this.setState({
                message: '',
                log: []
            })
        }
    }

    handleChange(e) {
        this.setState({message: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            log: this.state.log.concat({
                client: 1,
                message: this.state.message
            }) 
        })
        localStorage.setItem('log: ' + this.props.customer["name"], JSON.stringify(this.state))
    }

    render() {
        return (
            <div className='chat-box'>
                <div className='messages-container'>
                    <ul className='messages-list'>
                        {this.state.log.map(chat => {
                            return <ChatBubble client={chat["client"]} message={chat["message"]} />
                        })}
                    </ul>
                </div>
                <div className='input-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type='text' value={this.state.message} onChange={this.handleChange}/>
                        </label>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatInterface;