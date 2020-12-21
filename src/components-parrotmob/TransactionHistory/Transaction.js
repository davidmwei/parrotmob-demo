import React from 'react';

class Transaction extends React.Component {
    render() {
        return (
            <li className='trans'>
                <div className='brand'>
                    {this.props.brand}
                </div>
                <div className='item'>
                    {this.props.item}
                </div>
                <div className='price'>
                    {this.props.price}
                </div>
            </li>
        )
    }
}

export default Transaction;