# ParrotMob Coding Challenge: Customer Support Agent Interface

Built using React with dummy data located in JSONs.

## Instructions
To run this demo locally, please download all files locally into a directory of choice. Navigate to the directory and run `npm start`.

You can refresh the page to randomly choose one of three customers: David, Peter, and Osa.

Your conversation will be saved so that you can refresh to talk to Peter and still be able to return to the same conversation with Osa.

## Hierarchy of Components
- ParrotMob.js
    - CustomerDetails.js
        - TransactionHistory.js
            - Transaction.js
    - ChatInterface.js
        - ChatBubble.js

## Components

#### ParrotMob.js
Wrapper class for the entire project. Imports `customerJSON` and randomly selects a customer from the data. This customer is then passed into `ParrotMob.js`'s two children, `CustomerDetails.js` and `ChatInterface.js`.

#### CustomerDetails.js
Takes in a `customer` to help populate information. Displays the personal information of the customer, as well as pass `customer` into its child, `TransactionHistory.js`.

Future consideration: Make personal information editable by the client.

#### TransactionHistory.js
Takes in a `customer` and uses the `customer`'s transaction history to create a filterable list of `Transaction`s. This list can be filtered by both brand name and item name. For example, both "Nike" and "FlyKnit" will get the desired result. Case sensitive!

Future consideration: Have more information such as payment method, address shipped, date purchased, purchase category, and be filterable by these fields as well. Remove case sensitivity.

#### Transaction.js
Takes in `brand`, `price`, and `item` of the transaction. Serves as an easy-to-view component to separate individual transactions.

#### ChatInterface.js
Takes in a `customer` in order to create conversation persistance. Renders the chat box and the message/submit fields. Passes down the messages sent to `ChatBubble`. Utilizes localStorage to save the conversation with each customer.

Known bug: localStorage does not seem to persist the last message sent, which means the last message sent will be deleted upon refresh as well as overwrite the sent message when the customer replies. No workaround yet.

#### ChatBubble.js
Takes in `client` to differentiate client-side vs customer-side messaging and `message` to determine what message to display. Acts as a reusable component to separate individual messages and determine how the messages are rendered depending on client-side vs customer-side.


### Total Time Spent
Much more than 4 hours, but this challenge was quite fun and let me play around with a lot of different tools.



        