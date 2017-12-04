import React, { Component } from 'react';

import styles from './styles/selector.scss';

class Selector extends Component {
  render() {
    return (
      <div className="selectorWrap">
        Show
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
        entries
      </div>
    )
  }
};

export default Selector;
