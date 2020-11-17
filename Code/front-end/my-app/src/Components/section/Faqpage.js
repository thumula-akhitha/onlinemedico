import React, { Component } from "react";
import Faq from 'react-faq-component';
import '../css/Faq.css';

const data = {
  title: "Frequently asked questions",
  rows: [
    {
      title: "When will I recieve my order",
      content:
        "You should receive your order within 5 days from the time we receive your prescription order."
        + ' Generally it takes one to two days to be processed and mailed if no additional information is required.' +
        'Please allow a few extra days for your first order.You can track your order by going into myorders/track package, or you can call member services.'

    },
    {
      title: "What could cause a delay in prescription processing?",
      content:
        <div>
          <p>Your prescription could be delayed if:</p>
          <ul>
            <li> Your prescription is incomplete or unreadable </li>
            <li>Your medication requires prior authorization</li>
          </ul>
          <p>We will notify you if there will be a delay with your prescription shipment</p>
          <p>Note: Orders received without payment may cause processing delays and extended delivery times.</p>
        </div>
    },
    {
      title: "What happens if I don’t receive my order?",
      content: "If you do not receive your order within 7 days, please contact us. We will reship your order. " +
        "It is our priority to make sure you have the medication you need. "
    },
    {
      title: "How do I need to upload prescription?",
      content: "Go to upload prescription tab and fill email,name and DOB which is mandatory and upload prescription file using select file button."
    }]
}

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  rowTitleTextSize: '20px',
  rowContentPaddingBottom: '1.5em',
  rowContentPaddingLeft: '2em',
  rowTitlePaddingLeft: '2em',
  rowContentTextSize: '20px'
};

class Faqpage extends Component {
  render() {
    return (
      <div className='faq'>
        <Faq data={data} styles={styles} />
      </div>

    )
  }
}
export default Faqpage;