import React from 'react';

import TransactionHistory from './TransactionHistory';

class CustomerDetails extends React.Component {
    render() {
        let customer = this.props.customer

        return (
            <div className='customer-details'>
                <div className='personal-info'>
                    <div className='identity'>
                        <div id='name'>
                            { customer["name"] }
                        </div>
                        <div id='phone'>
                            { customer["phone"] }
                        </div>
                    </div>
                    <div className='shipping'>
                        <div id='address'>
                            { customer["address"] }
                        </div>
                        <div id='city-state-zip'>
                            { customer["city"] + ', ' + customer["state"] + ', ' + customer["zip"] }
                        </div>
                    </div>
                    <div className='billing'>
                        { 'Billing: ' + customer["billing"] }
                    </div>
                </div>
                <TransactionHistory customer={customer}/>
            </div>
        )

    }


}

export default CustomerDetails;