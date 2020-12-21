import React from 'react';

import Transaction from '../components-parrotmob/TransactionHistory/Transaction';

class TransactionHistory extends React.Component {
    constructor(props) {
        super(props);
        // Props: customer 
        this.state = {
            input: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                input: event.target.value
            }
        )
    }
    
    render() {
        let transactions = this.props.customer["transactions"]

        return (
            <div className='trans-history'>
                <input className='filter-bar' type='text' placeholder='Filter' value={this.state.value} onChange={this.handleChange} />
                <ul className='trans-list'>
                    {transactions.filter(transaction => (transaction.brand + " " + transaction.item).includes(this.state.input)).map(trans => {
                                let brand = trans.brand;
                                let item = trans.item;
                                let price = trans.price;

                                return <Transaction brand={brand} item={item} price={price} />
                    })  }
                </ul>
            </div>
        )
    }
}

export default TransactionHistory;