import React from 'react';
import { FiGrid, FiSearch } from 'react-icons/fi';
import { FaStore } from 'react-icons/fa';

import './Aside.css';

export default class Aside extends React.Component {

  constructor(props) {
    super(props);
    this.selectedSectionRef = React.createRef();
    this.currentSelected = undefined;
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(event) {
    // event.stopPropagation();
    console.log(this.currentSelected)
    this.currentSelected.style.color = 'initial';
    this.currentSelected.style.borderRight = 'initial';
    event.target.style.color = '#3ebcb3';
    event.target.style.borderRight = '5px solid #3ebcb3';

    this.currentSelected = event.target;
  } l

  componentDidMount() {
    this.selectedSectionRef.current.style.borderRight = '5px solid #3ebcb3';
    this.selectedSectionRef.current.style.color = '#3ebcb3';
    this.currentSelected = this.selectedSectionRef.current;
  }

  render() {
    return (
      <div className='aside-container'>
        <div className='aside-icon-group'>
          <div className='aside-icon' ref={this.selectedSectionRef} onClick={this.changeSelection}>
            <FiGrid size={25} style={{ pointerEvents: 'none' }} />
          </div>
          <div className='aside-icon' onClick={this.changeSelection}>
            <FiSearch size={25} style={{ pointerEvents: 'none' }} />
          </div>
          <div className='aside-icon' onClick={this.changeSelection}>
            <FaStore size={25} style={{ pointerEvents: 'none' }} />
          </div>
        </div>
      </div>
    );
  }
}