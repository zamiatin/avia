import React, { Component } from 'react';

import styles from './styles/table.scss';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Searches</th>
              <th>Clicks</th>
              <th>Uniq.clicks</th>
              <th>CTR</th>
              <th>Bookings</th>
              <th>Sales</th>
              <th>BTR</th>
              <th>STR</th>
              <th>Success %</th>
            </tr>
            <tr>
              <td>Date</td>
              <td>Searches</td>
              <td>Clicks</td>
              <td>Uniq.clicks</td>
              <td>CTR</td>
              <td>Bookings</td>
              <td>Sales</td>
              <td>BTR</td>
              <td>STR</td>
              <td>Success %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default Table;
