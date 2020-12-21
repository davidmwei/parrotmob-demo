import React from 'react';

import CustomerDetails from './sections-parrotmob/CustomerDetails';
import ChatInterface from './sections-parrotmob/ChatInterface';

import customerJSON from './data-parrotmob/customer.json';

class ParrotMob extends React.Component {
    render() {
        let customerData = customerJSON["customers"]
        let randCustomer = Math.floor(customerData.length * Math.random())
        let customer = customerData[randCustomer]

        return (
            <div className='parrotmob-main'>
                <CustomerDetails customer={customer}/>
                <ChatInterface customer={customer} />
            </div>
        )
    }
}

export default ParrotMob;