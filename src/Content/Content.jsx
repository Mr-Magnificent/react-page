import React from 'react';

import './Content.css';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';
import data from '../mockData';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.solutionsList = data.map((item, indx) => {
      return (<Card data={item} key={indx} />);
    });
  }

  render() {
    return (
      <div className='content'>
        <div>
          <p id='cont-heading'>Content Store</p>
        </div>
        <div id='cont-bulk'>
          <div className='cont-bulk--container'>
            <p className='cont-bulk--header'>
              Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet
            </p>
            <p className='cont-bulk--content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
            <Button text={'Order via Excel Sheet'} />
          </div>
        </div>
        <div className='cont-list'>
          {this.solutionsList}
        </div>
      </div>
    );
  }
}