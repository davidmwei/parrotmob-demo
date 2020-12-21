import React from 'react';

class Transaction extends React.Component {
    render() {
        return (
            <li className='trans'>
                <div className='top'>
                    <div className='brand'>
                        {this.props.brand}
                    </div>
                    <div className='price'>
                        {'$' + this.props.price}
                    </div>
                </div>
                <div className='item'>
                    {this.props.item}
                </div>
                <div className='picture'>
                    [insert picture here in the future]
                </div>
            </li>
        )
    }
}

export default Transaction;