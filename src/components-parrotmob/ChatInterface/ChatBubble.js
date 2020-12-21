import React from 'react';

class ChatBubble extends React.Component {
    render() {
        return (
            <li className='bubble'>
                {this.props.client
                    ? <div className='client-true'>{this.props.message}</div>
                    : <div className='client-false'>{this.props.message}</div>
                }
            </li>
        )
    }
}

export default ChatBubble