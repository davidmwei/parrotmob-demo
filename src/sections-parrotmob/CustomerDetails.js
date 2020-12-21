import React from 'react';

import TransactionHistory from './TransactionHistory';

class CustomerDetails extends React.Component {
    render() {
        let customer = this.props.customer

        return (
            <div className='CustomerDetails'>
                <div className='Personal-Info'>
                    <div id='name'>
                        { customer["name"] }
                    </div>
                    <div id='phone'>
                        { customer["phone"] }
                    </div>
                    <div id='address'>
                        { customer["address"] }
                    </div>
                    <div id='city'>
                        { customer["city"] }
                    </div>
                    <div id='state'>
                        { customer["state"] }
                    </div>
                    <div id='zip'>
                        { customer["zip"] }
                    </div>
                    <div id='billing'>
                        { customer["billing"] }
                    </div>
                </div>
                <TransactionHistory customer={customer}/>
            </div>
        )

    }


}

export default CustomerDetails;