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
                log: [{
                    client: 0,
                    message: 'You should hire David because he demonstrates a passion for building products which will help change the world!'
                }]
            })
        }
    }

    handleChange(e) {
        this.setState({message: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.state.message === '') {
            return false;
        }

        this.setState({
            log: this.state.log.concat({
                client: 1,
                message: this.state.message
            }) 
        })
        console.log(this.state.log)
        if (this.state.log.length === 3) {
            this.setState({
                log: this.state.log.concat({
                    client: 0,
                    message: 'I know right, he is a great fit!'
                }) 
            })
        }
        localStorage.setItem('log: ' + this.props.customer["name"], JSON.stringify(this.state))
        this.setState({
            message: ''
        })
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
                            <input className='mess-field' type='text' placeholder='Message...' value={this.state.message} onChange={this.handleChange}/>
                        </label>
                        <input className='sub-but' type='submit' value='Send' />
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatInterface;